import PropTypes from "prop-types";
import { Table } from "antd";

const AntTable = ({ data, columns, isLoading }) => {
  return (
    <Table
      columns={columns}
      dataSource={data}
      pagination={{
        pageSize: 5, // Number of records per page
        hideOnSinglePage: true, // Hide pagination if there's only one page
        position: "bottomRight",
      }}
      loading={isLoading}
      rowKey={(record) => record.id}
      bordered
    />
  );
};

AntTable.propTypes = {
  data: PropTypes.array.isRequired,
  columns: PropTypes.array.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

export default AntTable;
