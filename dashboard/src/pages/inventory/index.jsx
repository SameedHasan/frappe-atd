import { useContext, useEffect, useState } from "react";
import { Button, Result, Tag } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { inventoryData } from "../../data/dummyData";
import AntDrawer from "../../components/ui/Drawer";
// import InventoryTabs from "./InventoryTabs";
import AntTable from "../../components/ui/Table";
import { HeadingContext } from "../../layouts/MainLayout";
import InventoryTabs from "../contracts/tabs";
const InventoryPage = () => {
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  useEffect(() => {
    setHeading("Inventory");
    setSubHeading("");
  }, []);

  const error = false;
  const isLoading = false;

  const [openDrawer, setOpenDrawer] = useState(false);
  const [drawerData, setDrawerData] = useState({});
  const columns = [
    {
      title: "Id",
      dataIndex: "key",
      key: "key",
      wkeyth: "10%",
      sortDirections: ["descend"],
      defaultSortOrder: "descend",
      // sorter: (a, b) => a.key - b.key,
      sorter: (a, b) => {
        if (a.key < b.key) {
          return -1;
        }
        if (a.key > b.key) {
          return 1;
        }
        return 0;
      },
    },

    {
      title: "Job Name",
      dataIndex: "jobName",
      key: "jobName",
      width: "12%",
    },

    {
      title: "Cargo",
      dataIndex: "cargo",
      key: "cargo",
      width: "12%",
    },

    {
      title: "BL #",
      dataIndex: "bl",
      key: "bl",

      width: "12%",
    },

    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
      width: "12%",
    },

    {
      title: "Sum Manif Tons",
      dataIndex: "sumManifTons",
      key: "sumManifTons",
      width: "12%",
    },

    {
      title: "Sum Manif Units",
      dataIndex: "sumManifUnits",
      key: "sumManifUnits",
      width: "12%",
    },

    {
      title: "Status",
      key: "status",
      render: (_, record) => (
        <Tag
          color={
            record.status === "Completed"
              ? "green"
              : record.status === "Started"
              ? "blue"
              : record.status === "Cancelled"
              ? "red"
              : ""
          }
        >
          {record.status}
        </Tag>
      ),
      width: "12%",
    },
    {
      title: "Set",
      key: "set",
      render: (_, record) => (
        <Button
          type="text"
          icon={<SettingOutlined />}
          shape="circle"
          onClick={() => {
            setDrawerData(record);
            setOpenDrawer(true);
          }}
        ></Button>
      ),
      width: "7%",
    },
  ];

  return (
    <div className="page-content">
      {error ? (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
        />
      ) : (
        <AntTable
          data={inventoryData}
          columns={columns}
          isLoading={isLoading}
        />
      )}
      {openDrawer && (
        <AntDrawer
          record={drawerData}
          opened={openDrawer}
          setOpenDrawer={setOpenDrawer}
        >
          <InventoryTabs record={drawerData} />
        </AntDrawer>
      )}
    </div>
  );
};

export default InventoryPage;
