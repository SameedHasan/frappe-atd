import {
  DownOutlined,
  PoweroffOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { Avatar, Dropdown, Menu, message } from "antd";
import styles from "../../styles/mainLayout.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../utils/context/UserProvider";

// eslint-disable-next-line react/prop-types
const SidebarBottom = ({ collapsed }) => {
  const { logout, currentUser } = useContext(UserContext);

  const navigate = useNavigate();
  const handleLogout = async () => {
    message.info("Logged Out!");
    await logout();

    navigate("/login");
  };

  const list = [
    {
      key: "Profile",
      icon: <UserOutlined />,
      label: (
        <Link to={"/profile"} rel="noopener noreferrer">
          Profile
        </Link>
      ),
    },
    {
      key: "Logout",
      icon: <PoweroffOutlined />,
      label: <div onClick={handleLogout}>Logout</div>,
    },
  ];

  const menu = (
    <Menu mode="inline" inlineCollapsed={collapsed} items={list} />
    // <Menu>
    //   <Menu.Item key="profile">
    //     <a href="/profile">Profile</a>
    //   </Menu.Item>
    //   <Menu.Item key="logout">
    //     <a href="/logout">Logout</a>
    //   </Menu.Item>
    // </Menu>
  );

  return (
    <div className={styles.profileContainer}>
      <Dropdown overlay={menu} trigger={["click"]} arrow>
        <div className={styles.profileSection}>
          <Avatar
            style={{
              backgroundColor: "#87d068",
              verticalAlign: "middle",
            }}
            size={40}
          >
            {currentUser.image ? (
              <img src={currentUser.image} alt={currentUser.name} />
            ) : (
              currentUser.name.charAt(0).toUpperCase()
            )}
          </Avatar>
          {!collapsed && (
            <p>
              {currentUser ? currentUser.name : ""} <DownOutlined />
            </p>
          )}
        </div>
      </Dropdown>
    </div>
  );
};

export default SidebarBottom;
