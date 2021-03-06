import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab'
import AddIcon from '@material-ui/icons/Add'
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import RemoveIcon from '@material-ui/icons/Remove';

import {
    LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  } from 'recharts';
import ProfileContainer from '../containers/ProfileContainer';


const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    maxWidth: 1000,
    backgroundColor: "#fff3e0",
  },
}));

const styles = {
  button: {
    backgroundColor: '#fb8c00',
    marginLeft: '2%'
  }
}


const GraphChart = (props) => {
  const classes = useStyles();

  const handlePlusClick = () => {
    props.addStockToPortfolio()
  }

  const handleMinusClick = (id) => {
    props.deleteStockFetch(id)
  }

  return (
    <div>
      <Paper classdate={classes.root}>
        <Typography variant="h3" component="h3">
          {props.stock.ticker}
          {props.alreadyExists() === undefined ? 
          <Fab style={styles.button} onClick={() => handlePlusClick()} aria-label="add" size="small">
              <AddIcon />
          </Fab>
          :
          <Fab style={styles.button} onClick={() => handleMinusClick(props.alreadyExists())} aria-label="add" size="small">
              <RemoveIcon />
          </Fab>
          }         


        </Typography>
        <Typography variant="h5" component="h3">
          {"$" + Number(props.stock.todayPrice)}
        </Typography>
        <LineChart width={1300} height={600} data={props.stockInfo}
        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey={props.stock.ticker} stroke="#8884d8" />
            
        </LineChart>
      </Paper>
    </div>
  );
}

export default GraphChart;