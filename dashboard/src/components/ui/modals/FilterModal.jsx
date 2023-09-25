/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { FilterOutlined } from "@ant-design/icons";
import {
  Button,
  Checkbox,
  DatePicker,
  Divider,
  Form,
  Modal,
  Radio,
} from "antd";
import { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   resetFields,
//   searchByBilling,
//   searchByCustomer,
//   searchByLocation,
//   searchByStatus,
//   searchByVessel,
// } from "../../store/slices/jobFilterSlice";
const CollectionCreateForm = ({ open, onCreate, onCancel, children }) => {
  //   const dispatch = useDispatch();
  //   const {
  //     searchVessel,
  //     searchLocation,
  //     searchBilling,
  //     searchStatus,
  //     searchCustomer,
  //   } = useSelector((state) => state.jobsFilters);

  const [form] = Form.useForm();
  const plainOptions = [
    "King Layer",
    "King Layer 1",
    "Mariana Fast",
    "Mariana Fast 1",
  ];
  const locationOptions = [
    "9193-Associated Chemis Buoys",
    "3456-Example Name Buoys",
  ];
  const customerOptions = [
    "Chemous Midship Logistics",
    "Lemineral Aqua",
    "Industrail Gokil",
  ];
  const billingOptions = ["Associated Terminals LLC", "Internal, INC"];

  const onChange = (checkedValues, type) => {
    console.log("checked = ", checkedValues, type);
    // switch (type) {
    //   case "V":
    //     if (checkedValues.length === 0) {
    //       dispatch(searchByVessel([]));
    //     } else {
    //       dispatch(searchByVessel(checkedValues));
    //     }
    //     break;
    //   case "L":
    //     if (checkedValues.length === 0) {
    //       dispatch(searchByLocation([]));
    //     } else {
    //       dispatch(searchByLocation(checkedValues));
    //     }
    //     break;
    //   case "C":
    //     if (checkedValues.length === 0) {
    //       dispatch(searchByCustomer([]));
    //     } else {
    //       dispatch(searchByCustomer(checkedValues));
    //     }
    //     break;
    //   case "B":
    //     if (checkedValues.length === 0) {
    //       dispatch(searchByBilling([]));
    //     } else {
    //       dispatch(searchByBilling(checkedValues));
    //     }
    //     break;
    //   case "S":
    //     dispatch(searchByStatus(checkedValues.target.value));

    //     break;
    //   default:
    //     break;
    // }
  };

  const handleReset = () => {
    console.log("form reset");
    // dispatch(resetFields());
  };
  return (
    <Modal
      style={{
        top: 60,
        left: "25%",
      }}
      mask={false}
      open={open}
      title={
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0px 20px",
          }}
        >
          <h3>Filter</h3>
          <Button type="primary" ghost onClick={handleReset}>
            Reset
          </Button>
        </div>
      }
      footer={null}
      onCancel={onCancel}
      width={400}
    >
      {/* <AddCrane /> */}
      <Divider />
      <h3>Vessel Name</h3>
      <Checkbox.Group
        // value={searchVessel}
        options={plainOptions}
        onChange={(e) => onChange(e, "V")}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      />
      <Divider />
      <h3>Location</h3>
      <Checkbox.Group
        // value={searchLocation}
        options={locationOptions}
        onChange={(e) => onChange(e, "L")}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      />
      <Divider />
      <h3>Customer</h3>
      <Checkbox.Group
        // value={searchCustomer}
        options={customerOptions}
        onChange={(e) => onChange(e, "C")}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      />
      <Divider />
      <h3>Billing Company</h3>
      <Checkbox.Group
        // value={searchBilling}
        options={billingOptions}
        onChange={(e) => onChange(e, "B")}
        style={{
          display: "flex",
          flexDirection: "column",
        }}
      />
      <Divider />
      <h3>ETA Date</h3>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <DatePicker onChange={onChange} />
        ---
        <DatePicker onChange={onChange} />
      </div>
      <Divider />
      <h3>Status</h3>
      <Radio.Group
        onChange={(e) => onChange(e, "S")}
        // defaultValue={searchStatus}
      >
        <Radio.Button value="Pending">Pending</Radio.Button>
        <Radio.Button value="Started">Started</Radio.Button>
        <Radio.Button value="Completed">Completed</Radio.Button>
        <Radio.Button value="Cancelled">Cancelled</Radio.Button>
      </Radio.Group>
    </Modal>
  );
};
const FilterModal = () => {
  const [open, setOpen] = useState(false);
  const onCreate = (values) => {
    console.log("Received values of form: ", values);
    setOpen(false);
  };
  return (
    <div>
      <Button
        onClick={() => {
          setOpen(true);
        }}
      >
        <FilterOutlined />
      </Button>

      <CollectionCreateForm
        open={open}
        onCreate={onCreate}
        onCancel={() => {
          setOpen(false);
        }}
      ></CollectionCreateForm>
    </div>
  );
};
export default FilterModal;
