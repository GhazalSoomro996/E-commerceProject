import React from "react"
import {
    Card, CardTitle, CardText, CardActions, Button } from "react-mdl";
import { Link } from "react-router-dom"

export default class product extends React.Component{
    render(){
        return(
            <div>
            <table style= {{ marginTop : "10px" , marginLeft : "120px"}}>
            <tr>
          <td>
        <Card shadow={0} style={{width: '320px', height: '320px', marginLeft: "auto"}}>
       <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
        <Link to="/Edit" role="button">Edit</Link>  
                </Card>
                                 </td>
                                 <td>
                                 <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <Link to="/Edit" role="button">Edit</Link>  
                    
                    </Card>
                 </td>
                  <td>
              <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <Link to="/Edit" role="button">Edit</Link>  
            </Card>
                     </td>
                                         <td>
              <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <Link to="/Edit" role="button">Edit</Link>  
                    </Card>
                 </td>
                 </tr>
                 <tr>
                     <td>
                     <Card shadow={0} style={{width: '320px', height: '320px', marginTop: '20px'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <Link to="/Edit" role="button">Edit</Link>  
                    </Card>
                         </td>
                         <td>
                         <Card shadow={0} style={{width: '320px', height: '320px', marginTop: '20px'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <Link to="/Edit" role="button">Edit</Link>  
                    </Card>
                             </td>
                             <td>
                             <Card shadow={0} style={{width: '320px', height: '320px', marginTop: '20px'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <Link to="/Edit" role="button">Edit</Link>  
                    </Card>
                                 </td>
                                 <td>
                                 <Card shadow={0} style={{width: '320px', height: '320px', marginTop: '20px'}}>
                <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                <Link to="/Edit" role="button">Edit</Link>  
                    </Card>
                 </td>
                     </tr>
            </table>
              </div>
        )
    }
}
