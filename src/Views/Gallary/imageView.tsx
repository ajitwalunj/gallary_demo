import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

  const useStyles = makeStyles(() => createStyles({
    root: {
      width: '100%'
    },
    titleContainer: {
      padding: '5px',
      display:'flex',
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      color:'#140b4f'
    },
    content: {
      backgroundColor: 'rgba(0,0,0,0.03)',
      textAlign:'center',
      padding: 0
    },
    image: {
      maxWidth:'100%',
      maxHeight:'100%'
    },
  }));

export default function ImageView(props: any) {
  const classes = useStyles();
  return (
    <Dialog className={classes.root} onClose={props.handleClose} aria-labelledby="dialog-image-title" open={props.open}>
        <MuiDialogTitle disableTypography className={classes.titleContainer}>
          <Typography variant="subtitle1">{props.alt ? props.alt : '--'}</Typography>
          <IconButton color='inherit' style={{padding: '5px', marginLeft: '5px'}} aria-label="close" onClick={props.handleClose}>
            <CloseIcon />
          </IconButton>
        </MuiDialogTitle>
        <MuiDialogContent className={classes.content} dividers>
          <img className={classes.image} src={props.src} alt={props.alt}/>
        </MuiDialogContent>
      </Dialog>
  );
}
