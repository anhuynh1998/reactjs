import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import * as actions from '../../../store/actions';
import { sortedLastIndex } from 'lodash';
import { createLogger } from 'redux-logger';
import Login from '../../Auth/Login';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';

// Register plugins if required
// MdEditor.use(YOUR_PLUGINS_HERE);

// Initialize a markdown parser
const mdParser = new MarkdownIt(/* Markdown-it options */);

// Finish!
function handleEditorChange({ html, text }) {
  console.log('handleEditorChange', html, text);
}


class TableUsers extends Component {
    constructor(props) {
        super(props);
        this.state = {
           userRedux:[]
       }
        
    }
    componentDidMount() {
        this.props.fetchUsersRedux();
        
        
    }
    componentDidUpdate(prevProps, prevState,snapshot) {
        if (prevProps.users !== this.props.users)
        {
            this.setState({
                userRedux:this.props.users
                
            })

        }
        
    }
    handleEdit = (user) => {
        console.log('check user info',user)

        
    }
    handleDeleteUser = (user) => {
        this.props.deleteUserRedux(user.id)
        
        
    }
    


    render() {
        let arrUsers = this.state.userRedux;   
      
        
        return (
            <React.Fragment>
                 <div ><table id="customers">
                <tbody>
  <tr>
    <th>Id</th>
    <th>Email</th>
    <th>FistName</th>
    <th>LastName</th>
    <th>Adress</th>
    <th  >Actions</th>
  </tr>
  
                    {arrUsers && arrUsers.length > 0 && arrUsers.map((item, index) => {
                        
                        return (
                            <tr key={item.id}>
                            <td >{item.id}</td>
                            <td >{item.email}</td>
                            <td >{item.firstName}</td>
                            <td >{item.lastName}</td>
                            <td > {item.address}</td>
                            <td>
                                    <button
                                        onClick={()=> this.handleEdit(item)}
                                        className='btn-edit' ><i className='fas fa-pencil-alt'></i></button>
                                    <button
                                onClick={()=> this.handleDeleteUser(item)}        className='btn-delete' > <i className='fas fa-trash'></i></button>
                            </td>
                        </tr>
                       )
                        
                    }) 
                    }
        
            

       

     </tbody>
     
    

  
            </table></div>
            <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)} onChange={handleEditorChange} />

            </React.Fragment>
           
           
      )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
        users: state.admin.users,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        fetchUsersRedux: () => dispatch(actions.fetchAllUser()),
        deleteUserRedux:(id)=> dispatch(actions.DeleteUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableUsers);
