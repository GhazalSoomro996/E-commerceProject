import React from "react"
import {
    Card, CardTitle, CardText, CardActions, Button , DataTable, TableHeader
} from "react-mdl";
export default class edit extends React.Component{
    render(){
        return(
            <div>
            <table style = {{ marginTop : "25px", marginLeft :"590px"  , padding: "20px"}} >
            <h3>Product Description</h3>
            <tr>
          <td>
        <Card shadow={0} style={{width: '340px', height: '320px', marginLeft: "auto"}}>
       <CardTitle expand style={{color: '#fff', background: 'url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC'}}>Update</CardTitle>
                <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                </CardText>
                </Card>
                
                
    <DataTable shadow={2} style={{marginTop:"0px" ,width:'340px'}}
    rows={[
        {ProductName: "Samsung DC-Inverter AC", ProductCompany: "Samsung", price: 72000},
    ]}
>
    <TableHeader name="ProductName" tooltip="The amazing product name">Product Name</TableHeader>
    <TableHeader numeric name="ProductCompany" tooltip="Company">Product Company</TableHeader>
    {/* <TableHeader numeric name="ProductPrice" cellFormatter={(price) => `\$${price.toFixed(2)}`} tooltip="Price pet unit">Product Price</TableHeader> */}
    </DataTable>
    <CardActions border>
                <Button colored>Keep</Button>  <Button colored>Discard</Button>  
                </CardActions>
        </td>
        </tr>
        </table>
        </div>
        )
    }
}
