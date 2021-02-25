
import React from 'react';
import LoginForm from '../../components/LoginForm';
import bg from '../../../../assets/images/maxresdefault.jpg';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
const useStyles = makeStyles(() => ({

     bgLogin: {
          backgroundImage: "url(" + bg + ")",
          height: '100vh',
          backgroundRepeat: 'no-repeat',
          backgroundSize: "cover",

     },
     loginForm:{
          marginTop: '500px',
     }
}));

LoginPage.propTypes = {


}



export default function LoginPage() {

     const classes = useStyles();
     return (
          <div className={classes.bgLogin}>
               <LoginForm/>
          </div>
     );
}
