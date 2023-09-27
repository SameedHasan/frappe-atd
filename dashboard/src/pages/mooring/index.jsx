import { useContext, useEffect } from "react";
import { Button, Result, message } from "antd";
import { MoreOutlined } from "@ant-design/icons";
import { mooringData } from "../../data/dummyData";

// import InventoryTabs from "./InventoryTabs";
import AntTable from "../../components/ui/Table";
import { HeadingContext } from "../../layouts/MainLayout";

const MooringPage = () => {
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  useEffect(() => {
    setHeading("Mooring");
    setSubHeading("");
  }, []);

  const error = false;
  const isLoading = false;

  const columns = [
    {
      title: "Id",
      dataIndex: "id",
      key: "id",
      width: "10%",
      sortDirections: ["descend"],
      defaultSortOrder: "descend",
      // sorter: (a, b) => a.id - b.id,
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
      title: "Vessel Name",
      dataIndex: "vesselName",
      key: "vesselName",
      width: "12%",
    },

    {
      title: "Agent",
      dataIndex: "agent",
      key: "agent",
      width: "12%",
    },

    {
      title: "Location",
      dataIndex: "location",
      key: "location",
      width: "12%",
    },

    {
      title: "Mooring Scheduled",
      dataIndex: "mooringScheduled",
      key: "mooringScheduled",
      width: "12%",
    },
    {
      title: "Mooring Start",
      dataIndex: "mooringStart",
      key: "mooringStart",
      width: "12%",
    },
    {
      title: "Mooring End",
      dataIndex: "mooringEnd",
      key: "mooringEnd",
      width: "12%",
    },

    {
      title: "UnMooring Scheduled",
      dataIndex: "unmooringScheduled",
      key: "unmooringScheduled",
      width: "12%",
    },
    {
      title: "UnMooring Start",
      dataIndex: "unmooringStart",
      key: "unmooringStart",
      width: "12%",
    },
    {
      title: "UnMooring End",
      dataIndex: "unmooringEnd",
      key: "unmooringEnd",
      width: "12%",
    },

    {
      title: "Inv.?",
      key: "inv",
      dataIndex: "inv",
      width: "10%",
    },
    {
      title: "Set",
      key: "set",
      render: (_, record) => (
        <Button
          type="text"
          icon={<MoreOutlined />}
          shape="circle"
          onClick={() => {
            message.info(`${record.id}`);
          }}
        ></Button>
      ),
      width: "7%",
      fixed: "right",
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
        <AntTable data={mooringData} columns={columns} isLoading={isLoading} />
      )}
    </div>
  );
};

export default MooringPage;
