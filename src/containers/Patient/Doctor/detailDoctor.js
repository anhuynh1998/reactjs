import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import HomeHeader from '../../HomePage/HomeHeader';
import "./DoctorDetail.scss";
import { getDetailDoctor } from '../../../services/userSevice';



class DetailDoctor extends Component {
    constructor ( props ) {
        super( props );
        this.state = {
               detailsDoctor: {}

        }

    }


    async componentDidMount() {
        if ( this.props.match && this.props.match.params && this.props.match.params.id ) {
            let id = this.props.match.params.id;
            let res = await getDetailDoctor( id );

            if ( res && res.errCode === 0 ) {
                this.setState( {
                    detailsDoctor: res.data

                } )
            }


        }

    }

    render() {
        let { detailsDoctor } = this.state;
        return (
            <React.Fragment>
                <HomeHeader ishowBanner={false} />
                <div className=' container doctor-detail-content'>
                    <div className='doctor-detail-header'>
                        <div className=' doctor-detail-avatar'   >
                            <div className='content-avatar' style={{ backgroundImage: `url(${ detailsDoctor.Image })` }}></div>

                        </div>
                        <div className='doctor-detail-intro'>
                            {detailsDoctor.positionData && detailsDoctor.positionData.valueVi &&
                                <div className='name-doctor'>{detailsDoctor.positionData.valueVi} ,{detailsDoctor.lastName} {detailsDoctor.firstName}</div>
                            }
                            {detailsDoctor.markdown && detailsDoctor.markdown.description &&
                                <span>{detailsDoctor.markdown.description}</span>}

                        </div>

                    </div>
                    <div className='doctor-booking'>

                    </div>
                    <div className='doctor-detail-description'>
                        {detailsDoctor && detailsDoctor.markdown && detailsDoctor.markdown.contentHTML &&
                            <div dangerouslySetInnerHTML={{ __html: detailsDoctor.markdown.contentHTML }}></div>


                        }

                    </div>
                    <div className='doctor-comment'>

                    </div>

                </div>

            </React.Fragment>
        )
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

export default connect( mapStateToProps, mapDispatchToProps )( DetailDoctor );