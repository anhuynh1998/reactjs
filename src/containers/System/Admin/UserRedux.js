import { map } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import { getAllCodes } from '../../../services/userSevice'
import * as actions from '../../../store/actions'
import { LANGUAGE ,CommonUtils} from '../../../utils'
import './UserRedux.scss'
import Lightbox from 'react-image-lightbox';
import 'react-image-lightbox/style.css'; 
import TableUsers from './TableUsers';


class UserRedux extends Component {

    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            rolesArrr: [],
            previewImg: '',
            isOpen: false,
            email: '',
            password:'',
            firstName: '',
            lastName: '',
            role: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            avatar:'',
            
            
            
        }
        
    }
    

    async componentDidMount() {
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRolesStart();

        // try {
        //    await console.log(getAllGender('gender'));
        //     let resp = await getAllGender('gender');
        //     console.log('check resp',resp)
            
        //     if (resp && resp.errCode === 0) {
        //         this.setState({
        //             genderArr:resp.data,
        //         })
        //     }
            
        // } catch (e) {
        //     console.log(e)
            
        // }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux)
        {
            let arrGender =this.props.genderRedux
            this.setState(
                {
                    genderArr: arrGender,
                    gender: arrGender&&arrGender.length>0 ? arrGender[0].keyMap:''
                    
                }
            )
        }
        if (prevProps.positionRedux !== this.props.positionRedux)
        {    let arrPosition =this.props.positionRedux
            this.setState(
                {
                    positionArr: arrPosition,
                    position: arrPosition&& arrPosition.length>0 ? arrPosition[0].keyMap:''
                }
            )
        }
        if (prevProps.rolesRedux !== this.props.rolesRedux)
        {
            let arrRole = this.props.rolesRedux
            this.setState(
                {
                    rolesArrr: arrRole,
                    role:arrRole&& arrRole.length>0 ? arrRole[0].keyMap :''
                }
            )
        }
        if (prevProps.users !== this.props.users)
        {
            let arrGender = this.props.genderRedux
            let arrPosition = this.props.positionRedux
            let arrRole = this.props.rolesRedux
            this.setState({
            email: '',
            password:'',
            firstName: '',
            lastName: '',
            role: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            avatar: '',
            role: arrRole && arrRole.length > 0 ? arrRole[0].keyMap : '',
            position: arrPosition && arrPosition.length > 0 ? arrPosition[0].keyMap: '',
            gender: arrGender&&arrGender.length>0 ? arrGender[0].keyMap:''
            

            })
            }
       
    
    }
    handleOnchangeImage = async(event) =>
    
    {
        let data = event.target.files;
        let file = data[0];
        if (file) {
            let base64 = await CommonUtils.getBase64(file);
            let objectUrl = URL.createObjectURL(file)
            this.setState(
                {
                    previewImg: objectUrl,
                    avatar:base64,
                }
            )
        
        }
    
        
        
        
    }
    handelOnclickPreviewImg = () => {
        if (!this.state.previewImg) return;
        this.setState({
            isOpen:true
        })
    }
    onchangeInput = (event,id) => {
        let copyState = { ...this.state }
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        },  )
        

    }
 handleSaveUser = () => {
        let isValidate = this.validateInputUser();
        if (isValidate === false) return;
        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            role: this.state.role,
            position: this.state.position,
            gender: this.state.gender,
            avatar:this.state.avatar

        })
   
        
        
        
    }
    validateInputUser = () =>
    {
        let isValidate = true;
        let arr = ['email', 'password','firstName', 'lastName', 'phoneNumber', 'address']
        for (let i = 0; arr.length>i; i++)
        {
            if (!this.state[arr[i]]) {
                alert('vui long nap truong  '+arr[i])
                isValidate = false;
                break;
            }
        }
        return isValidate;
    }
    


    render() {
        console.log( 'check state', this.state)
   
        
        
        let genders = this.state.genderArr;
        let language = this.props.language;
        let positions = this.state.positionArr;
        let roles = this.state.rolesArrr;
        let { email, password, firstName, lastName, phoneNumber, address,role, position, gender, avatar } = this.state;
        
      
        

        return (
            <div className="user-redux-container" >
                <div className='title'>
                    Lear Redux
                </div>
                <div className='user-redux-body'>
                    <div className='container'>
                        <div className='row'>
                            <div className='ad-new-users col-12 my-3'>
                                Thêm mới người dùng
                            </div>
                            <div className=' col-3'>
                                 <label for="formFileSm" class="form-label">Email :</label>
                                <input class="form-control form-control-sm" id="formFileSm" type="email"
                                    value={email}
                                    onChange={(event)=>{this.onchangeInput(event,'email')}}
                                
                                ></input>

                            </div>
                             <div className=' col-3'>
                                 <label for="formFileSm" class="form-label">Mật khẩu :</label>
                                <input class="form-control form-control-sm" id="formFileSm" type="password"
                                value={password}
                                    onChange={(event)=>{this.onchangeInput(event,'password')}}></input>

                            </div>
                             <div className=' col-3'>
                                 <label for="formFileSm" class="form-label">Tên :</label>
                                <input class="form-control form-control-sm" id="formFileSm" type="text"
                                value={firstName}
                                    onChange={(event)=>{this.onchangeInput(event,'firstName')}}></input>

                            </div>
                             <div className=' col-3'>
                                 <label for="formFileSm" class="form-label">Họ :</label>
                                <input class="form-control form-control-sm" id="formFileSm" type="text"
                                value={lastName}
                                    onChange={(event)=>{this.onchangeInput(event,'lastName')}}></input>
                            

                            </div>
                             <div className=' col-3'>
                                 <label for="formFileSm" class="form-label">SĐT:</label>
                                <input class="form-control form-control-sm" id="formFileSm" type="text"
                                value={phoneNumber}
                                    onChange={(event)=>{this.onchangeInput(event,'phoneNumber')}}></input>

                            </div>
                             <div className=' col-9'>
                                 <label for="formFileSm" class="form-label">Địa chỉ :</label>
                                <input class="form-control form-control-sm" id="formFileSm" type="email"
                                value={address}
                                    onChange={(event)=>{this.onchangeInput(event,'address')}}></input>

                            </div>
                            <div className="col-3">
                                 <label class="form-label">Giới tính:</label>
                                <select class="form-select"
                                    value={gender}
                                    
                                    onChange={(event)=>{this.onchangeInput(event,'gender')}}aria-label="Default select example">
                                    {genders && genders.length > 0 && genders.map((item, index) =>
                                    {
                                        return (
                                            <option key={index} value={item.keyMap}>{language===LANGUAGE.VI ? item.valueVi:item.valueEn}</option>
                                            
                                        )
                                        }
                                    )
                                        
                                }
                                    
                                
                                
                                
                                </select>
                            </div>
                             <div className="col-3">
                                 <label class="form-label">chức danh:</label>
                                <select class="form-select"
                                    value={position}
                                    onChange={(event)=>{this.onchangeInput(event,'position')}}aria-label="Default select example">
                                    {
                                        positions&& positions.length > 0 && positions.map((item, index) => {
                                            return (
                                                <option value={item.keyMap} key={index}>{language===LANGUAGE.VI ? item.valueVi : item.valueEn} </option>
                                            )
                                            
                                        })
                                    }
                               
                              
                                </select>
                            </div>
                             <div className="col-3">
                                 <label class="form-label">Vai trò :</label>
                                <select class="form-select"
                                value={role}
                               
                                    onChange={(event)=>{this.onchangeInput(event,'role')}}    aria-label="Default select example">
                                    {roles && roles.length > 0 && roles.map((item, index) => {
                                        return (
                                            <option value={item.keyMap} key={index}>{ language===LANGUAGE.VI? item.valueVi :item.valueEn}</option>
                                        )
                                    
                                })}
                                </select>
                            </div>
                              <div className=' col-3'>
                                <label class="form-label">Ảnh đại diện:</label>
                                <div className='img-avart'>
                                    <input
                                 
                                       type='file' id="previewImg" hidden  
                                        onChange={(event)=>this.handleOnchangeImage(event)}
                                    />
                                    <label className='lable-upload ' htmlFor="previewImg">Tải ảnh <i className="fas fa-upload"></i> </label>
                                    <div className={this.state.previewImg ? ' preview-Image' : ''}
                                        onClick={ ()=>this.handelOnclickPreviewImg()}
                                        style={{ backgroundImage: `url(${this.state.previewImg})` }}>
                                    </div>
                                    
                                </div>
                                

                            </div>
                            <div className='col-3 my-3'>
                                <button onClick={()=>this.handleSaveUser()} type="submit" class="btn btn-primary">Thêm </button>
                            </div>
                            




                        </div>
                        <div className='table-user-manager my-3'>
                              <TableUsers/>
                        </div>
                      
                 

                        {this.state.isOpen === true &&
                        <Lightbox
                        mainSrc={this.state.previewImg}
                        
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        
                    />}

                    </div>
                </div>
                
                
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {
        language: state.app.language,
        genderRedux: state.admin.genders,
        positionRedux: state.admin.positions,
        rolesRedux: state.admin.roles,
           users: state.admin.users,
       
        
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRolesStart: () => dispatch(actions.fetchRolesStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchUsersRedux :()=> dispatch(actions.fetchAllUser()),

       
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
