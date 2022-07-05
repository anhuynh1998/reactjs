import { reduce } from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';

import Slider from "react-slick";
import * as actions from "../../../store/actions";



class Doctor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrDoctor:[]
        }
        
    }
    
    componentDidMount() {
        this.props.loadTopDoctor()
        
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topdoctorRedux !== this.props.topdoctorRedux)
        {
            let topdoctor =this.props.topdoctorRedux
            this.setState(
                {
                    arrDoctor: topdoctor,
                  
                    
                }
            )
        }
      
        
    }

    render() {
       
       
        let settings = this.props.settings;
        let doctorData = this.state.arrDoctor;
     console.log( 'check state', doctorData)
        
        return ( <div className='  section-share  doctor-p '>
                <div className='section-container'>
                    <div className='section-header '>
                        <span className='section-title-header'>Bác sĩ nổi bật  </span>
                        <div class="section-more">
                            <button>Tìm kiếm</button>
                        </div>
                         
                    </div>
                    <div className='section-body '   >
                    <Slider {...settings}>
                        
                        {
                            doctorData && doctorData.length > 0 && doctorData.map((item, index) => {
                                let avatarImg=''
                                if (item.Image) {
                                     avatarImg = new Buffer(item.Image, 'base64').toString('binary');
                               
                                }
                                
                                   
                                return(
                                <div key={index} className='slide-child doctor-slide' >
                            <div className='bg-out'>
                                            <div className='bg-custom doctor '  style={{ backgroundImage: `url(${avatarImg})` }}  ></div>

                            </div>
                            <div className=' infor-doctor text-center'>
                                <div> {item.positionData.valueVi}, {item.firstName} {item.lastName}</div>
                                <div> co xuong khop</div>

                            </div>
                          
                        </div>
                            )

                                

                            })
            
                            
                        }
                          
                            </Slider>
                    </div>
                    
                   
                </div>
                

                
           </div>)
    }

}

const mapStateToProps = state => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        topdoctorRedux: state.admin.topdoctor
    };
};

const mapDispatchToProps = dispatch => {
    return {
        loadTopDoctor : ()=>dispatch(actions.fetchTopDoctor())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);
