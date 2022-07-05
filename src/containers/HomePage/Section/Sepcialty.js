import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import './Specialty.scss';
import Slider from "react-slick";


import imgslide from "../../../assets/specialty/co-xuong-khop.jpeg";



class Specialty extends Component {


    render() {
        let settings = this.props.settings;
   
        
        return (
            <div className='  section-share section-specialty '>
                <div className='section-container'>
                    <div className='section-header '>
                        <span className='section-title-header'>Chuyên khoa phổ biến</span>
                        <div class="section-more">
                            <button>Xem thêm</button>
                        </div>
                         
                    </div>
                    <div className='section-body'>
                         <Slider {...settings}>
                            <div className='slide-child' >
                                <div className='  bg-custom  section-specailty-slide'></div>
                                
                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                              
                            </div>
                            <div className='slide-child'>
                                  <div className='  bg-custom section-specailty-slide'></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                               
                            </div>
                            <div className='slide-child'>
                               
                                  <div className='  bg-custom section-specailty-slide'></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                                 
                            </div>
                            <div className='slide-child'>
                                  <div className='  bg-custom section-specailty-slide'></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                            </div>
                            <div className='slide-child'>
                                  <div className='  bg-custom section-specailty-slide'></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                            </div>
                            <div className='slide-child'>
                                  <div className='  bg-custom section-specailty-slide'></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                            </div>
                            </Slider>
                    </div>
                    
                   
                </div>
                

                
           </div>
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
        
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);
