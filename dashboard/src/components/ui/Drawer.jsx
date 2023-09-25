import PropTypes from "prop-types";
import { Drawer, Space } from "antd";

const AntDrawer = ({ opened, setOpenDrawer, children }) => {
  const onClose = () => {
    setOpenDrawer(false);
  };
  return (
    <Drawer
      placement="right"
      size={"large"}
      onClose={onClose}
      open={opened}
      extra={<Space></Space>}
      width="80%"
    >
      {children}
    </Drawer>
  );
};

// Define PropTypes for your component
AntDrawer.propTypes = {
  record: PropTypes.object.isRequired,
  opened: PropTypes.bool.isRequired,
  setOpenDrawer: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

export default AntDrawer;
