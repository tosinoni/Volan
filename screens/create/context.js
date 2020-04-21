import React, { createContext } from "react";

export const CreateItemContext = createContext({
  selectedVehicleType: "",
  car: {},
  mode: "",
  getVehicleInformation: () => {},
  onVehicleTypeChanged: () => {},
  onInputChange: () => {},
  onMultipleValuesChange: () => {},
});

export const CreateItemConsumer = CreateItemContext.Consumer;

export const withCreateItemHOC = (Component) => (props) => (
  <CreateItemConsumer>
    {(state) => <Component {...props} createItem={state} />}
  </CreateItemConsumer>
);
