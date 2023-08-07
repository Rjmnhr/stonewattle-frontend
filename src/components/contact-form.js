const ContactForm = () => {
  return (
    <>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="" />
        <meta name="author" content="" />

        <link rel="shortcut icon" href="logo_mini.png" />

        <link
          rel="stylesheet"
          type="text/css"
          href="//fonts.googleapis.com/css?family=Open+Sans:400,300,600&amp;subset=cyrillic,latin"
        />

        <link
          rel="stylesheet"
          href="assets/plugins/bootstrap/css/bootstrap.min.css"
        />
        <link rel="stylesheet" href="assets/css/style.css" />

        <link rel="stylesheet" href="assets/css/headers/header-default.css" />
        <link rel="stylesheet" href="assets/css/footers/footer-v1.css" />

        <link rel="stylesheet" href="assets/plugins/animate.css" />
        <link
          rel="stylesheet"
          href="assets/plugins/line-icons/line-icons.css"
        />
        <link
          rel="stylesheet"
          href="assets/plugins/font-awesome/css/font-awesome.min.css"
        />
        <link
          rel="stylesheet"
          href="assets/plugins/sky-forms-pro/skyforms/css/sky-forms.css"
        />
        <link
          rel="stylesheet"
          href="assets/plugins/sky-forms-pro/skyforms/custom/custom-sky-forms.css"
        />

        <link rel="stylesheet" href="assets/css/pages/page_search.css" />

        <link
          rel="stylesheet"
          href="assets/css/theme-colors/orange.css"
          id="style_color"
        />
        <link rel="stylesheet" href="assets/css/theme-skins/dark.css" />

        <link rel="stylesheet" href="assets/css/custom.css" />

        <noscript>
          <img
            height="1"
            width="1"
            src="https://www.facebook.com/tr?id=1611992659106559&ev=PageView
&noscript=1"
            alt=""
          />
        </noscript>
      </head>
      <body>
        <div class="header">
          <div class="container">
            <a class="logo" href="index.html">
              <h2>2ndstorey</h2>
            </a>

            <div class="wrapper">
              <button
                type="button"
                class="navbar-toggle"
                data-toggle="collapse"
                data-target=".navbar-responsive-collapse"
              >
                {" "}
                <span class="sr-only">Toggle navigation</span>{" "}
                <span class="fa fa-bars"></span>{" "}
              </button>
            </div>

            <div class="collapse navbar-collapse mega-menu navbar-responsive-collapse">
              <div class="container">
                <ul class="nav navbar-nav">
                  <li>
                    {" "}
                    <a href="index.html"> Home </a>{" "}
                  </li>

                  <li>
                    {" "}
                    <a href="index.html#about"> About Us </a>{" "}
                  </li>

                  <li>
                    {" "}
                    <a href="index.html#offerings"> Our Offerings </a>{" "}
                  </li>

                  <li>
                    {" "}
                    <a href="blog_timeline.html"> Blogs </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="breadcrumbs">
            <div class="container">
              <h1 class="pull-left">Contact Form</h1>
            </div>
          </div>

          <div class="container content-sm">
            <div class="container">
              <div class="row">
                <div class="col-4">
                  <form
                    id="sky-form4"
                    class="sky-form"
                    method="post"
                    action="contact_process.php"
                  >
                    <fieldset>
                      <div class="row">
                        <section class="col col-6">
                          <label class="input">
                            <input
                              type="text"
                              name="firstname"
                              id="firstname"
                              placeholder="First name"
                              required
                            />
                          </label>
                        </section>
                        <section class="col col-6">
                          <label class="input">
                            <input
                              type="text"
                              name="lastname"
                              id="lastname"
                              placeholder="Last name"
                              required
                            />
                          </label>
                        </section>
                      </div>
                      <div class="row">
                        <section class="col col-6">
                          <label class="input">
                            <input
                              type="text"
                              name="company"
                              id="company"
                              placeholder="Company"
                              required
                            />
                          </label>
                        </section>
                        <section class="col col-6">
                          <label class="input">
                            <input
                              type="text"
                              name="title"
                              id="title"
                              placeholder="Title/Role"
                              required
                            />
                          </label>
                        </section>
                      </div>
                      <div class="row">
                        <section class="col col-6">
                          <label class="input">
                            <input
                              type="email"
                              name="email"
                              id="email"
                              placeholder="Email address"
                              required
                            />
                          </label>
                        </section>
                        <section class="col col-6">
                          <label class="input">
                            <input
                              type="text"
                              name="phone"
                              id="phone"
                              placeholder="Phone"
                              required
                            />
                          </label>
                        </section>
                      </div>
                    </fieldset>
                    <footer>
                      <button
                        type="submit"
                        name="submit"
                        value="submit"
                        class="btn-u"
                      >
                        Contact me
                      </button>
                    </footer>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div class="footer-v1">
            <div class="footer">
              <div class="container">
                <div class="row">
                  <div class="col-md-3 md-margin-bottom-10">
                    {" "}
                    <a href="index.html">
                      <img
                        id="logo-footer"
                        class="footer-logo"
                        src="assets/img/logo_main_white.png"
                        width="50%"
                        height="50%"
                        alt=""
                      />
                    </a>
                    <p>
                      Adeft Consulting is an innovative HR analytics and
                      products company
                    </p>
                  </div>

                  <div class="col-md-3 md-margin-bottom-10">
                    <div class="headline">
                      <h2>Products</h2>
                    </div>
                    <ul class="list-unstyled link-list">
                      <li>
                        <a href="http://adeftconsulting.com/profiler/">
                          Profiler
                        </a>
                        <i class="fa fa-angle-right"></i>
                      </li>
                      <li>
                        <a href="http://adeftconsulting.com/heartbeat/">
                          heartBeat
                        </a>
                        <i class="fa fa-angle-right"></i>
                      </li>
                      <li>
                        <a href="http://adeftconsulting.com/sales_incentive/">
                          Sales Incentive
                        </a>
                        <i class="fa fa-angle-right" />
                        <i />
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-3 md-margin-bottom-10">
                    <div class="headline">
                      <h2>Useful Links</h2>
                    </div>
                    <ul class="list-unstyled link-list">
                      <li>
                        <a href="people_analytics.html">People Analytics</a>
                        <i class="fa fa-angle-right"></i>
                      </li>
                      <li>
                        <a href="http://www.adeftconsulting.com/blog_timeline.html">
                          Blogs
                        </a>
                        <i class="fa fa-angle-right"></i>
                      </li>
                    </ul>
                  </div>

                  <div class="col-md-3 map-img md-margin-bottom-10">
                    <div class="headline">
                      <h2>Contact Us</h2>
                    </div>
                    <address class="md-margin-bottom-40">
                      Sydney <br />
                      Melbourne <br />
                      Brisbane <br />
                      Gold Coast <br />
                      Phone: <a href="tel:+61424853384">+61 424 853 384</a>
                      <br />
                      Email:{" "}
                      <a href="mailto:indradeep@adeftconsulting.com" class="">
                        indradeep@adeftconsulting.com
                      </a>
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div class="copyright">
              <div class="container">
                <div class="row">
                  <div class="col-md-6">
                    <p> 2017 &copy; All Rights Reserved. </p>
                  </div>

                  <div class="col-md-6">
                    <ul class="footer-socials list-inline">
                      <li>
                        {" "}
                        <a
                          href="https://www.linkedin.com/company/adeft-consulting-group"
                          class="tooltips"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Linkedin"
                        >
                          {" "}
                          <i class="fa fa-linkedin"></i>{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          href="https://www.facebook.com/Adeft-Consulting-1868787440009113/"
                          class="tooltips"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Facebook"
                        >
                          {" "}
                          <i class="fa fa-facebook"></i>{" "}
                        </a>{" "}
                      </li>
                      <li>
                        {" "}
                        <a
                          href="https://twitter.com/AdeftConsulting"
                          class="tooltips"
                          data-toggle="tooltip"
                          data-placement="top"
                          title=""
                          data-original-title="Twitter"
                        >
                          {" "}
                          <i class="fa fa-twitter"></i>{" "}
                        </a>{" "}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </body>
    </>
  );
};

export default ContactForm;
