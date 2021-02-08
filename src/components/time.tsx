import * as React from "react";
import Typography from "@material-ui/core/Typography";
import { formatTime } from "./../utils/functions";
import { FcCalendar } from "react-icons/fc";

const Time = () => {
  const [time, setTime] = React.useState(new Date());
  React.useEffect(() => {
    setTimeout(() => {
      setTime(new Date());
    }, 1000);
  }, [time]);
  return (
    <div>
      <Typography variant="h4">{formatTime(time, true)}</Typography>
      <Typography variant="h6" color="textSecondary">
        {new Date().toString().slice(0, 15)}
      </Typography>
    </div>
  );
};

export default Time;
