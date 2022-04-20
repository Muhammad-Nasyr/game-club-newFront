import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { auth } from "../../redux/reducers/application";
import styles from "./signUpIn.module.css";

const SignIn = () => {
  const dispatch = useDispatch();

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeLogin = (e) => {
    setLogin(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = () => {
    dispatch(auth(login, password));
  };
  return (
    <div className={styles.main__div}>
      <div>
        <input
          className={styles.input1}
          type="text"
          placeholder="type login"
          value={login}
          onChange={handleChangeLogin}
        />
      </div>
      <div>
        <input
          className={styles.input1}
          type="password"
          placeholder="type password"
          value={password}
          onChange={handleChangePassword}
        />
      </div>
      <button className={styles.btn} onClick={handleSubmit}>
        LOGIN
      </button>
    </div>
  );
};

export default SignIn;
