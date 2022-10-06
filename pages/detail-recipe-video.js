/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";
import DetailRecipeVideoStye from "../styles/pages/DetailRecipeVideo.module.css";
function detailRecipeVideo() {
  <>
    <div className={DetailRecipeVideoStye.root}>
      <img src="assets/video.png" className="s1" />
      <div className="s2">
        <img src="assets/play2.svg" className="s3" />
      </div>

      <div className="col-12 s4">
        <a data-bs-toggle="modal" data-bs-target="#exampleModal">
          <img src="assets/zoom.svg" className="s14" />
        </a>
      </div>

      <div className="section">
        <div className="container">
          <div className="col-12 s5">
            Beef Steak with Curry Sauce - [Step 4] Cut the condiment and then
            mix it
          </div>
          <div className="s6">3 month ago</div>

          <div className="col-10 s15">
            <div className="s7">[Step 5]</div>
            <div className="s8">
              <img src="assets/video2.png" className="s9" />
            </div>
            <div className="s10">
              <span className="s12">3:09</span>
            </div>
            <div className="s16">
              <div className="s11">
                Beef Steak with Curry Sauce - [Step 5] Saute condiments together
                until turn brown
              </div>
              <div className="s13">HanaLohana - 3 month ago</div>
            </div>
          </div>
          <div className="col-10 s15">
            <div className="s7">[Step 5]</div>
            <div className="s8">
              <img src="assets/video2.png" className="s9" />
            </div>
            <div className="s10">
              <span className="s12">3:09</span>
            </div>
            <div className="s16">
              <div className="s11">
                Beef Steak with Curry Sauce - [Step 5] Saute condiments together
                until turn brown
              </div>
              <div className="s13">HanaLohana - 3 month ago</div>
            </div>
          </div>
          <div className="col-10 s15">
            <div className="s7">[Step 5]</div>
            <div className="s8">
              <img src="assets/video2.png" className="s9" />
            </div>
            <div className="s10">
              <span className="s12">3:09</span>
            </div>
            <div className="s16">
              <div className="s11">
                Beef Steak with Curry Sauce - [Step 5] Saute condiments together
                until turn brown
              </div>
              <div className="s13">HanaLohana - 3 month ago</div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-body s16">
              <iframe
                width="100%"
                height="200"
                src="https://www.youtube.com/embed/MYkxLsOivLc"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>;
}

export default detailRecipeVideo;
