import Footer from "./components/Footer/Footer";
import "./App.css";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useNavigate} from "react-router-dom";
import Todo from "./pages/Todo";
import Feeds from "./pages/Feeds";
import { Button, Layout, Menu } from "antd";

function App() {
  const { Header, Content, Sider } = Layout;
  const navigate=useNavigate();
  return (
    <div className="App">
<<<<<<< HEAD
    {localStorage.getItem("isLogedIn") ?  (<Navbar/>):""}
      <Routes>

        {/* <Route path="" element={<Navbar/>}/> */}
            {/* <Route path="/Home" element={<Home/>} /> */}
            <Route path="/todo" element={<Todo />} />
            <Route path="/feed" element={<Feeds/>}/>
        <Route path="/login" element={<Login />} />
      </Routes>
        
<Footer />
        {/* {localStorage.getItem("isLogedIn") ? (
          <> */}
            {/* <Route path="" element={<Navbar/>}/>
            <Route path="/" element={<Home/>} />
            <Route path="/todo" element={<Todo />} /> */}
            {/* <Layout>
              <Sider width={200}>
                <Menu
                  mode="inline"
                  defaultSelectedKeys={["1"]}
                  defaultOpenKeys={["sub1"]}
                  style={{
                    height: "100%",
                    borderRight: 0,
                  }}
                />
                <Button onClick={() => navigate("/todo")}>Todo</Button>
                <Button onClick={() => localStorage.clear()}>Todo</Button>
              </Sider> */}

              {/* <Content
        style={{
          padding: 24,
          margin: 0,
          minHeight: 280,
        }}
      >
        
      </Content> */}
              {/* <Route path="" element={<Navbar/>}/> */}
              {/* <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/todo" element={<Todo />} />
              </Routes>
            </Layout>
          </>
        ) : (
          <Routes>
      </Routes>
        )}
    </div> */}
=======
      <H1>Hello</H1>
>>>>>>> 9fd8eb4078ac91cbf2441aaae05e3254086033ff
    </div>
  );
}

export default App;

