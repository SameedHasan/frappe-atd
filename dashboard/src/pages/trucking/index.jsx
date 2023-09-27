import { useContext, useEffect } from "react";
import { HeadingContext } from "../../layouts/MainLayout";
import AntTabs from "../../components/ui/Tabs";

const TruckingPage = () => {
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  useEffect(() => {
    setHeading("Trucking");
    // setSubHeading("Crane Log");

    return () => {
      setSubHeading("");
    };
  }, []);

  const tabs = [
    {
      label: "Appointments",
      key: "Appointments",
      children: <h1>Appointments</h1>,
    },
    {
      label: "Tickets",
      key: "Tickets",
      children: <h1>Tickets</h1>,
    },
  ];

  return <AntTabs tabs={tabs} position="top" />;
};

export default TruckingPage;
