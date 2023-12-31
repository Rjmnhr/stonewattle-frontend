import React from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import blogImage1 from "../../images/2ndstorey-blog-1.jpg";

import {
  BankOutlined,
  DollarOutlined,
  FieldTimeOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";

const BlogsPage = () => {
  const navigate = useNavigate();
  const infoArr = [
    <li className="text-center">
      <div className="d-flex d-lg-block ">
        <HomeOutlined className="mb-2 " style={{ fontSize: "24px" }} />
        <p className="mx-2 my-0">
          <strong>Dwelling Type</strong> :
        </p>{" "}
        <label> House</label>
      </div>
    </li>,
    <li className="text-center">
      <div className="d-flex d-lg-block ">
        <BankOutlined className="mb-2 " style={{ fontSize: "24px" }} />
        <p className="mx-2 my-0">
          <strong>Min Bedrooms</strong> :
        </p>{" "}
        <label> 3</label>
      </div>
    </li>,
    <li className="text-center">
      <div className="d-flex d-lg-block ">
        <FieldTimeOutlined className="mb-2 " style={{ fontSize: "24px" }} />
        <p className="mx-2 my-0">
          <strong>State</strong> :
        </p>{" "}
        <label>All States</label>
      </div>
    </li>,
    <li className="text-center">
      <div className="d-flex d-lg-block ">
        <DollarOutlined className="mb-2 " style={{ fontSize: "24px" }} />
        <p className="mx-2 my-0">
          <strong>Budget</strong> :
        </p>{" "}
        <label> $500,000</label>
      </div>
    </li>,
  ];
  return (
    <>
    <Helmet>
        <title>Blogs | 2nd Storey</title>

        {/* Add other meta tags, link tags, etc. as needed */}
      </Helmet>
      <NavBar />

      <div className="position-relative "></div>
      <div
        class="container content-space-2 content-space-lg-3 text-start "
        id="article"
      >
        <div class="row mb-5">
          <div class="col-12 ">
            <figure class="blockquote-lg text-center mb-3">
              <h2 className="h1">
                Are you looking to invest? Let’s say you have $500,000 and open
                to investing in any state.
              </h2>
            </figure>
          </div>
        </div>
        <div class="row mb-5">
          <div class="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
            <img class="img-fluid" src={blogImage1} alt="Description" />
          </div>
        </div>

        <div class="row mb-5">
          <div class="col-12  ">
            <div className="d-lg-flex justify-content-around">
              {infoArr.map((item) => {
                return (
                  <div className="mb-3 mb-lg-0 border p-3 col-12 col-lg-2">
                    <div className="text-dark" style={{ fontSize: "16px" }}>
                      {item}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div class="col-12 mb-5 ">
          <figure class=" text-center mb-3">
            <h4>The following 3 suburbs will be great for you:</h4>
          </figure>
        </div>
        <div class="row  text-center mb-3">
          <div class="col-12 ">
            <p style={{fontSize:"18px"}}>Wollert, VIC (Postcode: 3750)</p>

            <p style={{fontSize:"18px"}}>Baldivis, WA (Postcode: 6171)</p>

            <p style={{fontSize:"18px"}}>Clyde, VIC (Postcode: 3978)</p>
            <br />
            <p style={{fontSize:"18px"}}>
              In summary, Wollert, Baldivis, and Clyde epitomize the investor's
              oasis, where the alignment of high rental yields, low supply, and
              rapid population growth creates an optimal environment for
              investors seeking to flourish in the real estate market.
            </p>
          </div>
        </div>

        <div class="col-12 col-lg-10 offset-lg-1 mb-3">
          <figure class="blockquote-lg text-center mb-5">
            <h5>
              To try out more suburbs for yourself, try the free Suburb Selector
              tool. Simply register and get suburbs selected in less than 5-10
              minutes.
            </h5>
          </figure>
        </div>

        <div class="col-12 d-flex justify-content-center mb-3">
          <button
            onClick={() => navigate("/application")}
            className="btn btn-lg btn-primary"
          >
            Try Now!
          </button>
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
            {/* <li class="list-inline-item">
                      <a
                        class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                        href="/#"
                      >
                        <i class="bi-twitter"></i>
                      </a>
                    </li> */}
            {/* <li class="list-inline-item">
                      <a
                        class="btn btn-ghost-secondary btn-icon btn-sm rounded-circle"
                        href="/#"
                      >
                        <i class="bi-instagram"></i>
                      </a>
                    </li> */}
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

/* <div class="container content-space-1 content-space-lg-3">
<div class="row justify-content-lg-between">
  <div class="col-lg-8 mb-10 mb-lg-0">
    <div class="d-grid gap-7 mb-7">
      <div class="card card-borderless card-flush card-stretched-vertical">
        <div class="row">
          <div class="col-sm-5">
            <img
              class="card-img"
              src="./assets/img/400x500/img7.jpg"
              alt="Description"
            />
          </div>

          <div class="col-sm-7">
            <div class="card-body">
              <div class="mb-2">
                <a class="link" href="/#">
                  Business
                </a>
              </div>

              <h4 class="card-title">
                <a class="text-dark" href="./blog-article.html">
                  Unify becomes an official Instagram Marketing
                  Partner
                </a>
              </h4>

              <p class="card-text">
                Great news we're eager to share.
              </p>

              <div class="card-footer">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <a
                      class="avatar avatar-circle"
                      href="./blog-author-profile.html"
                    >
                      <img
                        class="avatar-img"
                        src="./assets/img/160x160/img3.jpg"
                        alt="Description"
                      />
                    </a>
                  </div>

                  <div class="flex-grow-1 ms-3">
                    <a
                      class="link link-dark fw-medium"
                      href="./blog-author-profile.html"
                    >
                      Aaron Larsson
                    </a>
                    <p class="card-text fs-5">Feb 15, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-borderless card-flush card-stretched-vertical">
        <div class="row">
          <div class="col-sm-5">
            <img
              class="card-img"
              src="./assets/img/400x500/img5.jpg"
              alt="Description"
            />
          </div>

          <div class="col-sm-7">
            <div class="card-body">
              <div class="mb-2">
                <a class="link" href="/#">
                  Announcements
                </a>
              </div>

              <h4 class="card-title">
                <a class="text-dark" href="./blog-article.html">
                  Announcing a free plan for small teams
                </a>
              </h4>

              <p class="card-text">
                At Wake, our mission has always been focused on
                bringing openness.
              </p>

              <div class="card-footer">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <a
                      class="avatar avatar-circle"
                      href="./blog-author-profile.html"
                    >
                      <img
                        class="avatar-img"
                        src="./assets/img/160x160/img9.jpg"
                        alt="Description"
                      />
                    </a>
                  </div>

                  <div class="flex-grow-1 ms-3">
                    <a
                      class="link link-dark fw-medium"
                      href="./blog-author-profile.html"
                    >
                      Hanna Wolfe
                    </a>
                    <p class="card-text fs-5">Feb 4, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-borderless card-flush card-stretched-vertical">
        <div class="row">
          <div class="col-sm-5">
            <img
              class="card-img"
              src="./assets/img/400x500/img2.jpg"
              alt="Description"
            />
          </div>

          <div class="col-sm-7">
            <div class="card-body">
              <div class="mb-2">
                <a class="link" href="/#">
                  Business
                </a>
              </div>

              <h4 class="card-title">
                <a class="text-dark" href="./blog-article.html">
                  Enjoy $1,000 worth of perks with Unify for Business
                </a>
              </h4>

              <p class="card-text">
                There are many reasons people choose to join Unify for
                Business.
              </p>

              <div class="card-footer">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <a
                      class="avatar avatar-circle"
                      href="./blog-author-profile.html"
                    >
                      <img
                        class="avatar-img"
                        src="./assets/img/160x160/img8.jpg"
                        alt="Description"
                      />
                    </a>
                  </div>

                  <div class="flex-grow-1 ms-3">
                    <a
                      class="link link-dark fw-medium"
                      href="./blog-author-profile.html"
                    >
                      Andrea Gard
                    </a>
                    <p class="card-text fs-5">Jan 27, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-borderless card-flush card-stretched-vertical">
        <div class="row">
          <div class="col-sm-5">
            <img
              class="card-img"
              src="./assets/img/400x500/img4.jpg"
              alt="Description"
            />
          </div>

          <div class="col-sm-7">
            <div class="card-body">
              <div class="mb-2">
                <a class="link" href="/#">
                  Business
                </a>
              </div>

              <h4 class="card-title">
                <a class="text-dark" href="./blog-article.html">
                  What CFR (Conversations, Feedback, Recognition)
                  really is about
                </a>
              </h4>

              <p class="card-text">
                For a lot of people these days, Measure What Matters.
              </p>

              <div class="card-footer">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <a
                      class="avatar avatar-circle"
                      href="./blog-author-profile.html"
                    >
                      <img
                        class="avatar-img"
                        src="./assets/img/160x160/img3.jpg"
                        alt="Description"
                      />
                    </a>
                  </div>

                  <div class="flex-grow-1 ms-3">
                    <a
                      class="link link-dark fw-medium"
                      href="./blog-author-profile.html"
                    >
                      Aaron Larsson
                    </a>
                    <p class="card-text fs-5">Jan 21, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-borderless card-flush card-stretched-vertical">
        <div class="row">
          <div class="col-sm-5">
            <img
              class="card-img"
              src="./assets/img/400x500/img6.jpg"
              alt="Description"
            />
          </div>

          <div class="col-sm-7">
            <div class="card-body">
              <div class="mb-2">
                <a class="link" href="/#">
                  Community
                </a>
              </div>

              <h4 class="card-title">
                <a class="text-dark" href="./blog-article.html">
                  Do millennials care about saving?
                </a>
              </h4>

              <p class="card-text">
                Over the last few years, numerous studies have
                appeared to confirm a troubling pattern – millennials
                don't save, they don't care about their financial
                futures.
              </p>

              <div class="card-footer">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <a
                      class="avatar avatar-circle"
                      href="./blog-author-profile.html"
                    >
                      <img
                        class="avatar-img"
                        src="./assets/img/160x160/img9.jpg"
                        alt="Description"
                      />
                    </a>
                  </div>

                  <div class="flex-grow-1 ms-3">
                    <a
                      class="link link-dark fw-medium"
                      href="./blog-author-profile.html"
                    >
                      Hanna Wolfe
                    </a>
                    <p class="card-text fs-5">Jan 15, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        class="card card-transition align-items-start flex-wrap flex-row bg-img-start"
        href="./blog-article.html"
        style={{
          backgroundImage:
            " url(./assets/img/900x450/img1.jpg); min-height: 25rem",
        }}
      >
        <div class="card-header w-100">
          <div class="d-flex align-items-center">
            <div class="flex-shrink-0">
              <span class="avatar avatar-sm avatar-circle">
                <img
                  class="avatar-img"
                  src="./assets/img/160x160/img3.jpg"
                  alt="Description"
                />
              </span>
            </div>

            <div class="flex-grow-1 ms-3">
              <h4 class="card-title text-white mb-0">
                Aaron Larsson
              </h4>
              <p class="card-text text-white-70 small">
                Jan 09, 2020
              </p>
            </div>
          </div>
        </div>

        <div class="card-footer mt-auto">
          <h3 class="text-white">
            Facebook is creating a news section in Watch to feature
            breaking news
          </h3>
          <p class="text-white-70">
            Facebook launched the Watch platform in August
          </p>
        </div>
      </a>

      <div class="card card-borderless card-flush card-stretched-vertical">
        <div class="row">
          <div class="col-sm-5">
            <img
              class="card-img"
              src="./assets/img/400x500/img3.jpg"
              alt="Description"
            />
          </div>

          <div class="col-sm-7">
            <div class="card-body">
              <div class="mb-2">
                <a class="link" href="/#">
                  Business
                </a>
              </div>

              <h4 class="card-title">
                <a class="text-dark" href="./blog-article.html">
                  Unify accounts - let's work together
                </a>
              </h4>

              <p class="card-text">
                Are you an accountant? Are you a company formation
                advisor? Would you like to partner with one of the
                world's most popular and fastest-growing Fintech
                startups?
              </p>

              <div class="card-footer">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <a
                      class="avatar avatar-circle"
                      href="./blog-author-profile.html"
                    >
                      <img
                        class="avatar-img"
                        src="./assets/img/160x160/img9.jpg"
                        alt="Description"
                      />
                    </a>
                  </div>

                  <div class="flex-grow-1 ms-3">
                    <a
                      class="link link-dark fw-medium"
                      href="./blog-author-profile.html"
                    >
                      Hanna Wolfe
                    </a>
                    <p class="card-text fs-5">Jan 06, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="card card-borderless card-flush card-stretched-vertical">
        <div class="row">
          <div class="col-sm-5">
            <img
              class="card-img"
              src="./assets/img/400x500/img1.jpg"
              alt="Description"
            />
          </div>

          <div class="col-sm-7">
            <div class="card-body">
              <div class="mb-2">
                <a class="link" href="/#">
                  Community
                </a>
              </div>

              <h4 class="card-title">
                <a class="text-dark" href="./blog-article.html">
                  Let's revolutionise global payments. Together
                </a>
              </h4>

              <p class="card-text">
                Unify is changing the way money moves around the
                world.
              </p>

              <div class="card-footer">
                <div class="d-flex">
                  <div class="flex-shrink-0">
                    <a
                      class="avatar avatar-circle"
                      href="./blog-author-profile.html"
                    >
                      <img
                        class="avatar-img"
                        src="./assets/img/160x160/img8.jpg"
                        alt="Description"
                      />
                    </a>
                  </div>

                  <div class="flex-grow-1 ms-3">
                    <a
                      class="link link-dark fw-medium"
                      href="./blog-author-profile.html"
                    >
                      Andrea Gard
                    </a>
                    <p class="card-text fs-5">Jan 06, 2021</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="stickyBlockEndPoint"></div>

    <nav aria-label="Page navigation">
      <ul class="pagination justify-content-center justify-content-sm-start mb-0">
        <li class="page-item disabled">
          <a class="page-link" href="/#" tabindex="-1">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        <li class="page-item active">
          <a class="page-link" href="/#">
            1
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/#">
            2
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/#">
            3
          </a>
        </li>
        <li class="page-item">
          <a class="page-link" href="/#">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>

  <div class="col-lg-3">
    <div class="mb-7">
      <div class="mb-3">
        <h4>Newsletter</h4>
      </div>

      <form>
        <div class="mb-2">
          <input
            type="email"
            class="form-control"
            placeholder="Enter email"
            aria-label="Enter email"
          />
        </div>
        <div class="d-grid">
          <button type="button" class="btn btn-primary">
            Subscribe
          </button>
        </div>
      </form>

      <p class="form-text">
        Get special offers on the latest developments from Unify.
      </p>
    </div>

    <div class="mb-7">
      <div class="mb-3">
        <h4>Productivity</h4>
      </div>

      <ul class="list-group list-group-lg">
        <li class="list-group-item">
          <a href="/#">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="text-inherit mb-1">
                  Here's how to dodge distractions
                </h6>
                <p class="text-body fs-5 mb-0">Feb 08, 2020</p>
              </div>

              <div class="col-auto">
                <i class="bi-chevron-right"></i>
              </div>
            </div>
          </a>
        </li>

        <li class="list-group-item">
          <a href="/#">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="text-inherit mb-1">
                  Ideas to stay productive
                </h6>
                <p class="text-body fs-5 mb-0">Feb 09, 2020</p>
              </div>

              <div class="col-auto">
                <i class="bi-chevron-right"></i>
              </div>
            </div>
          </a>
        </li>

        <li class="list-group-item">
          <a href="/#">
            <div class="row align-items-center">
              <div class="col">
                <h6 class="text-inherit mb-1">
                  Classic design principles
                </h6>
                <p class="text-body fs-5 mb-0">Feb 10, 2020</p>
              </div>

              <div class="col-auto">
                <i class="bi-chevron-right"></i>
              </div>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <div id="stickyBlockStartPoint"></div>

    <div
      class="js-sticky-block"
      data-hs-sticky-block-options='{
       "parentSelector": "#stickyBlockStartPoint",
       "targetSelector": "#header",
       "breakpoint": "md",
       "startPoint": "#stickyBlockStartPoint",
       "endPoint": "#stickyBlockEndPoint",
       "stickyOffsetTop": 80
     }'
    >
      <div class="mb-7">
        <div class="mb-3">
          <h4>Unify culture</h4>
        </div>

        <div class="d-grid gap-3">
          <a class="d-block" href="./blog-article.html">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div class="avatar avatar-lg">
                  <img
                    class="avatar-img"
                    src="./assets/img/320x320/img1.jpg"
                    alt="Description"
                  />
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h6 class="text-inherit mb-0">
                  Announcing a free plan for small teams
                </h6>
              </div>
            </div>
          </a>

          <a class="d-block" href="./blog-article.html">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div class="avatar avatar-lg">
                  <img
                    class="avatar-img"
                    src="./assets/img/320x320/img2.jpg"
                    alt="Description"
                  />
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h6 class="text-inherit mb-0">
                  Mapping the first family tree for Unify office
                </h6>
              </div>
            </div>
          </a>

          <a class="d-block" href="./blog-article.html">
            <div class="d-flex align-items-center">
              <div class="flex-shrink-0">
                <div class="avatar avatar-lg">
                  <img
                    class="avatar-img"
                    src="./assets/img/320x320/img3.jpg"
                    alt="Description"
                  />
                </div>
              </div>
              <div class="flex-grow-1 ms-3">
                <h6 class="text-inherit mb-0">
                  Felling eyeing first major Classic win in 2018
                </h6>
              </div>
            </div>
          </a>
        </div>
      </div>

      <div class="mb-7">
        <div class="mb-3">
          <h4>Tags</h4>
        </div>

        <a class="btn btn-soft-secondary btn-sm mb-1" href="/#">
          Business
        </a>
        <a class="btn btn-soft-secondary btn-sm mb-1" href="/#">
          Adventure
        </a>
        <a class="btn btn-soft-secondary btn-sm mb-1" href="/#">
          Community
        </a>
        <a class="btn btn-soft-secondary btn-sm mb-1" href="/#">
          Announcements
        </a>
        <a class="btn btn-soft-secondary btn-sm mb-1" href="/#">
          Tutorials
        </a>
        <a class="btn btn-soft-secondary btn-sm mb-1" href="/#">
          Resources
        </a>
        <a class="btn btn-soft-secondary btn-sm mb-1" href="/#">
          Classic
        </a>
        <a class="btn btn-soft-secondary btn-sm mb-1" href="/#">
          Photography
        </a>
        <a class="btn btn-soft-secondary btn-sm mb-1" href="/#">
          Interview
        </a>
      </div>
    </div>
  </div>
</div>
</div> */
