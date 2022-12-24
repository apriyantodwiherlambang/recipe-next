import React from "react";
import Link from "next/link";
import registerStyle from "../styles/pages/Register.module.css";

function register() {
  return (
    <main className={registerStyle.root}>
      <div>
        <p className={registerStyle.textRegister1}>Lets Get Started !</p>
        <p className={registerStyle.textRegister2}>
          Create new account to access all feautures
        </p>

        {/* Name Input */}
        <div className="mb-3">
          <div className={registerStyle.formName}>
            <input
              type="name"
              className="form-control form-control-lg"
              id="name"
              placeholder="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Email Input */}
        <div className="mb-3">
          <div className={registerStyle.formEmail}>
            <input
              type="email"
              className="form-control form-control-lg"
              id="email"
              placeholder="E-Mail"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Phone Input */}
        <div className="mb-3">
          <div className={registerStyle.formPhone}>
            <input
              type="phone"
              className="form-control form-control-lg"
              id="phone"
              placeholder="Phone Number"
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <div className={registerStyle.formPassword}>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              placeholder="Create New Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {/*New Password Input */}
        <div className="mb-3">
          <div className={registerStyle.formNewPassword}>
            <input
              type="confirm-password"
              className="form-control form-control-lg"
              id="confirm-password"
              placeholder="New Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className={"d-grid gap-2 col-4"}>
          <button className={registerStyle.buttonRegister} type="button">
            CREATE
          </button>
        </div>

        <p className={registerStyle.textBottom}>
          Already have account?
          <Link href="/login">
            <a className={registerStyle.textLink}> Log in Here</a>
          </Link>
        </p>
      </div>
    </main>
  );
}

export default register;
