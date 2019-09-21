import React from "react";
import { Menu } from "semantic-ui-react";
import { colors } from "helpers/theme.helper";
import { useBroLocation } from "helpers/location.helper";

function Home(props) {
  const broLocation = useBroLocation();
  console.log(broLocation);
  return (
    <div>
      <div
        style={{
          position: "static",
          width: "100vw",
          height: "60px",
          backgroundColor: `${colors.secondaryAccent}`,
          display: "flex"
        }}
      ></div>
    </div>
  );
}

export default Home;
