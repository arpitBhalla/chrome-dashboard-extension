import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { formatTime } from "../../utils/functions";

const Time = () => {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);
  return (
    <>
      <Typography variant="h4" color="primary">
        {formatTime(time, true)}
      </Typography>
      <Typography variant="h6" color="textSecondary">
        {new Date().toString().slice(0, 15)}
      </Typography>
    </>
  );
};

export default Time;
