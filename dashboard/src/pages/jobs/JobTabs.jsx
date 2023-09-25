import PropTypes from "prop-types";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const JobTabs = ({ record }) => {
  return (
    <Tabs defaultActiveKey="1">
      {/* Details Tab */}
      <TabPane tab="Detail" key="1">
        <h1>Details tab: {record.id}</h1>
        {/* <Detail record={record} /> */}
      </TabPane>
      {/* Loading Tab */}
      <TabPane tab="Loading" key="2">
        <h1>Loading tab: {record.id}</h1>
        {/* <Loading record={record} /> */}
      </TabPane>
      {/* Cranes Tab */}
      <TabPane tab="Cranes" key="4">
        <h1>Cranes tab: {record.id}</h1>
        {/* <Cranes record={record} /> */}
      </TabPane>
      {/* Barges Tab */}
      <TabPane tab="Barges" key="5">
        <h1>Barges tab: {record.id}</h1>
        {/* <Barges record={record} /> */}
      </TabPane>
      {/* Equipment Tab */}
      <TabPane tab="Equipment" key="6">
        <h1>Equipment tab: {record.id}</h1>
        {/* <Equipment record={record} /> */}
      </TabPane>
      {/* Logs Tab */}
      <TabPane tab="Log" key="7">
        <h1>Logs tab: {record.id}</h1>
        {/* <Logs record={record} /> */}
      </TabPane>
      {/* Documents Tab */}
      <TabPane tab="Documents" key="8">
        <h1>Documents tab: {record.id}</h1>
        {/* <Documents record={record} /> */}
      </TabPane>
      {/* Activity Tab */}
      <TabPane tab="Activity" key="9">
        <h1>Activity tab: {record.id}</h1>
        {/* <Activity record={record} /> */}
      </TabPane>
    </Tabs>
  );
};

// Define PropTypes for your component
JobTabs.propTypes = {
  record: PropTypes.object.isRequired,
};

export default JobTabs;
