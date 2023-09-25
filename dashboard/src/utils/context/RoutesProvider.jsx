import { useFrappeGetCall } from "frappe-react-sdk";
// import { FC, PropsWithChildren } from "react";
import { createContext } from "react";

export const RouteContext = createContext({
  isLoading: false,
  data: [],
  error: "",
  mutate: () => {},
});

// eslint-disable-next-line react/prop-types
export const RoutesProvider = ({ children }) => {
  const { data, error, isLoading, mutate } = useFrappeGetCall(
    "associated_terminals.associated_terminals.doctype.routes.api.get_parent_and_child_data",

    {
      doctype: "Routes",
    }
  );

  if (data) {
    console.log("data", data);
  }

  return (
    <RouteContext.Provider
      value={{
        data: data?.message || [], // Ensure it's an array
        isLoading,
        error,
        mutate,
      }}
    >
      {children}
    </RouteContext.Provider>
  );
};
