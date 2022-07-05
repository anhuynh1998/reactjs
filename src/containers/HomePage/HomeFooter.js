import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class HomeFooter extends Component {


    render() {
        let settings = this.props.settings;
   
        
        return (
            <div className='section-share section-HomeFooter '>
                <p>&copy; 2022 Huynh Xuan An vs reactjs </p>

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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);
