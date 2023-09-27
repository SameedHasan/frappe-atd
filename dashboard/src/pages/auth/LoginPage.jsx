import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import styles from "../../styles/auth.module.css";
import { useContext, useEffect } from "react";
import { UserContext } from "../../utils/context/UserProvider";
import Loader from "../../components/ui/Loader";
// import styles from './auth.module.css';

const LoginPage = () => {
  const { login, currentUser, isLoading } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      console.log("getUserCookie", currentUser);
      navigate("/jobs", { replace: true });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser]);

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    await login(values.username, values.password)
      .then((response) => {
        // Handle successful login here
        message.success("Welcome Back!", response);
      })
      .catch((error) => {
        message.error(error.message);
      });
  };
  return (
    <Form
      name="normal_login"
      className={styles.loginForm}
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <h1 className={styles.heading}>Login Form</h1>
      {isLoading && <Loader />}
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className={styles.siteFormItemIcon} />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password
          prefix={<LockOutlined className={styles.siteFormItemIcon} />}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className={styles.loginFormButton}
        >
          Log in
        </Button>
      </Form.Item>
      {/* Or <Link to="/auth/register">register now!</Link> */}
    </Form>
  );
};

export default LoginPage;
