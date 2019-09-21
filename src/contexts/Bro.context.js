import React, { useState } from 'react';

export const BroContext = React.createContext();

export default props => {
  const [bro, setBro] = useState(null);

  return (
    <BroContext.Provider value={{ bro, setBro }}>
      {props.children}
    </BroContext.Provider>
  );
};
