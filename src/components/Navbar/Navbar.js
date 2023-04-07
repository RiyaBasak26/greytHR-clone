import { Route,Routes,useNavigate  } from 'react-router-dom';
import {  Layout, Menu,Button } from 'antd';
import './Navbar.css'

const Navbar = () => {
    const { Header, Content, Sider } = Layout;
    const navigate=useNavigate();
  return (
    <div>
          <Layout>
   
        <Sider
          width={200}
        >
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{
              height: '100%',
              borderRight: 0,
            }}
          />
           <Button onClick={()=>navigate('/todo')}>Todo</Button>
           <Button onClick={()=>navigate('/feed')}>Feed</Button>

        <Button onClick={()=>localStorage.clear()}>Log out</Button>
        </Sider>
        <Layout
          style={{
            padding: '0 24px 24px',
          }}
        >
      

        </Layout>
      </Layout>
    </div>
  )
}
export default Navbar;