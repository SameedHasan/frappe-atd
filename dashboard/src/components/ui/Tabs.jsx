import { useContext } from "react";
import { HeadingContext } from "../../layouts/MainLayout";
import { Tabs } from "antd";
// eslint-disable-next-line react/prop-types
const AntTabs = ({ tabs, position }) => {
  const { setSubHeading } = useContext(HeadingContext);
  const onChange = (key) => {
    if (position !== "top") {
      // Only set subheading when position is not "top"
      setSubHeading(key);
    }
  };
  return (
    <Tabs
      //   defaultActiveKey="Inventory"
      tabPosition={position}
      onChange={onChange}
      size="small"
      items={tabs}
    />
  );
};

export default AntTabs;
