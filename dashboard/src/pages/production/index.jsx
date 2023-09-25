import { Tabs } from "antd";
import { useContext, useEffect } from "react";
import { HeadingContext } from "../../layouts/MainLayout";

const ProductionPage = () => {
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  useEffect(() => {
    setHeading("Production");
    setSubHeading("Crane Log");
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
            label: "Crane Log",
            key: "Crane Log",
            children: <h1>Crane Log</h1>,
          },
          {
            label: "Barge Loading",
            key: "Barge Loading",
            children: <h1>Barge Loading</h1>,
          },
          {
            label: "Tally by Hold",
            key: "Tally by Hold",
            children: <h1>Tally by Hold</h1>,
          },
          {
            label: "Shift Labor",
            key: "Shift Labor",
            children: <h1>Shift Labor</h1>,
          },
          {
            label: "Vessel Draft",
            key: "Vessel Draft",
            children: <h1>Vessel Draft</h1>,
          },
          {
            label: "ROV Request",
            key: "ROV Request",
            children: <h1>ROV Request</h1>,
          },
          {
            label: "Bag Loading",
            key: "Bag Loading",
            children: <h1>Bag Loading</h1>,
          },
        ]}
      />
    </>
  );
};

export default ProductionPage;
