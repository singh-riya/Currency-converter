import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Grid,
  CssBaseline,
  Paper,
  Typography,
  Avatar,
  TextField,
  Button,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import axios from "axios";

const styles = (theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 1, 4),
    display: "flex",
  },
});

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      mobile: "",
      email: "",
      password: "",
    };
  }

  handleValues = (prop) => (e) => {
    this.setState({ [prop]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, firstName, lastName, mobile } = this.state;
    const url = `http://localhost:5000/signup`;
    console.log({ email, password, lastName, firstName, url });

    const payload = {
      email,
      password,
      firstName,
      lastName,
      mobile,
    };

    axios
      .post(url, payload)
      .then((res) => {
        if (res.data) {
          this.props.history.push("/login");
        }
      })
      .catch((e) => console.log(e));
  };

  render() {
    const { classes } = this.props;
    return (
      <Grid container spacing={2} justify='center' alignItems='center'>
        <CssBaseline />
        <Paper className={classes.paper} elevation={4}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component='h1' variant='h5'>
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              autoComplete='fname'
              name='firstName'
              variant='outlined'
              required
              fullWidth
              id='firstName'
              label='First Name'
              autoFocus
              onChange={this.handleValues("firstName")}
            />

            <TextField
              variant='outlined'
              required
              fullWidth
              id='lastName'
              label='Last Name'
              name='lastName'
              autoComplete='lname'
              onChange={this.handleValues("lastName")}
            />

            <TextField
              variant='outlined'
              required
              fullWidth
              id='mobile'
              label='mobile number'
              name='mobile'
              autoComplete='mobile'
              onChange={this.handleValues("mobile")}
            />

            <TextField
              variant='outlined'
              required
              fullWidth
              id='email'
              label='Email Address'
              name='email'
              autoComplete='email'
              onChange={this.handleValues("email")}
            />

            <TextField
              variant='outlined'
              required
              fullWidth
              name='password'
              label='Password'
              type='password'
              id='password'
              autoComplete='current-password'
              onChange={this.handleValues("password")}
            />

            <p>
              By creating an account you agree to our{" "}
              <a href='#'>Terms & Privacy</a>.
            </p>

            <Button
              type='submit'
              fullWidth
              variant='contained'
              color='primary'
              className={classes.submit}
              onClick={this.handleSubmit}
            >
              Sign Up
            </Button>
          </form>
        </Paper>
      </Grid>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Signup);
