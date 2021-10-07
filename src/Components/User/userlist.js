import React from 'react' 
import axios from "axios"
import { API_BASE_URL } from '../../config/api'
import { Button, Modal } from "react-bootstrap";

export default class Userlist extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            users : [],
            trashId : '',
            show: '',
            view: '',
            name: '',
            id: '',
            username: '',
            email: '',
            phone: '',
            website: ''
        }
    }

    componentDidMount(){
       this.loadUsers()
    }

    loadUsers = () =>{
        axios.get(API_BASE_URL+`users`).then(res=>{
            // console.log("dataaaaa------",res.data)
             this.setState({users:res.data})
        })
    }

    navigateEdituser = (userId) =>{
        this.props.history.push({ 
            pathname: '/edit_user',
            state: { id : userId }
         });
    }

    handleView = (userId) =>{
        axios.get(API_BASE_URL+`users/`+ userId).then(res=>{
            this.setState({
                 id: res.data.id,
                 name: res.data.name,
                 username: res.data.username,
                 phone: res.data.phone,
                 email: res.data.email,
                 website: res.data.website
             })
        })

        this.setState({ view: !this.state.view })  
    }


    handleDelete(id) {
        this.setState({ trashId: id })
        this.setState({ show: !this.state.show }) 
    }
    cancelTrash = () => {
        this.setState({ show: !this.state.show })
    }

    trashRecord = () => {
        this.setState({ show: !this.state.show })

        axios({
        method: 'delete',
        url: API_BASE_URL + `users/` + this.state.trashId,
        }).then(res => {
            this.loadUsers()
        })
        .catch((error) => {
        // console.log(error)
        });         
    }

  

render(){
    return(
        <>
        <section className="marginTop">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="table-responsive">
                        <table className="table table-striped table-hover shadow">
                            <thead className="table-dark">
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Name</th>
                                <th scope="col">User Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {this.state.users.map((user,index)=>(
                                <tr>
                                    <th scope="row">{index + 1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.username}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        <div className="action-ui">
                                            <button type="button" onClick={()=>this.handleView(user.id)}><img src="assets/img/icons/show.png" alt=""/></button>
                                            <button type="button" onClick={()=>this.navigateEdituser(user.id)}><img src="assets/img/icons/edit.png" alt=""/></button>
                                            <button type="button" onClick={()=>this.handleDelete(user.id)}><img src="assets/img/icons/delete.png" alt=""/></button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                        <Modal show={this.state.view} onHide={() => this.handleView()}>
                            <Modal.Body>
                            <div className="row">
                                <div className="col-sm-12 m-auto">
                                    <div className="view-records">
                                        <h4 className="common-head">View User Information</h4>
                                        <ul>
                                            <li>user id : <span>{this.state.id}</span></li>
                                            <li>Name : <span>{this.state.name}</span></li>
                                            <li>Username : <span>{this.state.username}</span></li>
                                            <li>Email id : <span>{this.state.email}</span></li>
                                            <li>Phone : <span>{this.state.phone}</span></li>
                                            <li>Website : <span>{this.state.website}</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </Modal.Body>
                        </Modal>
                        <Modal show={this.state.show} onHide={() => this.handleDelete()}>
                            <Modal.Body>
                            <div className="row">
                                <div className="col-md-12">
                                    <h4 className="common-head">Are you sure you want to delete user detail ?</h4>
                                </div>
                            </div>
                            </Modal.Body>
                            <Modal.Footer className="text-center">
                                <Button type="button" onClick={() => this.cancelTrash()}> No</Button>
                                <Button type="submit" onClick={() => this.trashRecord()}> Yes</Button>
                            </Modal.Footer>
                        </Modal>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </>
    )
}
}