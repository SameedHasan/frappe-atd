import { useContext, useEffect } from "react";

import { HeadingContext } from "../layouts/MainLayout";

const DashboardPage = () => {
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  useEffect(() => {
    setHeading("Dashboard");
    setSubHeading("");
  }, []);

  // return <CustomTabs tabs={tabs} />;
  return <h1>Dashboard Page</h1>;
};

export default DashboardPage;

//  const tabs = [
//    {
//      label: "Tab 1",
//      content: <div>Tab 1 Content</div>,
//    },
//    {
//      label: "Tab 2",
//      content: <div>Tab 2 Content</div>,
//    },
//    {
//      label: "Tab 3",
//      content: <div>Tab 3 Content</div>,
//    },
//  ];
