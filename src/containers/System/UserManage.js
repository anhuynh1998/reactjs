import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import './UserManage.scss';
import{ getAllUsers , createNewUserService,deleteUserSevice,editUserSevice} from "../../services/userSevice";
import ModalUsers from './ModalUsers';
import { emitter} from '../../utils/emitter'
import ModalEditUers  from './ModalEditUers';
import { createSemanticDiagnosticsBuilderProgram } from 'typescript';

class UserManage extends Component {

    constructor(props)
    {
        super(props);
        this.state={
            arrUsers:[],
            isOpenModalUser:false,
            isOpenModalEditUser:false,
            editUser:{},

        }
    }
   async componentDidMount () {
        await this.getAllUsersFromReact();
        


    }
    getAllUsersFromReact= async()=>{
        let response = await getAllUsers('ALL');
        if (response && response.errCode==0)
        {
            this.setState({
                arrUsers:response.users

            })
        }
        console.log('get usser form data node js ',response)

    }
    handelAddnewUser=()=>
    {
        this.setState({
            isOpenModalUser:true,
        })
    
    }
     toggleModalUser=()=>
     {
          this.setState({
            isOpenModalUser:!this.state.isOpenModalUser,
        })
    
     }
     toggleModalEditUser=(user)=>
    {
        this.setState({
            isOpenModalEditUser:!this.state.isOpenModalEditUser,
            
            

        })
       
    }
     createNewUser = async(data)=>
     {
        try {
          let response =  await createNewUserService(data)
          
        
            if (response && response.errCode!==0){
               
                alert(response.errMessage)
            }
            else{
                await  this.getAllUsersFromReact();
                this.setState({isOpenModalUser:false}


                )
                emitter.emit('EVENT_CLEAR_MODAL_USER')
            }


            
        } catch (e) {
            console.log(e)
            
        } 
          
         
     }
     handelEditUser=(user)=>
     {
         
         this.setState({
             isOpenModalEditUser:true,
             editUser:user
         })
     }
     doEditUser= async(user)=>
     {
         
        
         try
         {
             let res = await editUserSevice(user);
             if (res && res.errCode!==0){
               
                alert(res.errMessage)
            }
            else{
               
                this.setState({isOpenModalEditUser:false})


                }
                 await this.getAllUsersFromReact();
                
         }
         catch(e)
         {
             console.log(e)
         }

     }
     // delete user
     handelDeleteuser = async( user)=>
     
     {
         try {
            let res  = await deleteUserSevice(user.id)
            if( res && res.errCode ===0)
            {
                await this.getAllUsersFromReact()
            }
            else
            {
                alert(res.errCode)
            }
            await this.getAllUsersFromReact()
 

             
         } catch (e) {
             console.log(e)
             
         }
        
     }
   // life cycle
   
    render() {
        let arrUsers= this.state.arrUsers;
        return (
            <div className="users-container ">
                   <ModalUsers  
                   isOpen={this.state.isOpenModalUser}
                   toggelFromParent={this.toggleModalUser}
                   createNewUser= { this.createNewUser}
                    />
                    { this.state.isOpenModalEditUser && <ModalEditUers 
                         isOpen={this.state.isOpenModalEditUser}
                    toggelFromParent={this.toggleModalEditUser}
                    currentUsers={ this.state.editUser}
                    editUser={ this.doEditUser}
                //    createNewUser= { this.cr//eateNewUser}
                    />}
                    
                 
                <div className='title text-center'> Manage users:</div>
           
                <div className=' mx-1'>
                    <button 
                    onClick={ ()=>this.handelAddnewUser()}
                     className='btn btn-primary px-3'> <i className='fas fa-plus'></i>Add new users</button>
                </div>
                <div className='users-tatble mt-3 mx-1'>
                <table id="customers">
                <tbody>
  <tr>
    <th>Id</th>
    <th>Email</th>
    <th>FistName</th>
    <th>LastName</th>
    <th>Adress</th>
    <th  >Actions</th>
  </tr>
  
         { arrUsers && arrUsers.map((item , index)=>
     {
         return(
       
           <tr key={item.id}>
            <td >{item.id}</td>
            <td >{item.email}</td>
             <td >{item.firstName}</td>
             <td >{item.lastName}</td>
             <td > {item.adress}</td>
             <td>
                 <button className='btn-edit' onClick={()=>{this.handelEditUser(item )}}><i className='fas fa-pencil-alt'></i></button>
                 <button className='btn-delete' onClick={()=>{this.handelDeleteuser(item)}}> <i className='fas fa-trash'></i></button>
             </td>
           </tr>
            

             
         )
     })

     }
     </tbody>
     
    

  
</table>

                </div>
            </div>

        );
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

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);
