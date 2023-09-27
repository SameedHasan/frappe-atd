import { useContext, useEffect } from "react";
import { HeadingContext } from "../../layouts/MainLayout";
import CustomTabMenu from "../../components/ui/CustomMenuTabs";

const SettingsPage = () => {
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  useEffect(() => {
    setHeading("Settings");
    // setSubHeading("Crane Log");

    return () => {
      setSubHeading("");
    };
  }, []);
  const tabs = [
    {
      key: "User",
      label: "User",
      subMenu: [
        {
          key: "Accounts",
          label: "Accounts",
          content: "Accounts Content",
        },
        {
          key: "Groups",
          label: "Groups",
          content: "Groups Content",
        },
      ],
    },
    {
      key: "Company",
      label: "Company",
      subMenu: [
        {
          key: "Region",
          label: "Region",
          content: "Region Content",
        },
        {
          key: "Locations",
          label: "Locations",
          content: "Locations Content",
        },
        {
          key: "Billing Companies",
          label: "Billing Companies",
          content: "Billing Companies Content",
        },
      ],
    },
    {
      key: "Organization",
      label: "Organization",
      subMenu: [
        {
          key: "Type",
          label: "Type",
          content: "Type Content",
        },
        {
          key: "Group",
          label: "Group",
          content: "Group Content",
        },
        {
          key: "Organizations",
          label: "Organizations",
          content: "Organizations Content",
        },
      ],
    },
    {
      key: "Equipment",
      label: "Equipment",
      subMenu: [
        {
          key: "Type O",
          label: "Type",
          content: "Type Content",
        },

        {
          key: "Equipment",
          label: "Equipment",
          content: "Equipment Content",
        },
      ],
    },
    {
      key: "Job Type",
      label: "Job Type",
      content: "Job Type Content",
    },
    {
      key: "Cargo",
      label: "Cargo",
      subMenu: [
        {
          key: "Commodity Group",
          label: "Commodity Group",
          content: "Commodity Group Content",
        },
        {
          key: "Cargo",
          label: "Cargo",
          content: "Cargo Content",
        },
        {
          key: "Unit Types",
          label: "Unit Types",
          content: "Unit Types Content",
        },
      ],
    },
    {
      key: "Logs",
      label: "Logs",
      subMenu: [
        {
          key: "Group L",
          label: "Group",
          content: "Group Content",
        },
        {
          key: "Codes",
          label: "Codes",
          content: "Codes Content",
        },
      ],
    },
    {
      key: "Accounting",
      label: "Accounting",
      subMenu: [
        {
          key: "Cost Type",
          label: "Cost Type",
          content: "Cost Type Content",
        },
        {
          key: "Revenue Type",
          label: "Revenue Type",
          content: "Revenue Type Content",
        },
        {
          key: "Tarrifs",
          label: "Tarrifs",
          content: "Tarrifs Content",
        },
        {
          key: "Fuel Surcharge",
          label: "Fuel Surcharge",
          content: "Fuel Surcharge Content",
        },
        {
          key: "Liner Terms",
          label: "Liner Terms",
          content: "Liner Terms Content",
        },
        {
          key: "Payment Terms",
          label: "Payment Terms",
          content: "Payment Terms Content",
        },
        {
          key: "Payment Type",
          label: "Payment Type",
          content: "Payment Type Content",
        },
      ],
    },
  ];
  return (
    <div>
      <CustomTabMenu tabs={tabs} />
    </div>
  );
};

export default SettingsPage;
