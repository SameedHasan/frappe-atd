import { useContext, useEffect, useState } from "react";
import { Button, Result, Tag } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { contractData } from "../../data/dummyData";
import AntDrawer from "../../components/ui/Drawer";
// import InventoryTabs from "./InventoryTabs";
import AntTable from "../../components/ui/Table";
import { HeadingContext } from "../../layouts/MainLayout";
import ContractsTabs from "./tabs";
const ContractsPage = () => {
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  useEffect(() => {
    setHeading("Contracts");
    setSubHeading("");
  }, []);

  const error = false;
  const isLoading = false;

  const [openDrawer, setOpenDrawer] = useState(false);
  const [drawerData, setDrawerData] = useState({});
  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "10%",
      sortDirections: ["descend"],
      defaultSortOrder: "descend",
      // sorter: (a, b) => a.key - b.key,
      sorter: (a, b) => {
        if (a.id < b.id) {
          return -1;
        }
        if (a.id > b.id) {
          return 1;
        }
        return 0;
      },
    },
    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
      width: "12%",
    },
    {
      title: "Sales Rep",
      dataIndex: "salesRep",
      key: "salesRep",
      width: "12%",
    },

    {
      title: "Payment Terms",
      dataIndex: "paymentTerms",
      key: "paymentTerms",
      width: "12%",
    },

    {
      title: "Section",
      dataIndex: "section",
      key: "section",

      width: "12%",
    },

    {
      title: "Description",
      dataIndex: "description",
      key: "description",
      width: "12%",
    },

    {
      title: "Status",
      key: "status",
      render: (_, record) => <Tag color={"green"}>{record.status}</Tag>,
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
        <AntTable data={contractData} columns={columns} isLoading={isLoading} />
      )}
      {openDrawer && (
        <AntDrawer
          record={drawerData}
          opened={openDrawer}
          setOpenDrawer={setOpenDrawer}
        >
          <ContractsTabs record={drawerData} />
        </AntDrawer>
      )}
    </div>
  );
};

export default ContractsPage;
