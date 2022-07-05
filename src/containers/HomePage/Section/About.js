import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';

class About extends Component {


    render() {
        let settings = this.props.settings;
   
        
        return (
            <div className=' section-about'>
                <div className='section-about-header'>
                    <h3>Truyền thông nói gì về HXA</h3>
                </div>
                <div className=' section-content'>
                    <div className='content-left'>
                        <iframe width="560" height="315" src="https://www.youtube.com/embed/S7ElVoYZN0g"
                            title="YouTube video player" frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen></iframe>

                    </div>
                    <div className='content-right'>
                        
                     
                        React makes it painless to create interactive UIs.
                        Design simple views for each state in your application, a
                        nd React will efficiently update and render just the right
                        components when your data changes.
                        A Simple Component
                        React components implement a render() method that takes input data and returns what to display. 
                        This example uses an XML-like syntax called JSX. Input data that is passed into the component can be accessed by render() via this.props.

                        JSX is optional and not required to use React. Try the Babel REPL t
                        see the raw JavaScript code produced by the JSX compilation step.


                        

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

export default connect(mapStateToProps, mapDispatchToProps)(About);
