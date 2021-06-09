import React, {useState} from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import ImageView from './imageView';

const useStyles = makeStyles(() => createStyles({
  card: {
    height: '200px',
    backgroundColor:'rgba(0,0,0,0.03)',
    textAlign:'center'
  },
  image: {
    maxWidth:'100%',
    maxHeight:'100%',
    cursor: 'pointer'
  },
}));

export default function ImageContainer(props: any) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  
  const handleClose = () => {
    setOpen(false);
  };

  return(<div className={classes.card}>
      <ImageView 
        open={open}
        alt={props.alt} 
        src={props.src}
        handleClose={handleClose}
      />
      <img onClick={handleClickOpen} className={classes.image} alt={props.alt} src={props.src}/>
  </div>)
}