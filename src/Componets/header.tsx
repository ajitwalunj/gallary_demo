import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(() => createStyles({
  header : {
    height: 48,
    paddingTop: '30px',
    paddingBottom: '40px',
    textAlign: 'center',
    fontSize: '45px',
    color:'#140b4f',
    fontWeight:'bold',
    fontFamily: 'Lobster',
    cursor: 'pointer'
  },
}));


function Header(props: any) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div onClick={() => {props.history.push('/')}}  className={classes.header}>
        SnapShot
      </div>
    </React.Fragment>
  );
}

export default Header;