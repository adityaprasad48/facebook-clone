import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase";
import useStateValue from "./AppState";


const Login = () => {
  const [{user}, dispatch] = useStateValue()

  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: "SET_USER",
          user: result.user
        });
      })
      .catch((err) => alert(err.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/150px-Facebook_f_logo_%282019%29.svg.png"
          alt=""
        />
        {/* <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/294px-Facebook_Logo_%282019%29.svg.png" alt=""/> */}
      </div>
      <Button type="submit" onClick={signIn}>
        SignIn
      </Button>
    </div>
  );
};

export default Login;
