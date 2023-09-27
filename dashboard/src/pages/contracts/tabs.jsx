import PropTypes from "prop-types";

import AntTabs from "../../components/ui/Tabs";

const ContractsTabs = ({ record }) => {
  const items = [
    {
      label: "Details",
      key: "1",
      children: <h1>Detailed - {JSON.stringify(record)}</h1>,
    },
    {
      label: "Stevedoring Rates",
      key: "2",
      children: <h1>Stevedoring Rates</h1>,
    },
    {
      label: "Storage Rates",
      key: "3",
      children: <h1>Storage Rates</h1>,
    },
    {
      label: "Guarantee Amounts",
      key: "4",
      children: <h1>Guarantee Amounts</h1>,
    },
    {
      label: "Contract Notes",
      key: "5",
      children: <h1>Contract Notes</h1>,
    },
  ];
  return <AntTabs tabs={items} position="top" />;
};

// Define PropTypes for your component
ContractsTabs.propTypes = {
  record: PropTypes.object.isRequired,
};

export default ContractsTabs;
