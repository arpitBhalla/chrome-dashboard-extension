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
      borderRight="4px red solid"
      borderRadius={6}
      padding={1}
      px={2}
      boxShadow="0px 0px 20px 1px #ccc"
      margin={2}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h5" color="textSecondary">
          <b>{Subject[data.code]}</b>
        </Typography>
        <Typography variant="h6" color="textSecondary">
          {data.start}-{data.end}
        </Typography>
      </Box>
      <Box display="flex" alignItems="center" justifyContent="space-between">
        <Typography variant="subtitle1" color="textSecondary">
          <b>{data.teacher}</b>
        </Typography>
        {data.link && (
          <Typography
            onClick={() => onAnchorClick(data.link)}
            variant="button"
            color="textSecondary"
          >
            Open Meet
          </Typography>
        )}
      </Box>
    </Box>
  );
};

export default SubjectBox;
