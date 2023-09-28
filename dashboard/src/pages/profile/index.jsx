import { useContext, useEffect } from "react";
import { HeadingContext } from "../../layouts/MainLayout";

const ProfilePage = () => {
  const { setHeading, setSubHeading } = useContext(HeadingContext);
  useEffect(() => {
    setHeading("Profile");
    setSubHeading("");
  }, []);
  return <div>Profile Page</div>;
};

export default ProfilePage;
