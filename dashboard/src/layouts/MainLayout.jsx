import { createContext, useContext, useState } from "react";
import { Layout } from "antd";
const { Sider, Content } = Layout;

import styles from "../styles/mainLayout.module.css";
import Sidebar from "../components/layout/Sidebar";
import Navbar from "../components/layout/Navbar";

import { RouteContext } from "../utils/context/RoutesProvider";
import { SelectedItemProvider } from "../contexts/SelectedItemContext";

const HeadingContext = createContext();
// eslint-disable-next-line react/prop-types
function MainLayout({ children }) {
  const [collapsed, setCollapsed] = useState(false);
  const [heading, setHeading] = useState("");
  const [subHeading, setSubHeading] = useState("");

  const { isLoading: routeLoading } = useContext(RouteContext);

  return (
    <Layout className={styles.layout}>
      {!routeLoading && (
        <>
          <SelectedItemProvider>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <Sidebar collapsed={collapsed} />
            </Sider>
            <Layout className={styles.siteLayout}>
              <HeadingContext.Provider
                value={{
                  heading,
                  setHeading,
                  subHeading,
                  setSubHeading,
                }}
              >
                {/* <Navbar collapsed={collapsed} setCollapsed={setCollapsed} /> */}
                <Content className={styles.content}>
                  <Navbar collapsed={collapsed} setCollapsed={setCollapsed} />
                  {children}
                </Content>
              </HeadingContext.Provider>
            </Layout>
          </SelectedItemProvider>
        </>
      )}
    </Layout>
  );
}

export default MainLayout;
export { HeadingContext };
