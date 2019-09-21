import React, { useState } from "react";

export const BroLocationContext = React.createContext();

export default props => {
  const [broLocation, setBroLocation] = useState({
    long: "",
    lat: ""
  });

  return (
    <BroLocationContext.Provider value={{ broLocation, setBroLocation }}>
      {props.children}
    </BroLocationContext.Provider>
  );
};
