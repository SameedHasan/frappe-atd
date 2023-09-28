import { Menu } from "antd";
import styles from "../../styles/mainLayout.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../utils/context/UserProvider";
import { RouteContext } from "../../utils/context/RoutesProvider";
import {
  createElementFromString,
  hasCommonElement,
} from "../../utils/helperFunctions";
import logo from "../../assets/accociated-logo.svg";
import logo1 from "../../assets/atd.svg";
import SidebarBottom from "./SidebarBottom";

// eslint-disable-next-line react/prop-types
const Sidebar = ({ collapsed }) => {
  const { currentUser } = useContext(UserContext);
  const { data, isLoading } = useContext(RouteContext);

  const getList = () => {
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
    return array2;
  };

  return (
    <>
      <div className={styles.logo}>
        {collapsed ? (
          <img
            src={logo1}
            alt="Associated-Terminals"
            style={{ height: "inherit" }}
          />
        ) : (
          <img
            src={logo}
            alt="Associated-Terminals"
            style={{ height: "inherit" }}
          />
        )}
      </div>
      <div>
        {!isLoading && (
          <Menu
            theme="light"
            mode="inline"
            defaultSelectedKeys={["01"]}
            className={styles.antMenuItem}
            items={getList()}
          />
        )}
        {/* <h1>Profile</h1> */}
        <SidebarBottom />
      </div>
    </>
  );
};

export default Sidebar;
