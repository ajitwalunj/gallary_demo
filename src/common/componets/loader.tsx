import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { CircularProgress, Backdrop } from '@material-ui/core';
import { useAppSelector } from '../../hooks';

const useStyles = makeStyles(() => createStyles({
  root: {
      zIndex: 99,
      color: '#140b4f'
    }
}));

export default function Loader(props: any) {
  const classes = useStyles();
  const loading = useAppSelector((state) => state.common.loading);
  return(<Backdrop open={loading} className={classes.root}>
      <CircularProgress
        color='inherit'
        disableShrink
        size={80}
        thickness={4}
      />
  </Backdrop>)
}