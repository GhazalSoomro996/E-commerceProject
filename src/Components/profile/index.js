import React from "react";
import { label } from "react";

export default class profile extends React.Component{
    render(){
        return(
            <div>
            <div class = "firstcontainer"> 
            <table style = {{ marginTop : "100px", marginLeft :"550px" ,
             backgroundColor : " #f2f2f2"  , padding: "20px"}} > 
                    <h5>Edit Account</h5>
          <tr>
         <label>Username* </label>
        <input type = "text" placeholder = "Firstname" style = {{ width : "250px" , height : "20px" ,
         marginBottom : "10px" , marginLeft : "10px"  }}/>
           </tr>
           
            

            <tr>
               <label>Birthday * </label>
               <input type = "date"   style = {{ width : "250px" , height : "20px" , marginBottom : "10px" ,
              marginLeft : "20px" }}  />
           </tr>
            <tr>
                <label>Gender  *</label>
                  <select  style = {{ width : "200px" , height : "20px" , marginBottom : "10px"  , marginLeft : "30px"  }}>
                      <option> Select </option>
                      <option> Male </option>
                      <option> Female </option>
                       </select>
                  </tr>
                  <tr>
                  <label>Password* </label>
               <input type = "password" placeholder = "Password"  style = {{ width : "250px" , height : "20px"
                , marginBottom : "10px" ,marginLeft : "15px" }}  />
                      </tr>

                        <tr>
                  <label>Current Email* </label>
               <input type = "Email" placeholder = "Email"  style = {{ width : "240px" , height : "20px", marginBottom : "10px" }}   />
                      </tr>

                        <tr>
                  <label>New Email* </label>
               <input type = "Email" placeholder = "Email"  style = {{ width : "240px" , height : "20px", marginBottom : "10px" ,
            marginLeft : "20px" }}   />
                      </tr>

                       <input type="submit" value="Submit"c style = {{ width: "100% ", 
 backgroundColor: "#4CAF50",  color: "white" , padding: "14px 20px" , margin: "8px 0 " ,  border: "none" ,borderRadius: " 4px" , 
    cursor:  "pointer" , marginBottom : "10px" }}/>

                      </table>
              </div>

                     </div>    
         ) 
    }
}