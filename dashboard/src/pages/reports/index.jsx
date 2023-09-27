import { Tabs } from "antd";
import { useContext, useEffect } from "react";
import { HeadingContext } from "../../layouts/MainLayout";
import { UserContext } from "../../utils/context/UserProvider";
import { useNavigate } from "react-router-dom";
import CustomTabMenu from "../../components/ui/CustomMenuTabs";

const ReportsPage = () => {
  const { currentUser } = useContext(UserContext);
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (currentUser) {
      setHeading("Reports");
      setSubHeading("Report Inventory");
    } else {
      navigate("/login");
    }
  }, []);

  const tabs = [
    {
      key: "Inventory",
      label: "Inventory",
      content: "Inventory Content",
    },

    {
      key: "Logistics",
      label: "Logistics",
      subMenu: [
        {
          key: "Barge Job History",
          label: "Barge Job History",
          content: "Barge Job History Content",
        },
        {
          key: "Weather Times",
          label: "Weather Times",
          content: "Weather Times Content",
        },
        {
          key: "Stevedoring Billing Ship Schedule",
          label: "Stevedoring Billing Ship Schedule",
          content: "Stevedoring Billing Ship Schedule Content",
        },
        {
          key: "St Bernard Port Report Dockage",
          label: "St Bernard Port Report Dockage",
          content: "St Bernard Port Report Dockage Content",
        },
      ],
    },

    {
      key: "Production",
      label: "Production",
      content: "Production Content",
    },
    {
      key: "Accounting",
      label: "Accounting",
      content: "Accounting Content",
    },
  ];

  return (
    <div>
      <CustomTabMenu tabs={tabs} />
    </div>
  );
};

export default ReportsPage;
