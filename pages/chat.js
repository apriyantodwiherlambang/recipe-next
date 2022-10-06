/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import ChatStyle from "../styles/pages/Chat.module.css";

function chat() {
  return (
    <>
      <div className={ChatStyle.root}>
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-2 text-center center">
                <img
                  src="/assets/chevron-left.svg"
                  className="rounded-circle svyellow"
                  width=""
                />
              </div>
              <div className="col-2 plef0">
                <img
                  src="/assets/img1.png"
                  className="rounded-circle"
                  width="50px"
                />
                <img src="/assets/ellipse.svg" className="rounded-circle s1" />
              </div>
              <div className="col-7 center s11">
                <div className="s2">Creator</div>
                <div className="s13">Hello Creator</div>
              </div>
            </div>
          </div>
        </div>

        <div className="section">
          <div className="container text-end">
            <div className="badge s3">
              <div className="row">
                <div className="col text-start s4 ">Permisi :D &nbsp;</div>
                <span className="s5 text-end">
                  <small className="s13">12:15</small> &nbsp;
                  <img src="/assets/check-all.svg" className="s6" />
                </span>
              </div>
            </div>
            <div className="badge s3">
              <div className="row">
                <div className="col text-start s4 ">
                  Untuk resep yang saya upload kenapa failed trs ya ? &nbsp;
                </div>
                <span className="s5 text-end">
                  <small className="s13">12:15</small> &nbsp;
                  <img src="/assets/check-all.svg" className="s6" />
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="section fixed-bottom">
          <div className="container s10">
            <div className="row">
              <div className="col-8">
                <div className="col-12">
                  <label className="s8" htmlFor="files">
                    <img src="/assets/attachment.svg" />
                  </label>
                  <input
                    id="files"
                    type="file"
                    accept="image/png, image/gif, image/jpeg"
                    style={{
                      display: "none",
                      height: 0,
                      padding: "0 !important",
                    }}
                  />
                  <input
                    type="text"
                    className="form-control s9"
                    placeholder="Tuliskan pesan anda...."
                    name="xxxx"
                    id="xxxxa"
                  />
                </div>
              </div>
              <div className="col-2 s12">
                <span className="badge rounded-circle s7">
                  <img src="/assets/send.svg" className="svyellow" />
                </span>
              </div>
              <div className="col-2">
                <span className="badge rounded-circle s7">
                  <img src="/assets/sound.svg" className="svyellow" />
                </span>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default chat;
