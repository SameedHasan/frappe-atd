import { Form, Input, Select, InputNumber, Row, Col } from "antd";

const { Option } = Select;

const generateAntDesignForm = (jsonSchema, onSubmit, id) => {
  const { title, description, required, properties } = jsonSchema;

  const onFinish = (values) => {
    onSubmit(values);

    // You can handle the form submission here
  };

  const formItems = Object.keys(properties).map((property) => {
    const propertySchema = properties[property];
    let inputElement = null;

    if (propertySchema.type === "string") {
      if (propertySchema.enum) {
        inputElement = (
          <Select>
            {propertySchema.enum.map((option) => (
              <Option key={option} value={option}>
                {option}
              </Option>
            ))}
          </Select>
        );
      } else {
        inputElement = <Input />;
      }
    } else if (propertySchema.type === "number") {
      inputElement = <InputNumber />;
    }

    return (
      <Col span={12} key={property}>
        <Form.Item
          name={property}
          label={propertySchema.title}
          rules={[
            {
              required: required.includes(property),
              message: `Please input ${propertySchema.title}!`,
            },
          ]}
        >
          {inputElement}
        </Form.Item>
      </Col>
    );
  });

  return (
    <Form
      id={id}
      name="ant_design_form"
      onFinish={onFinish}
      layout="vertical"
      style={{
        // boxShadow: "2px 2px 4px rgba(0, 0, 0, 0.4)",
        padding: "20px",
      }}
    >
      <Form.Item>
        <h1>{title}</h1>
        <p>{description}</p>
      </Form.Item>
      <Row gutter={16}>{formItems}</Row>
    </Form>
  );
};

export default generateAntDesignForm;
