import * as React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import { Period } from "./../types";
import Subject from "./../utils/subject";

function onAnchorClick(url: string) {
  chrome.tabs.create({ url });
}
interface Props {
  data: Period;
}

const SubjectBox: React.FC<Props> = ({ data }: Props) => {
  return (
    <Box
      onClick={() => data.link && onAnchorClick(data.link)}
      borderRight={`6px ${data.link ? "green" : "red"} solid`}
      borderRadius={4}
      padding={2}
      boxShadow="0px 0px 20px 1px #ccc"
      margin={2}
    >
      <Typography variant="h6" color="textSecondary">
        <b>{Subject[data.code]}</b>
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        <b>
          {data.start}-{data.end}
        </b>
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        <b>{data.teacher}</b>
      </Typography>
    </Box>
  );
};

export default SubjectBox;
