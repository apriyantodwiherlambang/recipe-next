import React from "react";
import forgotPasswordStyle from "../styles/pages/ForgotPassword.module.css";
import Image from "next/image";
import Link from "next/link";

function forgotPassword() {
  return (
    <div className={forgotPasswordStyle.root}>
      <div>
        <div className="d-flex justify-content-center">
          <div className={forgotPasswordStyle.vector}>
            <Image
              src="/images/loginVector.png"
              alt="login"
              width={140}
              height={0}
            />
          </div>
        </div>

        <p className={forgotPasswordStyle.text1}>Forgot Password !</p>
        <p className={forgotPasswordStyle.text2}>
          We just need your registered e-mail addres
        </p>
        <p className={forgotPasswordStyle.text3}>to send your password reset</p>

        {/* Email Input */}
        <div className="mb-3">
          <div className={forgotPasswordStyle.formforgotPassword}>
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
        <Link href="/reset-password">
          {/* Submit Button */}
          <div className={"d-grid gap-2 col-4"}>
            <button
              className={forgotPasswordStyle.buttonResetPassword}
              type="button"
            >
              Reset Password
            </button>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default forgotPassword;
