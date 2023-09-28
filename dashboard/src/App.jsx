import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AuthLayout from "./layouts/AuthLayout";
import LoginPage from "./pages/auth/LoginPage";
import { UserContext } from "./utils/context/UserProvider";
import { RouteContext } from "./utils/context/RoutesProvider";
import {
  createElementFromString,
  hasCommonElement,
} from "./utils/helperFunctions";
import Loader from "./components/ui/Loader";
import { Result, message } from "antd";
import ProfilePage from "./pages/profile";

function App() {
  const { currentUser, isLoading } = useContext(UserContext);
  const { data, error } = useContext(RouteContext);

  if (error) {
    message.error(error);
  }
  // Determine the initial route based on the user's authentication status
  const initialRoute = currentUser ? "/dashboard" : "/login";

  // Determine which layout to render based on the user's authentication status
  const Layout = currentUser ? MainLayout : AuthLayout;

  const RenderRoutes = () => {
    // Filter the routes that match the user's roles
    const filteredRoutes = currentUser
      ? data?.filter((r) => hasCommonElement(currentUser.roles, r.roles))
      : [];

    return (
      <Routes>
        {filteredRoutes.map((r, i) => (
          <Route
            key={i}
            path={r.path}
            element={createElementFromString(r.element)}
          />
        ))}
        <Route path="/" element={<Navigate to={initialRoute} />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        {/* <Route path="/reports" element={<Reports />} /> */}
        <Route
          path="*"
          element={
            <Result
              status="404"
              title="404"
              subTitle="Sorry, the page you visited does not exist."
              // extra={<Button type="primary">Back Home</Button>}
            />
          }
        />
      </Routes>
    );
  };

  return (
    <Layout>
      <div className="App">{isLoading ? <Loader /> : <RenderRoutes />}</div>
    </Layout>
  );
}

export default App;
