import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import axios from 'axios';
import './form.component.css';

const ADD_CONTESTANT_URL = 'https://iu81vnqiwb.execute-api.us-west-2.amazonaws.com/dev/giveaway/addcontestant';

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class SignIn extends Component {

  constructor(props) {
    super(props);

    this.inputs = {
      fristname: "",
      lastname: "",
      email: ""
    }
  };

  handleInputChange = (event) => {
    const {name, value} = event.target;

    this.inputs = { ...this.inputs, [name]: value };
  };

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(`form submitted with inputs ${inputs}.`);

    axios.post(ADD_CONTESTANT_URL, this.inputs)
      .then(response => {
        console.log("Contestant added!");
        console.log(response);
      })
      .catch(error => {
        console.log("Error adding contestant.");
        console.error(error);
      })
  };

  render(){
    const { classes } = this.props;

    return (
      <main className={classes.main}>
        <CssBaseline />
        <Paper className={classes.paper}>
          <img className='giveaway-image' src='./giveawayimage.jpg' alt="Giveaway product cover." />
          <br />
          <Typography component="h1" variant="h5" style={{color:'#5C5C5C', marginBottom:'7px'}}>
            Enter Giveaway!
          </Typography>
          <Typography component="h4" style={{color:'#5C5C5C'}}>
            11"x17" print of the art featured above.
          </Typography>
          <Typography component="h4" style={{color:'#5C5C5C'}}>
            3 winners. Ends @ 7pm PST Thursday, May 16th. 
          </Typography>
          <form className={classes.form} onSubmit={ this.handleSubmit }>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="email">Email Address</InputLabel>
              <Input id="email" name="email" autoComplete="email" autoFocus onChange={ this.handleInputChange } />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="firstname">First Name</InputLabel>
              <Input name="firstname" type="text" id="firstname" autoComplete="given-name" onChange={ this.handleInputChange } />
            </FormControl>
            <FormControl margin="normal" fullWidth>
              <InputLabel htmlFor="lastname">Last Name</InputLabel>
              <Input name="lastname" type="text" id="lastname" autoComplete="family-name" onChange={ this.handleInputChange } />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{background:"#7dc4fa"}}
            >
              Submit &hearts;
            </Button>
          </form>
        </Paper>
      </main>
    );
  };
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SignIn);