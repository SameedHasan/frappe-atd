import { useContext, useEffect } from "react";

import { HeadingContext } from "../../layouts/MainLayout";

const PlannerPage = () => {
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  useEffect(() => {
    setHeading("Planner");
    setSubHeading("");
  }, []);
  return <div>PlannerPage</div>;
};

export default PlannerPage;
