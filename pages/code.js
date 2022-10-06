/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import CodeStyle from "../styles/pages/Code.module.css";

function code() {
  return (
    <>
      <div className={CodeStyle.root}>
        <div className="section">
          <div className="container text-center">
            <div className={CodeStyle.fgrey2}>Enter your code</div>
            <div className={CodeStyle.mbot50}>
              <div className="row text-center">
                <div className="col-2">
                  <img src="/assets/Ellipse 49.png" />
                </div>
                <div className="col-2">
                  <img
                    src="/assets/Ellipse 49.png"
                    width="70px"
                    height="70px"
                  />
                </div>
                <div className="col-2">
                  <img src="/assets/ellipse.svg" className="w18 svgrey1" />
                </div>
                <div className="col-2">
                  <img src="/assets/ellipse.svg" className="w18 svgrey1" />
                </div>
                <div className="col-2">
                  <img src="/assets/ellipse.svg" className="w18 svgrey1" />
                </div>
                <div className="col-2">
                  <img src="/assets/ellipse.svg" className="w18 svgrey1" />
                </div>
              </div>
            </div>

            <div className={CodeStyle.f2}>
              Resend your code :
            </div>

            <div className={CodeStyle.fyellow}>
              <b>06:45</b>
            </div>

            <div className={CodeStyle.f28}>
              <div className="row">
                <div className="col-4">1</div>
                <div className="col-4">2</div>
                <div className="col-4">3</div>
              </div>
            </div>

            <div className={CodeStyle.f28}>
              <div className="row">
                <div className="col-4">4</div>
                <div className="col-4">5</div>
                <div className="col-4">6</div>
              </div>
            </div>

            <div className={CodeStyle.f28}>
              <div className="row">
                <div className="col-4">7</div>
                <div className="col-4">8</div>
                <div className="col-4">9</div>
              </div>
            </div>

            <div className={CodeStyle.f28}>
              <div className="row">
                <div className="col-4"></div>
                <div className="col-4">0</div>
                <div className="col-4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default code;
