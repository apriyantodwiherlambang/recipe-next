import React from "react";
import Image from "next/dist/client/image";
import ProfileStyles from "../styles/pages/Profile.module.css";
import MainLayout from "../layouts/MainLayout";
import Link from "next/link";

export default function profile() {
  return (
    <div className={ProfileStyles.root}>
      <MainLayout>
        <div className={ProfileStyles.bg}>
          <div className={ProfileStyles.profile}>
            <Image
              src="/images/Profile.jpg"
              alt="profile"
              width={150}
              height={150}
            />
          </div>
          <p className={ProfileStyles.textProfile}>Apriyanto Dwi Herlambang</p>
          <div className={ProfileStyles.bg2}>
            <row>
              <col md-3></col>
              <Link href="/edit-profile">
                <div className={ProfileStyles.editProfile}>
                  Edit Profile
                  <div className={ProfileStyles.shape}>
                    <Image
                      src="/images/Shape.png"
                      alt="profile"
                      width={7}
                      height={10}
                    />
                  </div>
                </div>
              </Link>

              {/* <Link href="/my-recipe"> */}
              <div className={ProfileStyles.editProfile}>My Recipe</div>
              <div className={ProfileStyles.shape}>
                <Image
                  src="/images/Shape.png"
                  alt="profile"
                  width={7}
                  height={10}
                />
              </div>
              {/* </Link> */}
              <div className={ProfileStyles.editProfile}>Saved Recipe</div>
              <div className={ProfileStyles.shape}>
                <Image
                  src="/images/Shape.png"
                  alt="profile"
                  width={7}
                  height={10}
                />
              </div>
              <div className={ProfileStyles.editProfile}>Liked Recipe</div>
              <div className={ProfileStyles.shape}>
                <Image
                  src="/images/Shape.png"
                  alt="profile"
                  width={7}
                  height={10}
                />
              </div>
            </row>
          </div>
        </div>
      </MainLayout>
    </div>
  );
}
