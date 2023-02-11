import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState("");
  const [emailErrored, setEmailErrored] = useState(false);

  const [password, setPassword] = useState("");
  const [passwordErrored, setPasswordErrored] = useState(false);

  const handleLogin = () => {
    if (!email) {
      setEmailErrored(true);
    } else {
      setEmailErrored(false);
    }
    if (!password) {
      setPasswordErrored(true);
    } else {
      setPasswordErrored(false);
    }
  };

  return (
    <div className="flex justify-center items-center flex-col h-screen gap-8">
      <h1 className="text-6xl">Yoke App</h1>
      <div className="flex flex-col gap-2">
        <TextField
          label="Email"
          type={"email"}
          required
          className="w-80"
          helperText={emailErrored && "please enter valid email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailErrored}
        />
        <TextField
          label="Password"
          type={"password"}
          required
          className="w-80"
          helperText={passwordErrored && "password may not be empty"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordErrored}
        />
        <Link to={"/signup"}>
          <MuiLink>Sign Up</MuiLink>
        </Link>
      </div>
      <Button variant="contained" className="w-80" onClick={handleLogin}>
        <span className="p-1">Login </span>
      </Button>
    </div>
  );
};

export { LoginForm };
