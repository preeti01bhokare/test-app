import React from 'react' 
import Header from '../Components/Common/header'
export default class Pagenotfound extends React.Component{

render(){
    return(
        <>
        <Header></Header> 
        <section className="commonbanner">
            <div className="container">
                <div className="row">
                    <div className="col-sm-8 m-auto text-center">
                        <h1 className="common-head">SORRY, THE PAGE YOU REQUESTED COULD NOT BE FOUND.</h1>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
}