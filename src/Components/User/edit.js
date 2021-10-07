import React from 'react' 
import axios from "axios"
import { API_BASE_URL } from '../../config/api'
import swal from 'sweetalert';
export default class Edit extends React.Component{

    constructor(props){
        super(props)
        this.state = {
           userId: this.props.location.state.id,
           name: '',
           email:'',
           username:'',
           phone:'',
           website: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    successRecordAdded = () => {
        swal({
        text: "Record updated successfully",
        icon: "success",
        }).then(()=>{
            this.props.history.push("/userlist")
        });
    }

    componentDidMount(){
        axios.get(API_BASE_URL+`users/`+ this.state.userId).then(res=>{
            // console.log("dataaaaa------",res.data)
            this.setState({
                name: res.data.name,
                username: res.data.username,
                email: res.data.email,
                phone: res.data.phone,
                website: res.data.website,
            })
        })
    }

    handleChange = (evt) => {
        evt.preventDefault();
     // console.log(evt.target.name,evt.target.value) 
        let id = evt.target.name
        if(id === "name"){
        this.setState({name: evt.target.value})
        }else if(id === "email"){
        this.setState({email: evt.target.value})
        }else if(id === "phone"){
        this.setState({phone: evt.target.value})
        }else if(id === "username"){
        this.setState({username: evt.target.value})
        }else if(id === "website"){
        this.setState({website: evt.target.value})
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        axios({
            method: 'put',
            url: API_BASE_URL + `users/` + this.state.userId,
            data:{
                id: this.state.userId,
                name: this.state.name,
                username: this.state.username,
                email: this.state.email,
                phone: this.state.phone,
                website: this.state.website,
            }
            }).then(res => {
              // console.log("data == ", res.data)
              if(res.data){
                this.successRecordAdded()
              }
            })
            .catch((error) => {
            // console.log(error)
            });

    }

render(){
return(
<>
<section className="commonbanner" style={{backgroundImage: "url('assets/img/login.png')"}}>
    <div className="container">
        <div className="row">
            <div className="col-sm-8 m-auto">
                <form className="form-wrapper" autoComplete="off" onSubmit={this.handleSubmit} method="post">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 className="common-head">Edit User</h4>
                        </div>
                        <div className="col-sm-6">
                            <label className="custom_labels">Name</label>
                            <input type="text" name="name" value={this.state.name} onChange={this.handleChange} placeholder="Name" required />
                            {/* {this.state.userError ? <p className="validation-css">please enter valid username</p> : null  } */}
                        </div>
                        <div className="col-sm-6">
                            <label className="custom_labels">User Name</label>
                            <input type="text" name="username" value={this.state.username}  onChange={this.handleChange} placeholder="User Name" required />
                            {/* {this.state.passwordError ? <p className="validation-css">please enter valid Password</p> : null  } */}
                        </div>
                        <div className="col-sm-6">
                            <label className="custom_labels">Email</label>
                            <input type="text" name="email" value={this.state.email}  onChange={this.handleChange} placeholder="Email" required />
                            {/* {this.state.passwordError ? <p className="validation-css">please enter valid Password</p> : null  } */}
                        </div>
                        <div className="col-sm-6">
                            <label className="custom_labels">Phone</label>
                            <input type="text" name="phone" value={this.state.phone}  onChange={this.handleChange} placeholder="Phone" required />
                            {/* {this.state.passwordError ? <p className="validation-css">please enter valid Password</p> : null  } */}
                        </div>
                        <div className="col-sm-6">
                            <label className="custom_labels">Website</label>
                            <input type="text" name="website" value={this.state.website}  onChange={this.handleChange} placeholder="Website" required />
                            {/* {this.state.passwordError ? <p className="validation-css">please enter valid Password</p> : null  } */}
                        </div>
                        <div className="col-sm-12 text-center">
                            <button className="submit-btn" type="submit">Edit User</button>
                        </div>
                    </div>    
                </form>
            </div>
        </div>
    </div>
</section>
</>
    )
}
}