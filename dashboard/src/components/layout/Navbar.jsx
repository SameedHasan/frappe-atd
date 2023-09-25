import React, { useContext } from "react";
import { Header } from "antd/es/layout/layout";
import {
  LeftCircleOutlined,
  RightCircleOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import styles from "../../styles/mainLayout.module.css";
import { Divider, Input, Space } from "antd";
import FilterModal from "../ui/modals/FilterModal";
import FormModal from "../ui/modals/FormModal";
import Jobs from "../modules/Jobs";
import { HeadingContext } from "../../layouts/MainLayout";
// eslint-disable-next-line react/prop-types
const Navbar = ({ collapsed, setCollapsed }) => {
  const { heading, subHeading } = useContext(HeadingContext);

  return (
    <Header className={styles.header}>
      {React.createElement(
        collapsed ? RightCircleOutlined : LeftCircleOutlined,
        {
          className: "trigger",
          onClick: () => setCollapsed(!collapsed),
        }
      )}
      <div
        style={{
          width: "100%",
          paddingLeft: "25px",
          paddingRight: "25px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Space size={"large"} split={<Divider type="vertical" />}>
          <h3 id="heading-navbar">{heading}</h3>
          <h3 id="heading-navbar-sub">{subHeading}</h3>
        </Space>
        <Space size={"large"}>
          <Input
            placeholder="input search text"
            prefix={<SearchOutlined />}
            style={{
              width: 200,
            }}
            onChange={(e) => console.log(e.target.value)}
          />
          <FilterModal />
          <FormModal btnName={"Add"} btnTitle="Add" formId="addcranedata">
            <Jobs id="addcranedata" />
          </FormModal>
        </Space>
      </div>
    </Header>
  );
};

export default Navbar;
