import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";
import * as actions from "../../store/actions";
import './Login.scss';
import { FormattedMessage } from 'react-intl';
import { handleLogin} from "../../services/userSevice";
import { reduce, reject } from 'lodash';
import { userLoginSuccess } from '../../store/actions';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: 'anvip',
            password: 'an',
            errMessage:'',
            showHidePassword:false
        }
    }
    handleOnchangeUsername = (event) => {
        this.setState({
            username: event.target.value,
            
        }
        )
        

    }
    handleOnchangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
       
    }
    handleLogin = async() => {
        // console.log('username:',this.state.username,'password:',this.state.password,)
        // console.log('username:', this.state.username)

        // clear message
        this.setState(
            {
                errMessage:''
            }
        )
        
        
         try {
            let data= await handleLogin(this.state.username,this.state.password);
            console.log(data)
            if ( data && data.errCode!==0)
            {

                this.setState(
                    {    
                        errMessage: data.message
                    }
                )
            }
            if ( data && data.errcode===0)
            {

              this.props.userLoginSuccess(data.user)
            }
             
         } catch (error) {
            //  console.log(error)
            if(error.response){
                if(error.response.data)
                {
                    this.setState(
            {
                errMessage:error.response.data.message
            }
        )
                }

            }

             
            
         }
        


    }
    handleShowHidePassword=()=>
    {
       this.setState({
           showHidePassword: !this.state.showHidePassword,
       })
    }

    render() {
        return (
            <div className="login-background">
                <div className='login-container '>
                    <div className=' login-content row'>
                        <div className='col-12 login-text'>
                            Login
                        </div>
                        <div className='col-12 form-group'>
                            <label>Username:</label>
                            <input type='text' className='form-control login-input'
                                value={this.state.username}
                                onChange={(event) => this.handleOnchangeUsername(event)}

                                placeholder='Enter your username' />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Password:</label>
                            <div className='custom-password'>
                                <input type={ this.state.showHidePassword ? 'text':'password'} className='form-control '
                                    value={this.state.password}
                                    onChange={(event) => this.handleOnchangePassword(event)}
                                    placeholder='Enter your password' />
                                 <span 
                                 onClick={()=>{this.handleShowHidePassword()}}
                                 >  <i className={this.state.showHidePassword ? "fas fa-eye":"fas fa-eye-slash"}></i></span>
                               

                            </div>


                        </div>
                        <div className='' style={{color:"red" }}>
                            { this.state.errMessage}
                        </div>
                        <div className=' col-12'>
                            <button className='btn-login '
                                onClick={() => { this.handleLogin() }}>Login</button>

                        </div>
                        <div className='col-12'>
                            <span className='forgot'> Forgot your password ?</span>

                        </div>
                        <div className='col-12 or-login'>
                            <span  > or sigin with:</span>
                        </div>
                        <div className='col-12 social-sig mt-3'>

                            <i className="fab fa-twitter twitter" ></i>
                            <i className="fab fa-google-plus google"></i>
                            <i className="fab fa-facebook-f facebook " ></i>

                        </div>


                    </div>
                </div>

            </div>


        )
    }
}

const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        // adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        // userLoginFail: () => dispatch(actions.adminLoginFail()),
        userLoginSuccess:(userInfo)=>dispatch(actions.userLoginSuccess(userInfo)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
