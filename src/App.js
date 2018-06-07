import React from "react"
import {
    Layout, Header, Navigation, Drawer, Content , Textfield
} from "react-mdl";
import {
    Link
} from "react-router-dom"
import Main from "./Components/Main";

export default class Navbar extends React.Component{
    render(){
        return(
            <div>
                <div style={{height: '650px', position: 'relative'}}>
    <Layout fixedHeader>
        <Header style={{background: '#265876'}} title={<span><span style={{ color: '#ddd' }}></span><strong>Shopping Express</strong></span>}>
            <Navigation>
                <Textfield
                    value=""
                    onChange={() => {}}
                    label="Search3"
                    expandable
                    expandableIcon="search"
                />
            </Navigation>
        </Header>
        <Drawer title="Shopping Express">
            <Navigation>
           <Link to="/profile">Account Panel</Link>
           <Link to="/Editproduct">Edit Product</Link>
            <Link to="/Form">Form</Link>
            <Link to="/product">Product/Item</Link>
            </Navigation>
        </Drawer>
        <Content>
                <div className="page-content" />
                <Main />
            </Content>
    </Layout>
</div>
            </div>
        )
    }
}