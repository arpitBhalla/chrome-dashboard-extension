import * as React from "react";
import Typography from "@material-ui/core/Typography";

const Greet = () => {
  const day = parseInt((new Date().getHours() / 4).toString());
  return (
    <div>
      <Typography variant="h5" color="textPrimary">
        <b>
          {(() => {
            switch (day) {
              case 0:
                return "Good Night";
              case 1:
                return "Good Morning";
              case 2:
                return "Good Morning";
              case 3:
                return "Good Afternoon";
              default:
                return "Good Evening";
            }
          })()}
        </b>
      </Typography>
    </div>
  );
};

export default Greet;
