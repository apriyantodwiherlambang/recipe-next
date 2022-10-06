/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import React from "react";
import Image from "next/dist/client/image";
import ProfileStyles from "../styles/pages/Profile.module.css";
import MainLayout from "../layouts/MainLayout";
import Link from "next/link";

export default function profile() {
  return (
    <>
      <div className={ProfileStyles.root}>
        <div className="section s0">
          <div className="container text-center s7">
            <div className="col-12 text-center s8">
              <img
                src="/assets/person.png"
                className="rounded-circle"
                width="100"
              />
            </div>
            <div className="s1">Mareta Lopeda</div>
          </div>
        </div>

        <div className="section s9">
          <div className="container s10">
            <div className="col-12 s2">
              <a href="edit-profile">
                <div className="row s3">
                  <div className="col-2 text-center">
                    <img src="/assets/user.svg" className="s11" />
                  </div>
                  <div className="col-8 center">Edit Profile</div>
                  <div className="col-2 center text-end">
                    <img src="/assets/chevron-left.svg" className="s4" />
                  </div>
                </div>
              </a>
              <a href="my-recipe">
                <div className="row s3">
                  <div className="col-2 text-center">
                    <img src="/assets/medal.svg" className="s11" />
                  </div>
                  <div className="col-8 center">My Recipe</div>
                  <div className="col-2 center text-end">
                    <img src="/assets/chevron-left.svg" className="s4" />
                  </div>
                </div>
              </a>
              <a href="saved-recipe">
                <div className="row s3">
                  <div className="col-2 text-center">
                    <img src="/assets/save.svg" className="s11" />
                  </div>
                  <div className="col-8 center">Saved Recipe</div>
                  <div className="col-2 center text-end">
                    <img src="/assets/chevron-left.svg" className="s4" />
                  </div>
                </div>
              </a>
              <a href="liked-recipe">
                <div className="row s3">
                  <div className="col-2 text-center">
                    <img src="/assets/like.svg" className="s11" />
                  </div>
                  <div className="col-8 center">Liked Recipe</div>
                  <div className="col-2 center text-end">
                    <img src="/assets/chevron-left.svg" className="s4" />
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="section fixed-bottom s13 text-center">
          <div className="container">
            <div className="col-12">
              <div className="row">
                <div className="col-5 center">
                  <a href="index">
                    <span className="s5">
                      <img src="/assets/home.svg" className="s6" /> Home
                    </span>
                  </a>
                </div>
                <div className="col center">
                  <a href="upload-recipe">
                    <img src="/assets/plus-square.svg" className="s12" />
                  </a>
                </div>
                <div className="col center">
                  <a href="chat">
                    <img src="/assets/message-circle.svg" className="s12" />
                  </a>
                </div>
                <div className="col center">
                  <a href="profile">
                    <img src="/assets/user.svg" className="s11" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
