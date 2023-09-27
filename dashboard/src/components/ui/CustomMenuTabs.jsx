import { useContext, useState } from "react";
import { Layout, Menu } from "antd";
import PropTypes from "prop-types";
import { Content } from "antd/es/layout/layout";
import Sider from "antd/es/layout/Sider";
import { HeadingContext } from "../../layouts/MainLayout";

const { SubMenu } = Menu;

const CustomTabMenu = ({ tabs }) => {
  const [currentTab, setCurrentTab] = useState(tabs[0].key);
  const { setSubHeading } = useContext(HeadingContext);
  const handleTabClick = (e) => {
    setCurrentTab(e.key);
    setSubHeading(e.key);
    // message.success(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider width={200} theme="light">
        <Menu
          onClick={handleTabClick}
          selectedKeys={[currentTab]}
          mode="inline"
        >
          {tabs.map((tab) => {
            if (tab.subMenu) {
              return (
                <SubMenu key={tab.key} title={tab.label}>
                  {tab.subMenu.map((subTab) => (
                    <Menu.Item key={subTab.key}>{subTab.label}</Menu.Item>
                  ))}
                </SubMenu>
              );
            }
            return <Menu.Item key={tab.key}>{tab.label}</Menu.Item>;
          })}
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ padding: "16px" }}>
          {tabs.map((tab) => {
            if (tab.key === currentTab) {
              return <div key={tab.key}>{tab.content}</div>;
            } else if (tab.subMenu) {
              const subTab = tab.subMenu.find((sub) => sub.key === currentTab);
              if (subTab) {
                return <div key={subTab.key}>{subTab.content}</div>;
              }
            }
            return null;
          })}
        </Content>
      </Layout>
    </Layout>
  );
};

CustomTabMenu.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
      subMenu: PropTypes.arrayOf(
        PropTypes.shape({
          key: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          content: PropTypes.node.isRequired,
        })
      ),
    })
  ).isRequired,
};

export default CustomTabMenu;
