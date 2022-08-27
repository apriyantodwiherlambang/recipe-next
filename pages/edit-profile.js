import React from "react";
import Image from "next/image";
import Link from "next/link"
import EditProfile from "../styles/pages/EditProfile.module.css";

function editProfile() {
  return (
    <div className={EditProfile.root}>
      <div>
        <Link href="/profile">
          <div className={EditProfile.back}>
            <Image
              src="/images/back-icon.png"
              alt="login"
              width={50}
              height={50}
            />
          </div>
        </Link>

        <p className={EditProfile.text1}>Edit Profile</p>

        <div className="col-md-3"></div>
        <p className={EditProfile.text2}>Change Profile Picture</p>

        <p className={EditProfile.line}></p>

        <p className={EditProfile.text3}>Change Password</p>

        <p className={EditProfile.line2}></p>

        <div className={EditProfile.AllButton}>
          <div className="mb-3">
            <div className={EditProfile.button}>
              <button type="button" className={EditProfile.button1}>
                Photo Library
              </button>
            </div>
          </div>
          <div className="mb-3">
            <button type="button" className={EditProfile.button2}>
              Take Photo
            </button>
          </div>

          <div className="mb-3">
            <button type="button" className={EditProfile.button2}>
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default editProfile;
