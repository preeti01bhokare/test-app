import React from 'react' 
import axios from "axios"
import { API_BASE_URL } from '../config/api'
export default class Home extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            users : []
        }
    }


    componentDidMount(){
        axios.get(API_BASE_URL+`users`).then(res=>{
            // console.log("dataaaaa------",res.data)
             this.setState({users:res.data})
        })
    }

    

render(){
    return(
        <>
        <section className="commonbanner"  style={{backgroundImage: "url('assets/img/home.png')"}} ></section>
        </>
    )
}
}