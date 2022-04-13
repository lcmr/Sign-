import { useState } from "react";

import { fakeAuthProvider } from "./FakeAuth";
import { auth } from "./Auth";

const AuthProvider = ({ children, AuthContext }) => {
    let [user, setUser] = useState(null);
  
    let signin = (newUser, callback) => {

      return auth.signin(newUser,() => {
        setUser(newUser);
        callback();
      });
    };
  
    let signout = (callback) => {
      return fakeAuthProvider.signout(() => {
        setUser(null);
        callback();
      });
    };
  
    let value = { user, signin, signout };
  
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
  }

export default AuthProvider