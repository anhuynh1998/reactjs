import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './HomeHeader.scss';
import { LANGUAGE } from '../../utils/constant';
import { changeLanguageApp } from '../../store/actions/appActions';


class HomeHeader extends Component {
    
    changeLanguage = (language) =>
    {
        this.props.changeLanguageAppRedux(language);
        
    }

    render() {
        let language = this.props.language;
        return (
            <React.Fragment>
          
                    <div className='home-header-container'> 
                    
                  <div className='home-header-content'>
           <div className='left-content'>
            <i class="fas fa-bars"></i>
            <div className='header-logo'>


            </div>

              

           </div>
           <div className='center-content'>
                <div className=' child-content'>
                    <div>
                        <b ><FormattedMessage id="homeHeader.specialty"/></b>
                    </div>
                    <div>
                        <span><FormattedMessage id="homeHeader.findDoctor"/></span>

                    </div>
                </div>
                <div className=' child-content'>
                    <div>
                        <b>Cơ sở y tế</b>
                    </div>
                          <div>
                              <span>chọn bệnh viện , phòng khám</span>
                        
                    </div>
                </div>
                <div className=' child-content'>
                    <div>
                        <b>Bác sĩ </b>
                    </div>
                          <div>
                              <span> Chọn bác sĩ giỏi</span>
                        
                    </div>
                      </div>
                      <div className=' child-content'>
                    <div>
                        <b>Gói Khám</b>
                    </div>
                          <div>
                              <span> Khám sức khỏe tổng quát</span>
                        
                    </div>
                </div>

           </div>
                  <div className='right-content'>
                      <div className='suport'>
                                <i className="fas fa-question"></i>
                                <span className='support'> Hỗ trợ</span>
                      </div>
                      <div className='flag'>
                                <div className={language===LANGUAGE.VI ? 'lg-VN active':'lg-VN'}><span onClick={()=>this.changeLanguage(LANGUAGE.VI)}>VN</span></div>
                                <div className={ language===LANGUAGE.EN?'lg-EN active':'lg-VN'}><span onClick={()=>this.changeLanguage(LANGUAGE.EN)}> EN</span></div>
                      </div>

           </div>




                  </div>
                </div>
                { this.props.ishowBanner===true && 
                <div className='home-header-banner'>
                    <div className='content-up'>
                        
                        
                        <div className='title-1'>
                   <h1>NỀN TẢNG Y TẾ</h1>

                    </div>
                    <div className='title-2'>
                      <h1><b>CHĂM SÓC SỨC KHỎE TOÀN DIỆN </b></h1>  

                    </div>
                    <div className='search'>
                        <i className="fas fa-search" ></i>
                        <input type='text' placeholder='Tìm kiếm bệnh viện '/>

                    </div>
                    
                    
                    
                    </div>
                    <div className='content-down'>
                        <div className=' option'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-hospital"></i>

                                </div>
                                <div className='text-child'>
                                    Khám <br/> chuyên khoa
                                </div>
                            </div>

                        </div>
                        <div className=' option'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                   <i className="fas fa-mobile-alt"></i>

                                </div>
                                <div className='text-child'>
                                    Khám <br/> từ xa
                                </div>
                            </div>

                        </div>
                        <div className=' option'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                   <i className="fas fa-file-medical-alt"></i>

                                </div>
                                <div className='text-child'>
                                    Khám <br/> tổng quát
                                </div>
                            </div>

                        </div>
                        <div className=' option'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                   <i className="far fa-hourglass"></i>
                                </div>
                                <div className='text-child'>
                                    Xét nghiệm<br/> y học 
                                </div>
                            </div>

                        </div>
                        <div className=' option'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                 
                               <i className="fas fa-heartbeat"></i>
                                </div>
                                <div className='text-child'>
                                    Sức khỏe <br/> tinh thần
                                </div>
                            </div>

                        </div>
                        <div className=' option'>
                            <div className='option-child'>
                                <div className='icon-child'>
                               <i className ="fas fa-user-md"></i>

                                </div>
                                <div className='text-child'>
                                    Khám <br/> nha khoa
                                </div>
                            </div>

                        </div>
                        <div className=' option'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                  <i className="fas fa-capsules"></i>

                                </div>
                                <div className='text-child'>
                                    Gói<br/> Phẫu thuật 
                                </div>
                            </div>

                        </div>
                        <div className=' option'>
                            <div className='option-child'>
                                <div className='icon-child'>
                                    <i className="fas fa-briefcase-medical"></i>

                                </div>
                                <div className='text-child'>
                                    Sản phẩm <br/> Y tế
                                </div>
                            </div>

                        </div>
                        
                    </div>
                   
                </div>}
           
                
                
                
          </React.Fragment>
      )
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language:state.app.language,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        changeLanguageAppRedux :(language)=>dispatch(changeLanguageApp(language))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeHeader);
