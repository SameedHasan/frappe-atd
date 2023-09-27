import { useContext, useEffect } from "react";
import { HeadingContext } from "../../layouts/MainLayout";
import CustomTabMenu from "../../components/ui/CustomMenuTabs";

const AccountingPage = () => {
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  useEffect(() => {
    setHeading("Accounting");
    // setSubHeading("Crane Log");

    return () => {
      setSubHeading("");
    };
  }, []);
  const tabs = [
    {
      key: "All Invoices",
      label: "All Invoices",
      content: "All Invoices Content",
    },
    {
      key: "Dockage",
      label: "Dockage",
      content: "Dockage Content",
    },
    {
      key: "Stevedoring",
      label: "Stevedoring",
      subMenu: [
        {
          key: "Bulk Cargo",
          label: "Bulk Cargo",
          content: "Bulk Cargo Content",
        },
        {
          key: "General Cargo",
          label: "General Cargo",
          content: "General Cargo Content",
        },
      ],
    },
    {
      key: "Inventory",
      label: "Inventory",
      subMenu: [
        {
          key: "Storage ",
          label: "Storage ",
          content: "Storage  Content",
        },
        {
          key: "Rail",
          label: "Rail ",
          content: "Rail Content",
        },
        {
          key: "Trucking",
          label: "Trucking ",
          content: "Trucking Content",
        },
      ],
    },
    {
      key: "Mooring",
      label: "Mooring",
      content: "Mooring Content",
    },
    {
      key: "Laytime",
      label: "Laytime",
      content: "Laytime Content",
    },
  ];
  return (
    <div>
      <CustomTabMenu tabs={tabs} />
    </div>
  );
};

export default AccountingPage;
