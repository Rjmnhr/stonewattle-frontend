import React, { useEffect, useState } from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";
import { BlogContentArr } from "./blogs-content-array";

const BlogsPage = () => {
  const location = useLocation();
  const [selectedBlog, setSelectedBlog] = useState(null);
  useEffect(() => {
    // Get the blog name from the query parameter
    const blogName = location.search.replace("?blog=", "");

    if (blogName) {
      // Find the blog object in the array based on the blog name
      const decodedBlogName = decodeURIComponent(blogName);
      const blog = BlogContentArr.find((item) => item.main === decodedBlogName);

      if (blog) {
        setSelectedBlog(blog);
      }
    }
    //eslint-disable-next-line
  }, []);

  if (!selectedBlog) {
    // Handle case where the blog is not found
    return <div>Blog not found!</div>;
  }

  return (
    <>
      <Helmet>
        <title>Blogs | 2nd Storey</title>

        {/* Add other meta tags, link tags, etc. as needed */}
      </Helmet>
      <NavBar />

      <div className="position-relative "></div>
      <div class="container content-space-1 text-start " id="article">
        <div class="row mb-5">
          <div class="col-12 ">
            <h1 className="h1 ">{selectedBlog.main}</h1>
          </div>
        </div>
        <div className="d-lg-flex justify-content-between align-items-start flex-row-reverse">
          <div class="row mb-5 col-12 col-lg-6">
            <div class="col-md-10 col-lg-12 ">
              <img
                class="img"
                width={"100%"}
                src={selectedBlog.mainImg}
                alt="Description"
              />
            </div>
          </div>

          <div class="row mb-5 col-12 text-start col-lg-6">
            <div class="col-12">
              <div>
                <h4>{selectedBlog.subMain}</h4>
                <div class="row mb-5">
                  {selectedBlog?.extraContent ? selectedBlog?.extraContent : ""}
                </div>

                {selectedBlog.subContent.map((item) => {
                  return (
                    <section>
                      <h4>{item.subHeading}</h4>
                      {item.content.map((content) => (
                        <p>{content}</p>
                      ))}
                    </section>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-10 offset-lg-1 mb-3">
          <figure class="blockquote-lg text-center mb-5">
            <h5>{selectedBlog.footer}</h5>
          </figure>
        </div>

        <div class="col-12 d-flex justify-content-center mb-3">
          {selectedBlog.footerButton}
        </div>

        <div class="col-12 d-flex justify-content-center mt-8">
          <ul class="list-inline mb-0">
            <li class="list-inline-item">
              <a
                style={{ fontSize: "30px" }}
                class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                href="https://www.facebook.com/profile.php?id=61554994490511"
              >
                <i class="bi-facebook"></i>
              </a>
            </li>

            <li class="list-inline-item">
              <a
                style={{ fontSize: "30px" }}
                class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                href="https://www.linkedin.com/company/2ndstorey"
              >
                <i class="bi-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default BlogsPage;
