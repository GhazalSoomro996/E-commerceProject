import React from "react"
import {
    Card, CardTitle, CardText, CardActions, Button } from "react-mdl";

    export default class approve extends React.Component{
        render(){
            return(
               
                <div>
                <table style= {{ marginTop : "10px" , marginLeft : "120px"}}>
                <p><h4>Post Requests </h4>
                <h5>Approve or Discard post requests</h5></p>

                <tr>
              <td>
                  
            <Card shadow={0} style={{width: '320px', height: '320px', marginLeft: "auto"}}>
           <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                    <Button colored>Approve</Button>  <Button colored>Discard</Button> 
                </CardActions>
             
                    </Card>
                                     </td>
                                     <td>
                                     <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                            <CardActions border>
                            <Button colored>Approve</Button>  <Button colored>Discard</Button>   
                </CardActions>
                        
                        </Card>
                     </td>
                      <td>
                  <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                    <CardActions border>
                    <Button colored>Approve</Button> <Button colored>Discard</Button>   
        </CardActions>
                </Card>
                </td>
                <td>
                  <Card shadow={0} style={{width: '320px', height: '320px', margin: 'auto'}}>
                    <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                    <CardText>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Aenan convallis.
                    </CardText>
                            <CardActions border>
                            <Button colored>Approve</Button>  <Button colored>Discard</Button> 
                </CardActions>
                        </Card>
                     </td>
                     </tr>
        </table>
        </div>
            
        ) 
    }
}