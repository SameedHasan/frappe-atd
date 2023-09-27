import { useContext, useEffect } from "react";
import { HeadingContext } from "../../layouts/MainLayout";

const StowPlanPage = () => {
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  useEffect(() => {
    setHeading("Stow Plan");
    // setSubHeading("Crane Log");

    return () => {
      setSubHeading("");
    };
  }, []);
  return <div>StowPlanPage</div>;
};

export default StowPlanPage;
