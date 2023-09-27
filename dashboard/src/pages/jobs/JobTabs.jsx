import PropTypes from "prop-types";
import AntTabs from "../../components/ui/Tabs";

const JobTabs = ({ record }) => {
  const items = [
    { label: "Detail", key: "1", children: <h1>Details tab: {record.id}</h1> },
    { label: "Loading", key: "2", children: <h1>Loading tab: {record.id}</h1> },
    { label: "Cranes", key: "4", children: <h1>Cranes tab: {record.id}</h1> },
    { label: "Barges", key: "5", children: <h1>Barges tab: {record.id}</h1> },
    {
      label: "Equipment",
      key: "6",
      children: <h1>Equipment tab: {record.id}</h1>,
    },
    { label: "Log", key: "7", children: <h1>Logs tab: {record.id}</h1> },
    {
      label: "Documents",
      key: "8",
      children: <h1>Documents tab: {record.id}</h1>,
    },
    {
      label: "Activity",
      key: "9",
      children: <h1>Activity tab: {record.id}</h1>,
    },
  ];
  return <AntTabs tabs={items} position="top" />;
};

JobTabs.propTypes = {
  record: PropTypes.object.isRequired,
};

export default JobTabs;
