import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions';
import { sortedLastIndex } from 'lodash';
import { createLogger } from 'redux-logger';
import Login from '../../Auth/Login';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
import './ManageDoctor.scss';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import { InputGroup } from 'reactstrap';
import { LANGUAGE } from '../../../utils';
import { getDetailDoctor } from '../../../services/userSevice';




// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!



class ManageDoctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contentHtml: '',
            contentMarkdown: '',
            selectedOption: '',
            description: '',
            arrDoctor: '',
            hasOldData:false
            
            
       }
        
    }
    componentDidMount() {
        this.props.fetchAllDoctor();
        
   
        
        
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
       
        if (prevProps.alldoctor !== this.props.alldoctor)
        {
            let datadoctor = this.buildDataIputDoctor(this.props.alldoctor)
            this.setState({
                arrDoctor:datadoctor
            })
            }
      
        
    }
    handelSaveContentMarkdown = () => {
        this.props.createdoctorInfor({
             contentHTML:this.state.contentHtml,
                description: this.state.description,
                contentMarkdown: this.state.contentMarkdown,
                doctorId:this.state.selectedOption.value,
            
        })
        console.log('lpp')
    }
    handleChange =async (selectedOption) => {
        this.setState( { selectedOption } );
        let res = await getDetailDoctor( selectedOption.value );
       
        if ( res && res.data && res.errCode === 0 && res.data.markdown ) {
            let markdown = res.data.markdown;
            this.setState( {
                contentHTML: markdown.contentHtml,
                description: markdown.description,
                contentMarkdown: markdown.contentMarkdown,
                hasOldData:true
                
                
            })
            
        }
        else {
            this.setState( {
                contentHTML: '',
                description:'',
                contentMarkdown: '',
                hasOldData:false
                
            })
            
        }
    }
    handleOnchangeDescription = (event) => {
        this.setState({
            description:event.target.value
        })
        
        
    }
    handleEditorChange =({ html, text })=> {
     this.setState({
            contentMarkdown: text,
            contentHtml:html,
        })
    }
    buildDataIputDoctor = (inputData) => {
        let result = [];
        let { language } = this.props;

        if (inputData && inputData.length > 0)
        {
            inputData.map((item, index) => {
                let object = {};
                let labelVi = `${item.lastName} ${item.firstName}`
                let labelEn = `${item.firstName} ${item.lastName} `
                object.label = language === LANGUAGE.VI ? labelVi : labelEn;
                object.value = item.id;
                result.push(object)
                
            
        })
            
            }
        
        return result;
        
    }
    
    


    render() {
        
      
       let  hasOldData = this.state.hasOldData;
        
        
        return (
            <div className='manage-doctor-container'>
                <div className='manage-doctor-title'> TẠO THÔNG TIN BÁC SĨ   </div>
                <div className='more-infor-doctor'>
                    <div className='content-left form-group'>
                        <label> Chọn bác sĩ :</label>
                        <Select
                            className=" select-doctor"
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={this.state.arrDoctor}
                        />

                    </div>
                    <div className='content-right form-group'>
                        <label> Thông tin giới thiệu :</label>
                        <textarea
                            onChange={(event) => this.handleOnchangeDescription(event)}
                            value={this.state.description}
                        
                            className='form-control' rows="4">

                        </textarea>
                        

                    </div>
                </div>
               
                <MdEditor style={{ height: '500px' }}
                    value={this.state.contentMarkdown}
                    renderHTML={text => mdParser.render(text)}
                    onChange={this.handleEditorChange} />
               
                <button
                    onClick={()=>this.handelSaveContentMarkdown()}
                    className={hasOldData === true ? "manage-doctor-btn-save" : "create-infor-doctor"}> { 

                       hasOldData===true ? <span> Lưu thông tin </span>:<span>Tạo thông tin </span>
                    }
                </button>

            </div>
           
           
      )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        alldoctor:state.admin.alldoctor,
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAllDoctor: () => dispatch(actions.fetchAllDoctor()),
        createdoctorInfor: (data)=>dispatch(actions.createDoctorInfora(data))
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
