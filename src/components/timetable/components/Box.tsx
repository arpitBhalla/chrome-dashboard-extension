import * as React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Period } from "../../../types";
import Subject from "../../../utils/subject";
import { FcBrokenLink } from "react-icons/fc";

function onAnchorClick(url: string) {
  // @ts-ignore
  chrome.tabs.create({ url });
}
interface Props {
  data: Period;
  now?: boolean;
}
const useStyles = makeStyles((theme) => ({
  root: {
    cursor: (e) => e && "pointer",
    padding: theme.spacing(2),
    borderBottom: "1px solid #eee",
    "&:hover": {
      boxShadow: (e) => e && "0px 0px 10px 1px #ddd",
    },
  },
}));

const SubjectBox: React.FC<Props> = ({ data, now = false }: Props) => {
  const classes = useStyles(Boolean(data.link));
  return (
    <Box
      className={classes.root}
      onClick={() => data.link && onAnchorClick(data.link)}
      // borderRight={`6px ${data.link ? "green" : "red"} solid`}
    >
      <Box display="flex" justifyContent="space-between">
        <Typography variant="h6" color="textSecondary">
          <b>{Subject[data.code]}</b>
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          <b>
            {data.start}-{data.end}
          </b>
        </Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Typography variant="subtitle2" color="textSecondary">
          <b>{data.teacher}</b>
        </Typography>
        <Typography variant="caption" color="primary">
          {data.link && <FcBrokenLink />}
          {data.link?.slice(0, 30)}...
        </Typography>
      </Box>
    </Box>
  );
};

export default SubjectBox;
