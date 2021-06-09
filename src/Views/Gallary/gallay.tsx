import React, { useState } from 'react';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {Box, Grid, Button, InputBase} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import Skeleton from '@material-ui/lab/Skeleton';
import ErrorOutlineIcon from '@material-ui/icons/ErrorOutline';
import { useAppSelector, useAppDispatch } from '../../hooks';
import {fetchImagesByKeyword} from './api/gallaryApis';
import {setCategory, setFilter} from './reducers/gallaryReducer';
const ImageUI = React.lazy(() => import('./Image'));

const useStyles = makeStyles(() => createStyles({
  root: {
    flex: 1,
    marginTop: '40px',
  },
  emptyUI: {
    fontSize: '20px',
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign:'center',
    height: '300px'
  },
  card: {
    height: '200px'
  },
  inputContainer: {
    padding: '0 0 0 4px',
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
    maxWidth: 400,
    border: '2px solid #140b4f',
    borderRadius: '5px',
    backgroundColor:'#fafafa'
  },
  input: {
    flex: 1,
    marginLeft: '2px'
  },
  gridHeader: {
    textTransform: 'capitalize',
    textAlign: 'center',
    color:'#140b4f',
    fontSize: '25px',
    fontWeight: 'bold',
    fontFamily: 'Josefin Sans',
    marginBottom:'20px'
  }
}));

const categories = [
  {
    name: 'Mountain',
    keyword: 'mountain'
  },
  {
    name: 'Beaches',
    keyword: 'beaches'
  },
  {
    name: 'Birds',
    keyword: 'birds'
  },
  {
    name: 'Food',
    keyword: 'food'
  },
];

function Gallary(_props: { history: any; classes: any; }) {
  const [keyword, setKeyword] = useState('');
  const classes = useStyles();
  const dispatch = useAppDispatch();
  const imageData = useAppSelector((state) => state.gallary.data);
  const category = useAppSelector((state) => state.gallary.category);
  const filter = useAppSelector((state) => state.gallary.filter);

  const onChangeKeyword = (value: string) => {
    setKeyword(value);
  } 

  const onCategorySelect = (value: string) => {
    if(value !== category) {
      setKeyword('');
      dispatch(setCategory(value));
      dispatch(fetchImagesByKeyword(value));
      dispatch(setFilter(value));
    }
  }

  const onSearch = () => {
    if(keyword) {
      dispatch(fetchImagesByKeyword(keyword));
      dispatch(setFilter(keyword));
      dispatch(setCategory(''));
    }
  }

  const renderGridUI = () => {
    if(imageData?.length) {
      return (<Grid container spacing={1}>
        {imageData?.map((value : any, i: number) => (
          <Grid key={i} item xs={12} sm={6} md={4} lg={3}>
            <React.Suspense fallback={<Skeleton variant="rect" width={'100%'} height={200} />}>
              <div>
                <ImageUI 
                  alt={value.title}
                  src={value.uri}
                />
              </div>
            </React.Suspense>
          </Grid>
        ))}
      </Grid>)
    }
    return (<div className={classes.emptyUI}>
      <div>
        <ErrorOutlineIcon fontSize='large'/>
        <div>Please search using valid criteria.</div>
      </div>
    </div>)
  }

  return (
    <React.Fragment>
      <Box component='div' className={classes.root}>
        <div className={classes.inputContainer}>
          <InputBase
            className={classes.input}
            placeholder="Search images..."
            inputProps={{ 'aria-label': 'search images...' }}
            value={keyword}
            onChange={(e : any) => onChangeKeyword(e.target.value)}
          />
          <Button
            onClick={onSearch}
            style={{ backgroundColor: '#140b4f', color:'#fff', minWidth:'30px', textTransform: 'none', borderRadius: '0 2px 2px 0', marginRight:'-1px', height: '34px' }} 
            variant='contained' 
            color='inherit'
          >
            <SearchIcon />
          </Button>
        </div>
        <div style={{marginBottom: '20px', marginTop: '10px', textAlign:'center'}}>
          {categories.map((item, i) => (<Button 
              key={i}
              onClick={() => onCategorySelect(item.keyword)} 
              style={{ backgroundColor:category === item.keyword ? '#ADD8E6' : '#140b4f', color:'#fff',margin:'10px', minWidth:'90px', textTransform: 'none' }} 
              variant='contained' 
              color='inherit'
              >
                {item.name}
              </Button>))}
        </div>
        <div className={classes.gridHeader}>{filter && imageData.length ? `${filter} Pictures` : ''}</div>
        {renderGridUI()}
        </Box>
    </React.Fragment>
  );
}

export default Gallary;