import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

import Slider from "react-slick";





class Handbook extends Component {


    render() {
        let settings = this.props.settings;
   
        
        return (
            <div className='  section-share section-handbook '>
                <div className='section-container'>
                    <div className='section-header '>
                        <span className='section-title-header'>Cẩm nang</span>
                        <div class="section-more">
                            <button>Tất cả bài viết</button>
                        </div>
                         
                    </div>
                    <div className='section-body'>
                         <Slider {...settings}>
                            <div className='slide-child' >
                                <div className='  bg-custom  section-handbook'></div>
                                
                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                              
                            </div>
                            <div className='slide-child'>
                                  <div className='  bg-custom section-handbook'></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                               
                            </div>
                            <div className='slide-child'>
                               
                                  <div className='  bg-custom section-handbook'></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                                 
                            </div>
                            <div className='slide-child'>
                                  <div className='  bg-custom section-handbook'></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                            </div>
                            <div className='slide-child'>
                                  <div className='  bg-custom section-handbook'></div>

                                <div className=' title-custom'>
                                    cơ xương khớp

                                </div>
                            </div>
                            <div className='slide-child'>
                                  <div className='  bg-custom section-handbook'></div>

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

export default connect(mapStateToProps, mapDispatchToProps)(Handbook);
