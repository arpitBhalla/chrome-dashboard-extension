import * as React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

interface Props {
  name: string;
}

const Label: React.FC<Props> = ({ name }: Props) => {
  return (
    <Box borderLeft={`4px grey solid`} padding={1}>
      <Typography variant="subtitle1" color="textSecondary">
        <b>{name}</b>
      </Typography>
    </Box>
  );
};

export default Label;
