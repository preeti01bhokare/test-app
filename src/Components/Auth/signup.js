import React from 'react' 
import swal from 'sweetalert';
export default class Signup extends React.Component{

constructor(props){
    super(props);
    this.state = {
        inputValue: {},
        first: '',
        last: '',
        user: '',
        password: ''   
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    
}
 
successRegistraion = () => {
    swal({
    text: "Registration successful",
    icon: "success",
    }).then(()=>{
        this.props.history.push("/login")
    });
}
handleChange = (evt) => {
    let value = evt.target.value;
    // console.log(value)
    this.setState({ [evt.target.name]: value });
    let inputValue = this.state.inputValue;
    inputValue[evt.target.name] = evt.target.value;
    this.setState({ inputValue });
}

handleSubmit = event => {
    event.preventDefault();
   // console.log("submit", this.state.inputValue)
    localStorage.setItem('username',this.state.inputValue.user)
    localStorage.setItem('password',this.state.inputValue.password)
    this.successRegistraion()
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
                            <h4 className="common-head">Create Account</h4>
                        </div>
                        <div className="col-sm-6">
                            <label className="custom_labels">First Name</label>
                            <input type="text" name="first" onChange={this.handleChange} placeholder="First Name" required />
                        </div>
                        <div className="col-sm-6">
                            <label className="custom_labels">Last Name</label>
                            <input type="text" name="last" onChange={this.handleChange} placeholder="Last Name" required />
                        </div>
                        <div className="col-sm-6">
                            <label className="custom_labels">User Name</label>
                            <input type="text" name="user"  onChange={this.handleChange} placeholder="User Name" required />
                        </div>
                        <div className="col-sm-6">
                            <label className="custom_labels">Password</label>
                            <input type="password" minLength="5" name="password" onChange={this.handleChange} placeholder="Password" required />
                        </div>
                        <div className="col-sm-12 text-center">
                            <button className="submit-btn" type="submit">Sign up</button>
                        </div>
                    </div>    
                </form>
            </div>
        </div>
    </div>

</section>
</>
)}}