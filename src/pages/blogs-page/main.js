import React from "react";

import NavBar from "../../components/nav-bar/nav-bar";
import { BlogContentArr } from "./blogs-content-array";

const BlogsMainPage = () => {
  return (
    <>
      <NavBar />
      <div class="container p-0  mt-3">
        <div class="row justify-content-lg-between">
          <div class="col-lg-12 mb-10 mb-lg-0">
            <div class="d-grid gap-3 mb-7">
              {BlogContentArr.map((blog, index) => {
                return (
                  <div class="card p-3 m-2 text-start card-flush card-stretched-vertical">
                    <div class="row">
                      <div class="col-sm-5">
                        <img
                          class="card-img"
                          src={blog.imgPreview}
                          alt="Job compensation"
                        />
                      </div>

                      <div class="col-sm-7">
                        <div class="card-body">
                          <h4 class="card-title">
                            <strong>
                              <a
                                class="text-dark"
                                href={`/post?blog=${blog.main}`}
                              >
                                {blog.main}
                              </a>
                            </strong>
                          </h4>

                          <p class="card-text">{blog.previewText}</p>
                          <a href={`/post?blog=${blog.main}`}>
                            {" "}
                            <button className="btn  btn-primary">
                              Read More
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div id="stickyBlockEndPoint"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsMainPage;
