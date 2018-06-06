import React from 'react';
import {
    Link
} from "react-router-dom"

export default class extends React.Component{
    render(){
        return(
            <main>
                <div>
                    <h3>Login as:</h3>
                    {/* <Link to='/'>Home</Link> */}
                                <Link to='/login'>User Login</Link><br></br>
                                <Link to='/emplogin'>Shopkeeper Login</Link><br></br>
                                <Link to='/adminlogin'>Admin Login</Link>
                                

{/*                    
                 <p><Link href="/auth/facebook" className="btn btn-primary"><a><span className="fa fa-facebook"></span> Facebook</a></Link></p>
                   <a href="/auth/google" class="btn btn-danger"><span class="fa fa-google-plus"></span> Google</a> */}

                </div>
            </main>
        )
    }
}
