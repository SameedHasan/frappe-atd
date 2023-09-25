import { useContext, useEffect, useState } from "react";
import { Button, Result, Tag } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { jobData } from "../../data/dummyData";
import AntDrawer from "../../components/ui/Drawer";
import JobTabs from "./JobTabs";
import AntTable from "../../components/ui/Table";
import { HeadingContext } from "../../layouts/MainLayout";
const JobsPage = () => {
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  useEffect(() => {
    setHeading("Jobs");
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
      dataIndex: "vessel_name",
      key: "vessel_name",
      width: "12%",
      // filteredValue: searchVessel,
      onFilter: (value, record) => record.vessel_name.includes(value),
    },

    {
      title: "Location Name",
      dataIndex: "location",
      key: "location",
      width: "12%",
      // filteredValue: searchLocation,
      onFilter: (value, record) => record.location.includes(value),
    },

    {
      title: "Customer",
      dataIndex: "customer",
      key: "customer",
      render: () => "Customer",
      width: "12%",
    },

    {
      title: "Billing Company",
      dataIndex: "billing_company",
      key: "billing_company",
      width: "12%",
      // filteredValue: searchBilling,
      onFilter: (value, record) => record.billing_company.includes(value),
    },

    {
      title: "ETA Date",
      dataIndex: "eta_date",
      key: "eta_date",
      width: "12%",
    },

    {
      title: "Job Type",
      dataIndex: "job_type",
      key: "job_type",
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
      // filteredValue: [searchStatus],
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
    {
      title: "CreatedAt",
      key: "createdAt",
      dataIndex: "createdAt",
      width: "12%",
      sortDirections: ["descend"],
      defaultSortOrder: "descend",
      sorter: (a, b) => {
        if (a.createdAt < b.createdAt) {
          return -1;
        }
        if (a.createdAt > b.createdAt) {
          return 1;
        }

        return 0;
      },
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
    <div>
      {error ? (
        <Result
          status="500"
          title="500"
          subTitle="Sorry, something went wrong."
        />
      ) : (
        <AntTable data={jobData} columns={columns} isLoading={isLoading} />
      )}
      {openDrawer && (
        <AntDrawer
          record={drawerData}
          opened={openDrawer}
          setOpenDrawer={setOpenDrawer}
        >
          <JobTabs record={drawerData} />
        </AntDrawer>
      )}
    </div>
  );
};

export default JobsPage;
