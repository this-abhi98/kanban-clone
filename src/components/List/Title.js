import React, { useState } from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles((theme) => ({
  TitleContainer: {
    margin: theme.spacing(2),
    display: 'flex',
    justifyContent:'center',
  },
  Title: {
    flexGrow: 1,
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
}));
export default function Title({ title }) {
  const [open, setOpen] = useState(false);
  const classes = useStyle();
  return (
    <div>
        <div className={classes.TitleContainer}>
          <Typography
            onClick={() => setOpen(!open)}
            className={classes.Title}
          >
            {title}
          </Typography>
        </div>
    </div>
  );
}
