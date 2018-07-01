import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.primary.contrastText,
    backgroundColor: theme.palette.primary.main,
  },
});

function Root(props) {
  const { classes } = props;

  return (
    <Grid container spacing={8}>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="display1" gutterBottom color='secondary'>
            EOS Ram Whales
          </Typography>
          <Typography variant="body1" gutterBottom align="right" color='secondary'>
            (beta)
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <iframe
            src="http://nadejde-ubuntu-dev.northeurope.cloudapp.azure.com:3000/d-solo/GKZ7r4Dmz/postgres?panelId=10&orgId=1&tab=general"
            width="100%" height="200" frameBorder="0" scrolling="no" seamless="seamless"/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <iframe
            src="http://nadejde-ubuntu-dev.northeurope.cloudapp.azure.com:3000/d-solo/GKZ7r4Dmz/postgres?panelId=2&orgId=1&tab=general"
            width="100%" height="200" frameBorder="0" scrolling="no" seamless="seamless"/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <iframe
            src="http://nadejde-ubuntu-dev.northeurope.cloudapp.azure.com:3000/d-solo/GKZ7r4Dmz/postgres?panelId=8&orgId=1"
            width="100%" height="200" frameBorder="0" scrolling="no" seamless="seamless"/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <iframe
            src="http://nadejde-ubuntu-dev.northeurope.cloudapp.azure.com:3000/d-solo/GKZ7r4Dmz/postgres?panelId=11&orgId=1&tab=metrics"
            width="100%" height="400" frameBorder="0" scrolling="no" seamless="seamless"/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <iframe
            src="http://nadejde-ubuntu-dev.northeurope.cloudapp.azure.com:3000/d-solo/GKZ7r4Dmz/postgres?orgId=1&panelId=4"
            width="100%" height="400" frameBorder="0" scrolling="no" seamless="seamless"/>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={4}>
        <Paper className={classes.paper}>
          <iframe
            src="http://nadejde-ubuntu-dev.northeurope.cloudapp.azure.com:3000/d-solo/GKZ7r4Dmz/postgres?orgId=1&panelId=6"
            width="100%" height="400" frameBorder="0" scrolling="no" seamless="seamless"/>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Paper className={classes.paper}>
          <Typography variant="body1" gutterBottom color='secondary'>
            by Cloak & Nadejde
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  );
}

Root.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Root);