import React from "react";
import { useState } from "react";
import { authServices } from "../../services/auth"

const RegisterForm = ({ styles }) => {

  const [registerData, setRegisterData] = useState({
    email: "",
    username: '',
    password: ''
  })

  const { registration } = authServices()

  const handleChangeRegisterData = (e) => {
    setRegisterData({ ...registerData, [e.target.name]: e.target.value })
  }
  console.log(registerData)

  const handleSubmit = (e) => {
    e.preventDefault()
    registration(registerData)
      .then((data) => {
        setRegisterData({
          email: "",
          username: '',
          password: ''
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit  }>
      <h2 className={styles.title}>Register</h2>
      <div className={styles.control}>
        <label htmlFor="email" className={styles.label}>
          Email address
        </label>
        <input
          type="email"
          id={"email"}
          placeholder="email"
          name="email"
          className={styles.input}
          onChange={handleChangeRegisterData}
          value={registerData.email}
        />
      </div>

      <div className={styles.control}>
        <label htmlFor="userame" className={styles.label}>
          username
        </label>
        <input
          type="text"
          id={"username"}
          placeholder="User name"
          name="username"
          className={styles.input}
          onChange={handleChangeRegisterData}
          value={registerData.username}
        />
      </div>

      <div className={styles.control}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <input
          type="password"
          id={"password"}
          placeholder="pass"
          name="password"
          className={styles.input}
          onChange={handleChangeRegisterData}
          value={registerData.password}
        />
      </div>
      <input type="submit" value="Register" className={styles.submit} />
    </form>
  );
};

export default RegisterForm;
