import React from "react";
import { NavLink } from "react-router-dom";
import { Route, Routes ,useNavigate } from "react-router-dom";
import { Button, Layout, Menu } from "antd";
import Todo from "../Todo";
import Navbar from "../../components/Navbar/Navbar";
import "./Home.css";

const Home = () => {
  const { Header, Content, Sider } = Layout;
  const navigate=useNavigate();
  return (
    // <div>
    //       <Layout>
    //   <Header className="header">
    //     <div className="logo" />
    //     <Menu  mode="horizontal" defaultSelectedKeys={['2']}  />
    //   </Header>
    //   <Layout>
    //     <Sider
    //       width={200}
    //     >
    //       <Menu
    //         mode="inline"
    //         defaultSelectedKeys={['1']}
    //         defaultOpenKeys={['sub1']}
    //         style={{
    //           height: '100%',
    //           borderRight: 0,
    //         }}
    //       />
    //     </Sider>
    //     <Layout
    //       style={{
    //         padding: '0 24px 24px',
    //       }}
    //     >

    //       <Content
    //         style={{
    //           padding: 24,
    //           margin: 0,
    //           minHeight: 280,
    //         }}
    //       >
    //         Content
    //       </Content>
    //     </Layout>
    //   </Layout>
    // </Layout>
    // </div>
    // <Layout>
    //   <Sider width={200}>
    //     <Menu
    //       mode="inline"
    //       defaultSelectedKeys={["1"]}
    //       defaultOpenKeys={["sub1"]}
    //       style={{
    //         height: "100%",
    //         borderRight: 0,
    //       }}
    //     />
    //     <Button onClick={()=>navigate('/todo')}>Todo</Button>
    //     <Button onClick={()=>localStorage.clear()}>Todo</Button>
    //   </Sider>

    //   <Content
    //     style={{
    //       padding: 24,
    //       margin: 0,
    //       minHeight: 280,
    //     }}
    //   >
        
    //   </Content>
    // </Layout>
    <>
    <Navbar/>
    </>
  );
};

export default Home;
