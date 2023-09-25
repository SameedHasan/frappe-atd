import { PoweroffOutlined } from "@ant-design/icons";
import { Menu, message } from "antd";
import styles from "../../styles/mainLayout.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../utils/context/UserProvider";
import { RouteContext } from "../../utils/context/RoutesProvider";
import {
  createElementFromString,
  hasCommonElement,
} from "../../utils/helperFunctions";
import logo from "../../assets/accociated-logo.svg";

const Sidebar = () => {
  const { logout, currentUser } = useContext(UserContext);
  const { data, isLoading } = useContext(RouteContext);
  const navigate = useNavigate();

  const getList = () => {
    const logout = [
      // {
      //   key: "Report",
      //   icon: <PoweroffOutlined />,
      //   label: (
      //     <Link to={"/reports"} rel="noopener noreferrer">
      //       Reports
      //     </Link>
      //   ),
      // },
      {
        key: "Logout",
        icon: <PoweroffOutlined />,
        label: <div onClick={handleLogout}>Logout</div>,
      },
    ];
    const array2 = data.map((item) => {
      if (currentUser) {
        if (hasCommonElement(currentUser.roles, item.roles)) {
          return {
            key: item.name,
            icon: createElementFromString(item.icon),
            label: (
              <Link to={item.path} rel="noopener noreferrer">
                {item.title}
              </Link>
            ),
          };
        }
      }
      return null; // Return null if no match is found
    });
    return [...array2, ...logout];
  };

  const handleLogout = async () => {
    message.info("Logged Out!");
    await logout();

    navigate("/login");
  };
  return (
    <>
      <div className={styles.logo}>
        <img
          src={logo}
          alt="Associated-Terminals"
          style={{ height: "inherit" }}
        />
      </div>
      <div>
        {!isLoading && (
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["07"]}
            className={styles.antMenuItem}
            items={getList()}
          />
        )}

        {/* <h1>Profile</h1> */}
      </div>
    </>
  );
};

export default Sidebar;
