import React from "react";
import styles from "./login.module.css";

const Login = () => {
  const div_styles = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    margin: "200px",
  };

  return (
    <div className={styles.center} style={div_styles}>
      <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
        <li className="nav-item ps-4" role="presentation">
          <a
            className="nav-link active border ps-4"
            id="tab-login"
            data-mdb-toggle="pill"
            href="#pills-login"
            role="tab"
            aria-controls="pills-login"
            aria-selected="true"
          >
            Login
          </a>
        </li>
        <li className="nav-item" role="presentation">
          <a
            className="nav-link border"
            id="tab-register"
            data-mdb-toggle="pill"
            href="#pills-register"
            role="tab"
            aria-controls="pills-register"
            aria-selected="false"
          >
            Register
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div
          className="tab-pane fade show active"
          id="pills-login"
          role="tabpanel"
          aria-labelledby="tab-login"
        >
          <form>
            <div className="form-floating mb-4">
              <input
                type="email"
                id="loginName"
                className="form-control"
                placeholder="Email"
              />
              <label className="form-label" htmlFor="loginName">
                Email
              </label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                id="loginPassword"
                className="form-control"
                placeholder="Password"
              />
              <label className="form-label" htmlFor="loginPassword">
                Password
              </label>
            </div>

            <div className="row mb-4">
              <div className="col-md-6 d-flex justify-content-center">
                <div className="form-check mb-3 mb-md-0">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="loginCheck"
                    checked
                  />
                  <label className="form-check-label" htmlFor="loginCheck">
                    {" "}
                    Remember me{" "}
                  </label>
                </div>
              </div>

              <div className="col-md-6 d-flex justify-content-center">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-4">
              Sign in
            </button>

            <div className="text-center">
              <p>
                Don't have an account? <a href="#!">Register</a>
              </p>
            </div>
          </form>
        </div>
        <div
          className="tab-pane fade"
          id="pills-register"
          role="tabpanel"
          aria-labelledby="tab-register"
        >
          <form>
            <div className="text-center mb-3">
              <p>Sign up with:</p>
              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-facebook-f"></i>
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-google"></i>
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-twitter"></i>
              </button>

              <button
                type="button"
                className="btn btn-secondary btn-floating mx-1"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>

            <p className="text-center">or:</p>

            <div className="form-floating mb-4">
              <input type="text" id="registerName" className="form-control" />
              <label className="form-label" htmlFor="registerName">
                Name
              </label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="text"
                id="registerUsername"
                className="form-control"
              />
              <label className="form-label" htmlFor="registerUsername">
                Username
              </label>
            </div>

            <div className="form-floating mb-4">
              <input type="email" id="registerEmail" className="form-control" />
              <label className="form-label" htmlFor="registerEmail">
                Email
              </label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                id="registerPassword"
                className="form-control"
              />
              <label className="form-label" htmlFor="registerPassword">
                Password
              </label>
            </div>

            <div className="form-floating mb-4">
              <input
                type="password"
                id="registerRepeatPassword"
                className="form-control"
              />
              <label className="form-label" htmlFor="registerRepeatPassword">
                Repeat password
              </label>
            </div>

            <div className="form-check d-flex justify-content-center mb-4">
              <input
                className="form-check-input me-2"
                type="checkbox"
                value=""
                id="registerCheck"
                checked
                aria-describedby="registerCheckHelpText"
              />
              <label className="form-check-label" htmlFor="registerCheck">
                I have read and agree to the terms
              </label>
            </div>

            <button type="submit" className="btn btn-primary btn-block mb-3">
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
