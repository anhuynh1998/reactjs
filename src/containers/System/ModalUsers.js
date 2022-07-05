

import { values } from 'lodash';
import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';

import {ModalHeader,Modal,ModalBody,Button, ModalFooter} from 'reactstrap';
import { emitter } from '../../utils/emitter';
class ModalUser extends Component {

   constructor(props)
   {
       super(props);
       this.state={
           email:'',
           password:'',
           lastName:'',
           firstName:'',
           address:'',


       }
       this.listenToEmitter();
   }
   listenToEmitter=(data)=>
   {
       emitter.on('EVENT_CLEAR_MODAL_USER',()=>{
           this.setState({

           email:'',
           password:'',
           lastName:'',
           firstName:'',
           address:'',


       }  )
       })
   }

   componentDidMount() {

    }

    toggle= ()=>
    {
        this.props.toggelFromParent()

    }
    handelOnchangeInput=(event,id)=>
    {
       let copyState={...this.state}
       copyState[id]=event.target.value
       this.setState({
           ...copyState
       },)

    }
    checkValidateInput=()=>{
        let isValid = true;
        let arrInput = ['email','firstName','lastName','password','address']
        for( let i=0; i<arrInput.length ;i++)
        {
            if(!this.state[arrInput[i]])
            {
                isValid =false;
               
                alert("please input your :"+ arrInput[i])
                break;
            }


        }
        return true
    }
    handelAddNewUsers=()=>
    
    {
        let isValid=this.checkValidateInput()
        if( isValid===true){
            //call api 
            this.props.createNewUser(this.state)
            
        }
        

    }
    


    render() {
        return (
            <Modal  isOpen={this.props.isOpen} className={"modal-user-container" }
    toggle={()=>{this.toggle()}}
    size="lg"
  
  >
    <ModalHeader toggle={()=>{this.toggle()}}>
      Create a new users 
    </ModalHeader>
    <ModalBody>
    <div className=' modal-user-body'>
        <div className=' input-container'>
            <label> Email:</label>
           <input type='text' name='email'
           onChange={(event)=>{this.handelOnchangeInput(event,"email")}}
               value={this.state.email}
           />

        </div>
        <div className=' input-container'>
            <label> Password:</label>
            <input type='password'onChange={(event)=>{this.handelOnchangeInput(event,"password")}} name='password'
            value={this.state.password}
           />

        </div>
        
         <div className=' input-container'>
            <label> First Name:</label>
           <input type='text' name='firstName' onChange={(event)=>{this.handelOnchangeInput(event,"firstName")}}
               value={this.state.firstName}
           />

        </div>
         <div className=' input-container'>
            <label> Last Name:</label>
           <input type='text' name='lastName'onChange={(event)=>{this.handelOnchangeInput(event,"lastName")}}
               value={this.state.lastName}
           />

        </div>
         <div className=' input-container widthinputaddress'>
            <label> Adress:</label>
           <input type='text' name='address' onChange={(event)=>{this.handelOnchangeInput(event,"address")}}
               value={this.state.address}
           />

        </div>
    </div>
    </ModalBody>
    <ModalFooter>
      <Button className='px3'
        color="primary"
        onClick={()=>{this.handelAddNewUsers()}}
      >
        Add New
      </Button>
      {' '}
      <Button className='px3 closebtn' onClick={()=>{this.toggle()}}>
        close
      </Button>
    </ModalFooter>
  </Modal>
                  

        )
    }

}

const mapStateToProps = state => {
    return {
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);


 