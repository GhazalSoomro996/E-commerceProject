import React from "react"

export default class Editproduct extends React.Component{
   render(){
       return(
          <div>
               <div class = "firstcontainer"> 
           <table style = {{ marginTop : "100px", marginLeft :"550px" ,
            backgroundColor : " #f2f2f2"  , padding: "20px"}} > 
                   <h5>Edit Product</h5>
         <tr>
        <label>Name* </label>
       <input type = "text"  style = {{ width : "250px" , height : "20px" , marginBottom : "10px" , marginLeft : "10px" }}/>
          </tr>

           <tr>
              <label>Size* </label>
              <input type = "number"   style = {{ width : "250px" , height : "20px" , marginBottom : "10px" ,marginLeft : "20px" }}  />
          </tr>
                
            <tr>
                 <label>Price* </label>
              <input type = "number"   style = {{ width : "250px" , height : "20px", marginBottom : "10px" , marginLeft : "15px" }}   />
                     </tr>

                       <tr>
                 <label>Quantity* </label>
              <input type = "number"   style = {{ width : "245px" , height : "20px", marginBottom : "10px" }}   />
                     </tr>

                      <tr>
                 <label>Description* </label>
              <input type = "text"  style = {{ width : "225px" , height : "40px" , marginBottom : "10px"}}  />
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

