import React from 'react';

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { NavLink } from 'react-router-dom';




const useStyles = makeStyles((theme) => ({
     paper: {
          background: 'white',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: theme.spacing(4),
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: 3,  
          boxShadow: '0 8px 10px 8px rgba(255, 105, 135, .3)',
     },
     avatar: {
          margin: theme.spacing(1),
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
     },
     form: {
          width: '100%', // Fix IE 11 issue.
          marginTop: theme.spacing(1),
     },
     submit: {
          margin: theme.spacing(3, 0, 2),
          background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
          borderRadius: 3,
          border: 0,
          color: 'white',
          height: 48,
          padding: '0 30px',
          boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
          '&:focus': {
               outline: 'none',
          }
     },
     input: {
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
               borderColor: "black"
          },
          "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
               borderColor: "#ff671f"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
               borderColor: "#ff671f"
          },
          "& .MuiOutlinedInput-input": {
               color: "black"
          },

          "&:hover .MuiOutlinedInput-input": {
               color: "black"
          },
          "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-input": {
               color: "black"
          },
          "& .MuiInputLabel-outlined": {
               color: "#ff671f"
          },
          "&:hover .MuiInputLabel-outlined": {
               color: "black "
          },
          "& .MuiInputLabel-outlined.Mui-focused": {
               color: "black"
          }
     },

}));

export default function LoginForm() {
     const classes = useStyles();

     return (

          <Container component="main" maxWidth="xs">
               <CssBaseline />
               <Grid item xs={12} sm={8} md={6} lg={4} xl={3} className={classes.paper}>

                    <Typography component="h1" variant="h5" style={{ textAlign: "center", color: '#ff671f', fontWeight: 'bold' }}>
                         CLAIM SYSTEM
                    </Typography>
                    <form className={classes.form} noValidate>
                         <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              id="username"
                              label="User Name"
                              name="username"
                              autoComplete="username"
                              autoFocus
                              className={classes.input}
                         />
                         <TextField
                              variant="outlined"
                              margin="normal"
                              required
                              fullWidth
                              name="password"
                              label="Password"
                              type="password"
                              id="password"
                              autoComplete="current-password"
                              className={classes.input}
                         />
                         <FormControlLabel
                              control={<Checkbox value="remember"
                                   style={{ color: '#ff671f' }} />}
                              label="Remember me"

                         />
                         <NavLink to="/dashboard" style={{ textDecoration: 'none' }}>
                              <Button
                                   type="submit"
                                   fullWidth
                                   variant="contained"

                                   className={classes.submit}
                              >
                                   LOGIN
                               </Button>
                         </NavLink>
                    </form>
               </Grid>

          </Container>

     );
}