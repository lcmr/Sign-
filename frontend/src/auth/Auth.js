import { alertActions } from '../actions';
const axios = require('axios').default;
const API_URL = process.env.REACT_APP_API_URL

/**
 * This represents some generic auth provider API, like Firebase.
 */
 const auth = {
    isAuthenticated: false,
    async signin(user,callback) {
        // auth.isAuthenticated = true;
        let data = await axios.post(API_URL+'api/v1/users/login',user)
        .then((response) =>{
            if(response.data.token){
                auth.isAuthenticated = true
            }
            
        })
        .catch((error) => {
            auth.isAuthenticated = false;
            if(error.response.status){
                console.log(error.response.data.message)
                // dispatch(alertActions.error(error.response.data.message));
            }
        })
        console.log(auth.isAuthenticated)
        if(auth.isAuthenticated){
            callback()
        }else{

        }
    },
    signout(callback) {
      auth.isAuthenticated = false;
      setTimeout(callback, 100);
    },
  };
  
  export { auth };
  