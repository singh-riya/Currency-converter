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
  Link,
} from "@material-ui/core";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import "../App.css";
import axios from "axios";
// import Google from "./Google";

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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      errMsg: "",
    };
  }

  handleValues = (prop) => (e) => {
    this.setState({ [prop]: e.target.value, errMsg: "" });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    const url = `http://localhost:5000${this.props.match.path}?email=${email}&password=${password}`;
    console.log({ email, password, url });
    axios
      .get(url)
      .then((res) => {
        if (res) {
          this.props.history.push("/dashboard");
        } else {
          this.setState({
            errMsg: "Please enter correct email and password!",
          });
        }
      })
      .catch((e) => {
        console.log(e);
        this.setState({
          errMsg: "Please enter correct email and password!",
        });
      });
  };

  redirectToSignUp = () => {
    this.props.history.push("/signup");
  };

  render() {
    const { classes } = this.props;
    const { email, password, errMsg } = this.state;

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
          <div>
            <form className={classes.form} noValidate>
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                id='email'
                label='Email Address'
                name='email'
                autoComplete='email'
                autoFocus
                value={email}
                onChange={this.handleValues("email")}
              />
              <TextField
                variant='outlined'
                margin='normal'
                required
                fullWidth
                name='password'
                label='Password'
                type='password'
                id='password'
                autoComplete='current-password'
                value={password}
                onChange={this.handleValues("password")}
              />
              {errMsg !== "" && <p style={{ color: "red" }}>{errMsg}</p>}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  maxWidth: "500px",
                }}
              >
                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                  onClick={this.handleSubmit}
                >
                  login
                </Button>

                <Button
                  type='submit'
                  fullWidth
                  variant='contained'
                  color='primary'
                  className={classes.submit}
                  onClick={this.redirectToSignUp}
                >
                  Signup
                </Button>
              </div>
              <Link onClick={this.redirectToSignUp}>
                New User? Click here to Register!
              </Link>
              {/* <Google /> */}
            </form>
          </div>
        </Paper>
      </Grid>
    );
  }
}
export default withStyles(styles, { withTheme: true })(Login);
