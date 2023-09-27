// import { Tabs } from "antd";
import { useContext, useEffect } from "react";
import { HeadingContext } from "../../layouts/MainLayout";

import CustomTabMenu from "../../components/ui/CustomMenuTabs";

const ProductionPage = () => {
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  useEffect(() => {
    setHeading("Production");
    setSubHeading("Crane Log");

    return () => {
      setSubHeading("");
    };
  }, []);

  // const onChange = (key) => {
  //   setSubHeading(key);
  // };

  const tabs = [
    {
      key: "Crane Log",
      label: "Crane Log",
      content: <h1>Crane Log</h1>,
    },
    {
      key: "Barge Loading",
      label: "Barge Loading",
      content: <h1>Barge Loading</h1>,
    },
    {
      key: "Tally by Hold",
      label: "Tally by Hold",
      content: <h1>Tally by Hold</h1>,
    },
    {
      key: "Shift Labor",
      label: "Shift Labor",
      content: <h1>Shift Labor</h1>,
    },
    {
      key: "Vessel Draft",
      label: "Vessel Draft (VDS)",
      content: <h1>Vessel Draft (VDS)</h1>,
    },
    {
      key: "ROV Request",
      label: "ROV Request",
      content: <h1>ROV Request</h1>,
    },
    {
      key: "Bag Loading",
      label: "Bag Loading",
      content: <h1>Bag Loading</h1>,
    },
  ];

  return <CustomTabMenu tabs={tabs} />;
};

export default ProductionPage;

//  const tabs = [
//    {
//      label: "Crane Log",
//      key: "Crane Log",
//      children: <h1>Crane Log</h1>,
//    },
//    {
//      label: "Barge Loading",
//      key: "Barge Loading",
//      children: <h1>Barge Loading</h1>,
//    },
//    {
//      label: "Tally by Hold",
//      key: "Tally by Hold",
//      children: <h1>Tally by Hold</h1>,
//    },
//    {
//      label: "Shift Labor",
//      key: "Shift Labor",
//      children: <h1>Shift Labor</h1>,
//    },
//    {
//      label: "Vessel Draft (VDS)",
//      key: "Vessel Draft",
//      children: <h1>Vessel Draft</h1>,
//    },
//    {
//      label: "ROV Request",
//      key: "ROV Request",
//      children: <h1>ROV Request</h1>,
//    },
//    {
//      label: "Bag Loading",
//      key: "Bag Loading",
//      children: <h1>Bag Loading</h1>,
//    },
//  ];
