import React from 'react' 
import {Link} from 'react-router-dom'
import swal from 'sweetalert';

var username = '', password = ''
export default class Login extends React.Component{

constructor(props){
    super(props); 
    this.state={
        inputValue:'',
        userName: '',
        passWord: '',
        userError: false,
        passwordError: false  
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
}

successLogin = () => {
    swal({
    text: "Login successful",
    icon: "success",
    }).then(()=>{
        this.props.history.push("/userlist")
    });
}

componentDidMount(){
    username = localStorage.getItem('username')
    password = localStorage.getItem('password')
   // console.log(username,password)
}

handleChange = (evt) => {
    evt.preventDefault();
   //console.log(evt.target.name) 
   let id = evt.target.name
   if(id === "user"){
        this.setState({userName: evt.target.value})
   }else if(id === "password"){
        this.setState({passWord: evt.target.value})
   }
}
handleSubmit = event => {
    event.preventDefault();
    if((this.state.userName === username) && (this.state.passWord === password)){
        this.setState({userError : false,passwordError : false})
        this.successLogin()
    }else{
        if((this.state.userName !== username) && (this.state.passWord !== password)){
          this.setState({userError : true,passwordError : true})
        }else if(this.state.userName !== username){
          this.setState({userError : true})
        }else{
            this.setState({passwordError : true})
        }
    }
    
   // this.successRegistraion()
}

render(){
return(
<>
<section className="commonbanner" style={{backgroundImage: "url('assets/img/login.png')"}}>
    <div className="container">
        <div className="row">
            <div className="col-sm-6 m-auto">
                <form className="form-wrapper" autoComplete="off" onSubmit={this.handleSubmit} method="post">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4 className="common-head">Login</h4>
                        </div>
                        <div className="col-sm-12">
                            <label className="custom_labels">User Name</label>
                            <input type="text" name="user" value={this.state.userName} onChange={this.handleChange} placeholder="Username" required />
                            {this.state.userError ? <p className="validation-css">please enter valid username</p> : null  }
                        </div>
                        <div className="col-sm-12">
                            <label className="custom_labels">Password</label>
                            <input type="password" name="password" value={this.state.passWord}  onChange={this.handleChange} placeholder="Password" required />
                            {this.state.passwordError ? <p className="validation-css">please enter valid Password</p> : null  }
                        </div>
                        <div className="col-sm-12 text-center">
                            <button className="submit-btn" type="submit">Login</button>
                            <h6 className="common-head my-3">You do not have an account? <Link to="/signup">Sign up</Link></h6>
                        </div>
                    </div>    
                </form>
            </div>
        </div>
    </div>

</section>
</>
)}}