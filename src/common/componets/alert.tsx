import React from 'react';
import { Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { clearAlert } from '../reducers/commonReducer';

const useStyles = makeStyles(() => createStyles({
  root: {
      width:'100%',
    }
}));

function MUIAlert(props: AlertProps) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export default function Alert() {
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const alert = useAppSelector((state) => state.common.alert);
  
  const handleClose = () => {
    dispatch(clearAlert())
  };

  return (
    <div className={classes.root}>
      <Snackbar
        open={!alert.hidden}
        onClose={handleClose}
        autoHideDuration={6000}
        key={'common-alert'}
      >
        <MUIAlert onClose={handleClose} severity={alert.type}>
          {alert.message}
        </MUIAlert>
      </Snackbar>
    </div>
  );
}
