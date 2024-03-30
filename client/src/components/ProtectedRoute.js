import React, { useEffect, useState } from "react";
import { getUserInfo } from "../apicalls/users";
import { useDispatch, useSelector } from "react-redux";
import { SetUser } from "../redux/usersSlice.js";
import { useNavigate } from "react-router-dom";
import { HideLoading, ShowLoading } from "../redux/loaderSlice";
import './protectedroute.css';
import { message, Input, Avatar, Row } from "antd"; // Import Ant Design components
import { BiBookmarks } from "react-icons/bi";
import { RiNotification2Line, RiSearchLine } from "react-icons/ri";
import Card from "./Card.jsx";
import { RiMoneyDollarCircleLine, RiExchangeDollarLine, RiThumbUpLine } from 'react-icons/ri';
import ChartComponent from "./ChartComponent.jsx";
import LeftCard from "./LeftCard.jsx";
import RightCard from "./RightCard.jsx";
import { getAuth, signOut } from "firebase/auth";


function Protectedroute({ children }) {
  const auth = getAuth();
  const helpp = () =>{
    
    signOut(auth).then(() => {
      alert("logged out successfully");
      window.location.href = "/login";
      // Sign-out successful.
      
    }).catch((error) => {
      console.log("some problem loggin out.")
      // An error happened.
    });
  }
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.users);
  const [menu, setMenu] = useState([]);
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);

  const userMenu = [
    {
      title: "Dashboard",
      icon: <i className="ri-dashboard-line"></i>,
      onClick: () => navigate("/"),
    },
    {
      title: "Transactions",
      icon: <BiBookmarks />,
      onClick: () => navigate("/user/transactions"),
    },
    {
      title: "Schedules",
      icon: <i className="ri-calendar-line"></i>,
      onClick: () => navigate("/user/schedules"),
    },
    {
      title: "Users",
      icon: <i className="ri-user-line"></i>,
      onClick: () => navigate("/user/users"),
    },
    {
      title: "Settings",
      icon: <i className="ri-settings-3-line"></i>,
      onClick: () => navigate("/user/settings"),
    },
  ];

  const getUserData = async () => {
    try {
      dispatch(ShowLoading());
      const response = await getUserInfo();
      dispatch(HideLoading());
      if (response.success) {
        dispatch(SetUser(response.data));
        setMenu(userMenu);
      } else {
        message.error(response.message);
      }
    } catch (error) {
      navigate("/login");
      dispatch(HideLoading());
      message.error(error.message);
    }
  };

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getUserData();
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div className="layout">
      <Row justify="space-between" align="top" className="w-full h-full h-100">
        <div className="sidebar" style={{ height: '180vh' }}>
          <div className="menu">
            <h1 style={{ color: 'white', marginBottom: '20px' }}>Boards.</h1>
            {menu.map((item, index) => (
              <div key={index} className="menu-item" onClick={item.onClick}>
                {item.icon}
                <span style={{ marginLeft: '10px' }}>{item.title}</span>
              </div>
            ))}
          </div>
          {/* <div className="footer">
            <div style={{ marginRight: '50px' }}>Help</div>
            <div>Contact Us</div>
          </div> */}
        </div>

        <div className="right-half p-3 bg-red">
          <div className="header">
            <h1 style={{ color: 'black', marginRight: 'auto', marginLeft: '10px' }}>Dashboard</h1>
            <Input placeholder="Search.."
              suffix={<RiSearchLine style={{ color: '#1890ff', fontSize: '16px' }} />} // Changed prefix to suffix
              style={{
                width: '200px',
                height: '30px',
                borderRadius: '15px',
                marginRight: '10px',
                paddingRight: '10px', // Adjusted paddingRight to accommodate icon
              }}
            />
            <RiNotification2Line style={{ fontSize: '20px', color: '#1890ff', marginRight: '10px' }} /> {/* Adjusted margin */}
            <Avatar src={user?.photoURL} onClick={helpp} /> {/* Removed margin and adjusted placement */}
          </div>

          <div className="cards-container">
            <Card
              icon={<RiMoneyDollarCircleLine className="icon money" />}
              title="Total Revenues"
              value="$2,129,430"
              percentage="+2.5%"
            />
            <Card
              icon={<RiExchangeDollarLine className="icon exchange" />}
              title="Total Transactions"
              value="1520"
              percentage="+1.7%"
            />
            <Card
              icon={<RiThumbUpLine className="icon likes" />}
              title="Total Likes"
              value="9721"
              percentage="+1.4%"
            />
            <Card
              icon={<BiBookmarks className="icon numbers" />}
              title="Total Numbers"
              value="9721"
              percentage="+4.2%"
            />

          </div>

          <div className="Bargraph" style={{ width: '1000px', height: "50%" }}>
            <ChartComponent />
          </div>


          <div className="lastcomponent">
      <div className="left-card">
        <LeftCard />
      </div>
      <div className="right-card w-50%">
        <RightCard />
    </div>
    </div>

        </div>

      </Row>
    </div>
  );
}

export default Protectedroute;
