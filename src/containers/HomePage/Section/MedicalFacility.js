import React, { Component } from 'react';
import { connect } from 'react-redux';
import './MedicalFacility.scss';
import Slider from "react-slick";



class MedicalFacility extends Component {

    render() {
        let settings=this.props.settings
        return ( <div className='  section-share section-medical-facility '>
                <div className='section-container'>
                    <div className='section-header '>
                        <span className='section-title-header'>Cơ sở y tế nổi bật </span>
                        <div class="section-more">
                            <button>Xem thêm</button>
                        </div>
                         
                    </div>
                    <div className='section-body'>
                    <Slider {...settings}>
                            <div className='slide-child' >
                                <div className='  bg-custom section-medical-facility '></div>
                                
                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                              
                            </div>
                            <div className='slide-child'>
                                  <div className='  bg-custom section-medical-facility '></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                               
                            </div>
                            <div className='slide-child'>
                               
                                  <div className='  bg-custom section-medical-facility '></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                                 
                            </div>
                            <div className='slide-child'>
                                  <div className='  bg-custom section-medical-facility '></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                            </div>
                            <div className='slide-child'>
                                  <div className='  bg-custom section-medical-facility '></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                            </div>
                            <div className='slide-child'>
                                  <div className='  bg-custom section-medical-facility '></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                            </div>
                            </Slider>
                    </div>
                    
                   
                </div>
                

                
           </div>)
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MedicalFacility);
