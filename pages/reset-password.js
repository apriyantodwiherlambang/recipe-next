import React from "react";
import resetPasswordStyle from "../styles/pages/ResetPassword.module.css";
import Image from "next/image";

function resetPassword() {
  return (
    <div className={resetPasswordStyle.root}>
      <div>
        <div className="d-flex justify-content-center">
          <div className={resetPasswordStyle.vector}>
            <Image
              src="/images/loginVector.png"
              alt="login"
              width={140}
              height={0}
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <div className={resetPasswordStyle.formPassword}>
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
          <div className={resetPasswordStyle.formNewPassword}>
            <input
              type="password"
              className="form-control form-control-lg"
              id="password"
              placeholder="New Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className={"d-grid gap-2 col-4"}>
          <button
            className={resetPasswordStyle.buttonResetPassword}
            type="button"
          >
            Reset Password
          </button>
        </div>
      </div>
    </div>
  );
}

export default resetPassword;