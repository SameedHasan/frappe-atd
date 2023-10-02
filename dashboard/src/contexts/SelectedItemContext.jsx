import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes

const SelectedItemContext = createContext();

export const useSelectedItem = () => {
  return useContext(SelectedItemContext);
};

export const SelectedItemProvider = ({ children }) => {
  const [selectedItem, setSelectedItem] = useState(null);

  const setSelected = (item) => {
    setSelectedItem(item);
  };

  return (
    <SelectedItemContext.Provider value={{ selectedItem, setSelected }}>
      {children}
    </SelectedItemContext.Provider>
  );
};

// Define PropTypes for SelectedItemProvider
SelectedItemProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
