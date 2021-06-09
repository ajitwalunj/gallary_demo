import React from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(() => createStyles({
  root:{
    padding: '10px',
    textAlign: 'center',
    fontSize: '20px',
    marginTop: '20px'
  },
  description: {
    marginBottom: '10px'
  }
}));


function Home(props: { classes: any; }) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <div className={classes.root}>
        <div className={classes.description}>
          Welcome to the demo homegage.
        </div>
        <div className={classes.description}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
        </div>
        <div>Click <Link to={'/gallary-layout/gallary'}>here</Link> to explore gallay.</div>
      </div>
    </React.Fragment>
  );
}

export default Home;