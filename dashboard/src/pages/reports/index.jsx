import { Tabs } from "antd";
import { useContext, useEffect } from "react";
import { HeadingContext } from "../../layouts/MainLayout";
import { UserContext } from "../../utils/context/UserProvider";
import { useNavigate } from "react-router-dom";

const Reports = () => {
  const { currentUser } = useContext(UserContext);
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  const navigate= useNavigate()
  useEffect(() => {

    if (currentUser) {
      setHeading("Reports");
      setSubHeading("Report Inventory");
    }else {
        navigate("/login")
    }
  }, []);

  const onChange = (key) => {
    setSubHeading(key);
  };
  return (
    <>
      <Tabs
        defaultActiveKey="Inventory"
        tabPosition="left"
        onChange={onChange}
        size="small"
        items={[
          {
            label: "Inventory",
            key: "Inventory",
            children: <h1>Inventory</h1>,
          },
          {
            label: "Logistics",
            key: "Logistics",
            children: <h1>Logistics</h1>,
          },
          {
            label: "Production",
            key: "Production",
            children: <h1>Production</h1>,
          },
          {
            label: "Accounting",
            key: "Accounting",
            children: <h1>Accounting</h1>,
          },
        ]}
      />
    </>
  );
};

export default Reports;
