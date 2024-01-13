import { infoArr } from ".";
import blogImage1 from "../../images/2ndstorey-blog-1.jpg";
export const BlogContentArr = [
  {
    main: "Are you looking to invest?",
    subMain:
      "Wollert, Baldivis, and Clyde epitomize the investor's oasis, where the alignment of high rental yields, low supply, and rapid population growth",
    mainImg: blogImage1,
    imgPreview: blogImage1,
    extraContent: (
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
    ),
    subContent: [
      {
        no: 1,
        content:
          "In summary, Wollert, Baldivis, and Clyde epitomize the investor's oasis, where the alignment of high rental yields, low supply, and rapid population growth creates an optimal environment for investors seeking to flourish in the real estate market.The is what a Data Scientist job with 2 years’ experience is typically looking for in Bangalore",
      },
    ],
    footer: "",
    footerButton: (
      <a href="/price-a-job">
        <button className="btn btn-lg btn-primary">Click here</button>
      </a>
    ),
  },
  {
    main: "Essential Insights for Smart Property Investment",
    subMain:
      "Thinking about investing in property? Here are some key insights to help you make smart choices",
    mainImg:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1705121798/xjni6gijeg4ttefsmqfb.jpg",
    imgPreview:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1705121798/xjni6gijeg4ttefsmqfb.jpg",
    subContent: [
      {
        no: 1,
        content: "",
      },
      {
        no: 2,
        content: "",
      },
      {
        no: 3,
        content: "",
      },
    ],
    footer: "",
    footerButton: (
      <a href="/application">
        <button className="btn btn-lg btn-primary">Click here</button>
      </a>
    ),
  },
];
