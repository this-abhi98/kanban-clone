import React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import SortIcon from '@material-ui/icons/Sort';
import {IconButton} from '@material-ui/core'

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
    paddingTop: '11px',
  },
}));
export default function Title({ title, onClickSort }) {
  const classes = useStyle();
  return (
    <div>
        <div className={classes.TitleContainer}>
          <Typography
            className={classes.Title}
          >
            {title}
          </Typography>

          <IconButton onClick = {() => onClickSort()}>
          <SortIcon/>
          </IconButton>

        </div>
    </div>
  );
}
