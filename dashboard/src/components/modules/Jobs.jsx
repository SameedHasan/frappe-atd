import schema from "../../jsons/Jobs/Jobs.json";
import generateAntDesignForm from "../../utils/generateAntDesignForm";
import PropTypes from "prop-types";
const container = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  //   width: "100vw",
  // height: "100vh",
};

const Jobs = ({ id }) => {
  const handleSubmit = (values) => {
    // Handle form submission here
    console.log(values);
  };

  return (
    <div style={container}>
      {generateAntDesignForm(schema, handleSubmit, id)}
    </div>
  );
};
Jobs.propTypes = {
  id: PropTypes.string.isRequired,
  // Add other prop types as needed
};

export default Jobs;
