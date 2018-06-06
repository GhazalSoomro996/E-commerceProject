import React from "react"
import {
    Link
} from "react-router-dom"
export default class Landing extends React.Component{
    render(){
        return(
            <div style={{width: '1500px',height:'600px', background:'#D5C3AA' }}>
       
       <Link to="/empaddproduct"><a>add products</a></Link><br/><br/>
                <Link to='/logout'><a>Logout</a></Link><br></br>
             
      </div>
        )
    }
}