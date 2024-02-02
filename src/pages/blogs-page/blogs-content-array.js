import {
  BankOutlined,
  DollarOutlined,
  FieldTimeOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import blogImage1 from "../../images/2ndstorey-blog-1.jpg";
export const infoArr1 = [
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
export const infoArr2 = [
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
      <label> 2</label>
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
      <label> $200,000</label>
    </div>
  </li>,
];
export const infoArr3 = [
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
      <label> $300,000</label>
    </div>
  </li>,
];
export const BlogContentArr = [
  {
    main: "Are you looking to invest",
    previewText:
      "Wollert, Baldivis, and Clyde epitomize the investor's oasis, where the alignment of high rental yields, low supply, and rapid population growth",
    subMain: "Let’s say you have $500,000 and open to investing in any state.",
    mainImg: blogImage1,
    imgPreview: blogImage1,
    extraContent: (
      <div className="d-lg-flex justify-content-around">
        {infoArr1.map((item) => {
          return (
            <div className="mb-3 mb-lg-0 border p-2 m-1 col-12 col-lg-3">
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
        subHeading: "The following 3 suburbs will be great for you",
        content: [
          "Wollert, VIC (Postcode: 3750)",
          "Baldivis, WA (Postcode: 6171)",
          "Clyde, VIC (Postcode: 3978)",
        ],
      },
      {
        no: 2,
        subHeading: "",
        content: [
          "In summary, Wollert, Baldivis, and Clyde epitomize the investor's oasis, where the alignment of high rental yields, low supply, and rapid population growth creates an optimal environment for investors seeking to flourish in the real estate market.The is what a Data Scientist job with 2 years’ experience is typically looking for in Bangalore",
        ],
      },
    ],
    footer:
      " To try out more suburbs for yourself, try the free Suburb Selector tool. Simply register and get suburbs selected in less than 5-10 minutes",
    footerButton: (
      <a href="/application">
        <button className="btn btn-lg btn-primary">Try Now!</button>
      </a>
    ),
  },
  {
    main: "Essential Insights for Smart Property Investment",
    previewText:
      "Thinking about investing in property? Here are some key insights to help you make smart choices",
    subMain:
      "Thinking about investing in property? Here are some key insights to help you make smart choices",
    mainImg:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1705121798/xjni6gijeg4ttefsmqfb.jpg",
    imgPreview:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1705121798/xjni6gijeg4ttefsmqfb.jpg",
    extraContent: "",
    subContent: [
      {
        no: 1,
        subHeading: "Customize Your Search:",
        content: [
          "Choose your property type, bedrooms, state, and budget to tailor your investment approach.",
        ],
      },
      {
        no: 2,
        subHeading: "Rate Important Factors:",
        content: [
          "Decide how important factors like vacancy rates, family-friendliness, and rental yields are to your investment strategy.",
        ],
      },
      {
        no: 3,
        subHeading: "Discover Hidden Insights:",
        content: [
          " Find suburbs that match your investment goals. Get insights into population growth, unemployment rates, and crime statistics",
        ],
      },
      {
        no: 4,
        subHeading: "Make Strategic Decisions:",
        content: [
          " Evaluate areas strategically to ensure your investment aligns with your long-term goals. Make well-informed decisions for a successful investment.",
        ],
      },
    ],
    footer:
      " Invest with confidence using our data-driven insights. Customize your strategy to unlock the potential of your property investment. To do all of the above, visit our Suburb Selector tool.",
    footerButton: (
      <a href="/application">
        <button className="btn btn-lg btn-primary">Try Now!</button>
      </a>
    ),
  },
  {
    main: " Australia's Top Rental Yields Unveiled: You’re Ultimate Investment Guide",
    previewText:
      "Embarking on a quest to discover this week's highest rental yields in Australia? Look no further! We've streamlined the process for you",
    subMain:
      "Embarking on a quest to discover this week's highest rental yields in Australia? Look no further! We've streamlined the process for you",
    mainImg:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1705578234/bspjgbcnhjvivjkknbzq.jpg",
    imgPreview:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1705578234/bspjgbcnhjvivjkknbzq.jpg",
    extraContent: (
      <div className="d-lg-flex justify-content-around">
        {infoArr2.map((item) => {
          return (
            <div className="mb-3 mb-lg-0 border p-2 m-1 col-12 col-lg-3">
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
        subHeading: "Tailor Your Search:",
        content: [
          " Choose your preferred dwelling type, minimum bedrooms, state, and budget to customize your property investment journey",
        ],
      },
      {
        no: 2,
        subHeading: "Strategic Investment Planning:",
        content: [
          "Leverage a data-driven approach, considering factors such as low vacancy rates, family-friendliness, and areas with the highest rental yields",
        ],
      },
      {
        no: 3,
        subHeading: "Real-time Suburb Insights:",
        content: [
          "Delve into the details of suburbs that align with your criteria, including average days on the market, low supply, and more",
        ],
      },
      {
        no: 4,
        subHeading: "Top Matches Revealed:",
        content: [
          "Explore the top 3 suburbs that stand out this week for generating the highest rental yields",
        ],
      },
      {
        no: 4,
        subHeading: "Our result:",
        content: [
          <p style={{ fontWeight: "600", color: "blue" }}>
            South Lismore in NSW
          </p>,
          <p style={{ fontWeight: "600", color: "blue" }}>Collie in WA </p>,
          <p style={{ fontWeight: "600", color: "blue" }}>Boulder in WA</p>,
        ],
      },
    ],
    footer:
      "Ready to make well-informed property investment decisions? Register now at Suburb Selector | 2nd Storey and explore a curated list of suburbs tailored to your search criteria. Let's turn your investment dreams into reality",
    footerButton: (
      <a href="/application">
        <button className="btn btn-lg btn-primary">Try Now!</button>
      </a>
    ),
  },
  {
    main: "Invest with Insight: Avoiding Blind Spots in Your Property Journey",
    previewText:
      "Investing in property demands attention to detail. The fear of missing out on critical aspects is real. Enter the practical solution: a straightforward, comprehensive approach",
    subMain:
      "Investing in property demands attention to detail. The fear of missing out on critical aspects is real. Enter the practical solution: a straightforward, comprehensive approach",
    mainImg:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1706168248/plavbl5w0eisvfntifrx.jpg",
    imgPreview:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1706168248/plavbl5w0eisvfntifrx.jpg",
    extraContent: "",
    subContent: [
      {
        no: 1,
        subHeading: "",
        content: [
          "In the rush to make decisions, vital factors might slip through the cracks. This is where reliable tools and data-driven insights prove invaluable. A savvy investor recognizes the significance of understanding market trends, property values, and the neighbourhood dynamics",
        ],
      },
      {
        no: 2,
        subHeading: "",
        content: [
          "What could be overlooked? It ranges from market shifts to untapped potential in a neighbourhood. A comprehensive strategy covers all bases, considering rental yields, growth potential, and the broader investment landscape",
        ],
      },
      {
        no: 3,
        subHeading: "",
        content: [
          "By adopting a simple and comprehensive approach, you reduce the risk of missing crucial details. It's all about making well-informed decisions and confidently navigating the property market",
        ],
      },
    ],
    footer:
      " To try out more suburbs for yourself, try the free Suburb Selector tool. Simply register and get suburbs selected in less than 5-10 minutes",
    footerButton: (
      <a href="/application">
        <button className="btn btn-lg btn-primary">Try Now!</button>
      </a>
    ),
  },
  {
    main: "Are you looking to invest in any state",
    previewText:
      "Suburbs like Bordertown (SA), Balgal Beach (QLD), and Biloela (VIC) shine with houses featuring at least 3 bedrooms.",
    subMain: "Let’s say you have $300,000 and open to investing in any state.",
    mainImg:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1706900089/zv9owrrdwvvxl1obcv5o.jpg",
    imgPreview:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1706900089/zv9owrrdwvvxl1obcv5o.jpg",
    extraContent: (
      <div className="d-lg-flex justify-content-around">
        {infoArr3.map((item) => {
          return (
            <div className="mb-3 mb-lg-0 border p-2 m-1 col-12 col-lg-3">
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
        subHeading: "The following 3 suburbs will be great for you",
        content: [
          "Bordertown, SA (Postcode: 5268)",
          "Balgal Beach, QLD (Postcode: 4816)",
          "Biloela, VIC (Postcode: 3978)",
        ],
      },
      {
        no: 2,
        subHeading: "",
        content: [
          "In summary, Suburbs like Bordertown (SA), Balgal Beach (QLD), and Biloela (VIC) shine with houses featuring at least 3 bedrooms. Across all states, enjoy family-friendly environments within a $300,000 budget. Emphasizing high rental yields, these choices prioritize low vacancy rates. Your path to smart investing starts here!",
        ],
      },
    ],
    footer:
      " To try out more suburbs for yourself, try the free Suburb Selector tool. Simply register and get suburbs selected in less than 5-10 minutes",
    footerButton: (
      <a href="/application">
        <button className="btn btn-lg btn-primary">Try Now!</button>
      </a>
    ),
  },
];
