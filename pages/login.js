/* eslint-disable react-hooks/rules-of-hooks */
import React from "react";
import loginStyle from "../styles/pages/Login.module.css";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import * as Type from "../redux/auth/type";

function login() {
  const dispatch = useDispatch();
  const router = useRouter();

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [error, setError] = React.useState({
    isError: false,
    errorMsg: "",
  });

  const handleLogin = () => {
    setIsLoading(true);
    setTimeout(() => {
      axios
        .post("http://localhost:8080/auth/login", { email, password })
        .then((response) => {
          console.log(response.data)
          dispatch({
            type: Type.SET_AUTH,
            payload: {
              token: response?.data?.result?.auth_token,
              user: response?.data?.result?.user,
            },
          });

          router.replace("/");
        })
        .catch(({ response }) => {
          const message = response?.data?.message;
          setError({ isError: true, errorMsg: message });
          console.log(error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }, 1000);
  };

  return (
    <div className={loginStyle.root}>
      <div>
        <div className="d-flex justify-content-center">
          <div className={loginStyle.vector}>
            <Image
              src="/images/loginVector.png"
              alt="login"
              width={140}
              height={0}
            />
          </div>
        </div>

        <p className={loginStyle.welcomeText}>Welcome !</p>
        <p className={loginStyle.loginText}>Log in to your exiting account.</p>

        {/* Error Alert */}
        {error?.isError && (
          <div className={loginStyle.alert}>
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              <strong>Cannot Login</strong>
              <br />
              <span>
                {error?.errorMsg ?? "Something wrong with our server"}
              </span>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="alert"
                aria-label="Close"
                onClick={() =>
                  setError({
                    isError: false,
                    errorMsg: "",
                  })
                }
              ></button>
            </div>
          </div>
        )}

        {/* Email Input */}
        <div className="mb-3">
          <div className={loginStyle.formEmail}>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              placeholder="examplexxx@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <div className={loginStyle.formPassword}>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        <p className={loginStyle.textRight}>
          <Link href="/forgot-password">
            <a className={loginStyle.linkForgotPassword}>Forgot Password ?</a>
          </Link>
        </p>

        {/* Submit Button */}
        <div className={"d-grid gap-2 col-4"}>
          <button
            className={loginStyle.buttonLogin}
            type="button"
            onClick={handleLogin}
            disabled={isLoading}
          >
            {isLoading ? "Loading..." : "LOG IN"}
          </button>
        </div>

        <p className={loginStyle.textBottom}>
          Don’t have an account?
          <Link href="/register">
            <a className={loginStyle.linkRegister}> Sign Up</a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default login;
