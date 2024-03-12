import {
  BankOutlined,
  DollarOutlined,
  FieldTimeOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import blogImage1 from "../../images/2ndstorey-blog-1.jpg";

const infoArrayFunction = (type, bedrooms, state, budget) => {
  const infoArr = [
    <li className="text-center">
      <div className="d-flex d-lg-block ">
        <HomeOutlined className="mb-2 " style={{ fontSize: "24px" }} />
        <p className="mx-2 my-0">
          <strong>Dwelling Type</strong> :
        </p>{" "}
        <label> {type}</label>
      </div>
    </li>,
    <li className="text-center">
      <div className="d-flex d-lg-block ">
        <BankOutlined className="mb-2 " style={{ fontSize: "24px" }} />
        <p className="mx-2 my-0">
          <strong>Min Bedrooms</strong> :
        </p>{" "}
        <label> {bedrooms}</label>
      </div>
    </li>,
    <li className="text-center">
      <div className="d-flex d-lg-block ">
        <FieldTimeOutlined className="mb-2 " style={{ fontSize: "24px" }} />
        <p className="mx-2 my-0">
          <strong>State</strong> :
        </p>{" "}
        <label>{state}</label>
      </div>
    </li>,
    <li className="text-center">
      <div className="d-flex d-lg-block ">
        <DollarOutlined className="mb-2 " style={{ fontSize: "24px" }} />
        <p className="mx-2 my-0">
          <strong>Budget</strong> :
        </p>{" "}
        <label> {budget}</label>
      </div>
    </li>,
  ];

  return infoArr;
};

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
        {infoArrayFunction("House", 3, "All States", "$500,000").map((item) => {
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
        {infoArrayFunction("House", 2, "All States", "$200,000").map((item) => {
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
        {infoArrayFunction("House", 3, "All States", "$300,000").map((item) => {
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
  {
    main: "Which Australian suburbs offer the best investment opportunities",
    previewText:
      "Suburbs like Roxby Downs, SA (Postcode: 5725), Moranbah, QLD (Postcode: 4744), and Wundowie, WA (Postcode: 6560) elevates your investment.",
    subMain: "Let’s say you have $3,50,000 and open to investing in any state.",
    mainImg:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1707244264/ef0pcl62hwnufngyuwmp.jpg",
    imgPreview:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1707244264/ef0pcl62hwnufngyuwmp.jpg",
    extraContent: (
      <div className="d-lg-flex justify-content-around">
        {infoArrayFunction("House", 3, "All States", "$3,50,000").map(
          (item) => {
            return (
              <div className="mb-3 mb-lg-0 border p-2 m-1 col-12 col-lg-3">
                <div className="text-dark" style={{ fontSize: "16px" }}>
                  {item}
                </div>
              </div>
            );
          }
        )}
      </div>
    ),
    subContent: [
      {
        no: 1,
        subHeading: "The following 3 suburbs will be great for you",
        content: [
          "Roxby Downs, SA (Postcode: 5725)",
          "Moranbah, QLD (Postcode: 4744)",
          "Wundowie, WA (Postcode: 6560)",
        ],
      },
      {
        no: 2,
        subHeading: "",
        content: [
          "In summary, suburbs like Roxby Downs, SA (Postcode: 5725), Moranbah, QLD (Postcode: 4744), and Wundowie, WA (Postcode: 6560). These prime picks boast factors like low crime rates, excellent schools, recent property growth, a higher proportion of owners, and residents with a strong relative income. Elevate your investment journey with targeted insights!",
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
    main: "$4.50k and open to investing in any state in AU",
    previewText:
      "Suburbs like Nickol, WA (Postcode: 6714), Moranbah, QLD (Postcode: 4744), Blackall, QLD (Postcode: 4472), and Walkerston, QLD (Postcode: 4751) elevates your investment.",
    subMain: "Let’s say you have $4,50,000 and open to investing in any state.",
    mainImg:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1707480136/fjq55yigygipmi4nevlu.jpg",
    imgPreview:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1707480136/fjq55yigygipmi4nevlu.jpg",
    extraContent: (
      <div className="d-lg-flex justify-content-around">
        {infoArrayFunction("House", 3, "All States", "$4,50,000").map(
          (item) => {
            return (
              <div className="mb-3 mb-lg-0 border p-2 m-1 col-12 col-lg-3">
                <div className="text-dark" style={{ fontSize: "16px" }}>
                  {item}
                </div>
              </div>
            );
          }
        )}
      </div>
    ),
    subContent: [
      {
        no: 1,
        subHeading: "The following 3 suburbs will be great for you",
        content: [
          "Nickol, WA (Postcode: 6714)",
          "Blackall, QLD (Postcode: 4472)",
          "Walkerston, QLD (Postcode: 4751)",
        ],
      },
      {
        no: 2,
        subHeading: "",
        content: [
          "In summary, suburbs like Nickol, WA (Postcode: 6714), Moranbah, QLD (Postcode: 4744), Blackall, QLD (Postcode: 4472), and Walkerston, QLD (Postcode: 4751). These prime picks boast factors like low crime rates, excellent schools, recent property growth, a higher proportion of owners, and residents with a strong relative income. Elevate your investment journey with targeted insights!",
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
    main: "$250k and looking for 2 bedroom house investment in Australia",
    previewText:
      "if you are looking for a 2-bedroom house under $250,000? Property characteristics and investment strategies matter. Look for low vacancy rates, high rental yields, and family-friendly neighborhoods.",
    subMain:
      "Let’s say you have $2,50,000 and open to investment in Australia in any state.",
    mainImg:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1707720733/ymdwcbn8voauwr1fjqel.jpg",
    imgPreview:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1707720733/ymdwcbn8voauwr1fjqel.jpg",
    extraContent: (
      <div className="d-lg-flex justify-content-around">
        {infoArrayFunction("House", 2, "All States", "$2,50,000").map(
          (item) => {
            return (
              <div className="mb-3 mb-lg-0 border p-2 m-1 col-12 col-lg-3">
                <div className="text-dark" style={{ fontSize: "16px" }}>
                  {item}
                </div>
              </div>
            );
          }
        )}
      </div>
    ),
    subContent: [
      {
        no: 1,
        subHeading: "The following 3 suburbs will be great for you",
        content: [
          "Australind, WA (Postcode: 6233)",
          "Preston Beach, WA (Postcode: 6215)",
          "Balgal Beach, QLD (Postcode: 4816)",
        ],
      },
      {
        no: 2,
        subHeading: "",
        content: [
          " In summary, if you are looking for a 2-bedroom house under $250,000? Property characteristics and investment strategies matter. Look for low vacancy rates, high rental yields, and family-friendly neighborhoods. Check out our top 3 suburbs: Australind, Preston Beach, and Balgal Beach in WA and QLD. Login for more options!",
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
    main: "Seeking Real Estate Investment Analysis: $250k Budget for 4 Bedroom House",
    previewText:
      "Discover top-rated suburbs like Wagin, Moura, and Merredin for high potential investments. With key property characteristics and investment strategies outlined, find family-friendly neighborhoods with high rental yields and low vacancy rates",
    subMain:
      "Let’s Say We're Making a Real Estate Investment Analysis for a $250k Budget on a 4 Bedroom House in Australia",
    mainImg:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1707886244/spqpdwodqbvv9d9etcbb.jpg",
    imgPreview:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1707886244/spqpdwodqbvv9d9etcbb.jpg",
    extraContent: (
      <div className="d-lg-flex justify-content-around">
        {infoArrayFunction("House", 4, "All States", "$2,50,000").map(
          (item) => {
            return (
              <div className="mb-3 mb-lg-0 border p-2 m-1 col-12 col-lg-3">
                <div className="text-dark" style={{ fontSize: "16px" }}>
                  {item}
                </div>
              </div>
            );
          }
        )}
      </div>
    ),
    subContent: [
      {
        no: 1,
        subHeading: "The following 3 suburbs will be great for you",
        content: [
          "Wagin, WA (Postcode: 6315)",
          "Moura , QLD (Postcode: 4718)",
          "Merredin , WA (Postcode: 4816)",
        ],
      },
      {
        no: 2,
        subHeading: "",
        content: [
          "In summary, Looking to invest $250k in a 4-bedroom property? Discover top-rated suburbs like Wagin, Moura, and Merredin for high potential investments. With key property characteristics and investment strategies outlined, find family-friendly neighborhoods with high rental yields and low vacancy rates. Contact us for personalized assistance and start your investment journey today!",
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
    main: "$550k and looking for 4 bedroom house, below are best suburbs in Australia",
    previewText:
      "if you are looking for a 4-bedroom house under $550,000? Explore top-rated areas like Nickol, Henley Brook, and Bennett Springs in WA. Discover key investment strategies emphasizing low vacancy rates, family-friendly environments, and high rental yields.",
    subMain:
      "Let’s say you have $5,50,000 and open to search for best suburbs in Australia, any state.",
    mainImg:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1708349717/dom27w8bapqfyicdtf87.jpg",
    imgPreview:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1708349717/dom27w8bapqfyicdtf87.jpg",
    extraContent: (
      <div className="d-lg-flex justify-content-around">
        {infoArrayFunction("House", 4, "All States", "$5,50,000").map(
          (item) => {
            return (
              <div className="mb-3 mb-lg-0 border p-2 m-1 col-12 col-lg-3">
                <div className="text-dark" style={{ fontSize: "16px" }}>
                  {item}
                </div>
              </div>
            );
          }
        )}
      </div>
    ),
    subContent: [
      {
        no: 1,
        subHeading: "The following 3 suburbs will be great for you",
        content: [
          "Nickol: Postcode 6714, WA",
          "Henley Brook: Postcode 6055, WA",
          "Bennett Springs: Postcode 6063, WA",
        ],
      },
      {
        no: 2,
        subHeading: "",
        content: [
          "In summary, if you are looking for a 4-bedroom house under $550,000? Explore top-rated areas like Nickol, Henley Brook, and Bennett Springs in WA. Discover key investment strategies emphasizing low vacancy rates, family-friendly environments, and high rental yields. Contact us today to kickstart your investment into best suburbs in Australia",
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
    main: "$500k and looking for 2 bedroom house, below are best suburbs in Australia",
    previewText:
      "if you are looking for a Looking for the perfect investment? Consider prime picks like Dawesville, WA (Postcode: 6211), Windang, NSW (Postcode: 2528), and Caversham, WA (Postcode: 6055).",
    subMain:
      "Let’s say you have $5,00,000 and open to search for best suburbs in Australia, any state",
    mainImg:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1708699419/ubevyxdfqpnlewtndit0.jpg",
    imgPreview:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1708699419/ubevyxdfqpnlewtndit0.jpg",
    extraContent: (
      <div className="d-lg-flex justify-content-around">
        {infoArrayFunction("House", 2, "All States", "$5,00,000").map(
          (item) => {
            return (
              <div className="mb-3 mb-lg-0 border p-2 m-1 col-12 col-lg-3">
                <div className="text-dark" style={{ fontSize: "16px" }}>
                  {item}
                </div>
              </div>
            );
          }
        )}
      </div>
    ),
    subContent: [
      {
        no: 1,
        subHeading: "The following 3 suburbs will be great for you",
        content: [
          "Dawesville, WA (Postcode: 6211)",
          "Windang, NSW (Postcode: 2528)",
          "Caversham, WA (Postcode: 6055)",
        ],
      },
      {
        no: 2,
        subHeading: "",
        content: [
          " In summary, if you are looking for a Looking for the perfect investment? Consider prime picks like Dawesville, WA (Postcode: 6211), Windang, NSW (Postcode: 2528), and Caversham, WA (Postcode: 6055). These suburbs offer high rental yields, low vacancy rates, and are family-friendly.",
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
    main: "$600k and looking for 5 bedroom house, below are best suburbs in Australia",
    previewText:
      "if you're seeking the ideal investment opportunity, explore top choices such as Ballajura, WA (Postcode: 6066), Dawesville, WA (Postcode: 6211), and Byford, WA (Postcode: 6122).  .",
    subMain:
      "Let’s say you have $6,00,000 and open to search for best suburbs in Australia, any state.",
    mainImg:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1709026451/gtmeiixkmu7pytni7lfg.jpg",
    imgPreview:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1709026451/gtmeiixkmu7pytni7lfg.jpg",
    extraContent: (
      <div className="d-lg-flex justify-content-around">
        {infoArrayFunction("House", 5, "All States", "$6,00,000").map(
          (item) => {
            return (
              <div className="mb-3 mb-lg-0 border p-2 m-1 col-12 col-lg-3">
                <div className="text-dark" style={{ fontSize: "16px" }}>
                  {item}
                </div>
              </div>
            );
          }
        )}
      </div>
    ),
    subContent: [
      {
        no: 1,
        subHeading: "The following 3 suburbs will be great for you",
        content: [
          "Ballajura, WA (Postcode: 6066)",
          "Dawesville, WA (Postcode: 6211)",
          "Byford, WA (Postcode: 6122)",
        ],
      },
      {
        no: 2,
        subHeading: "",
        content: [
          " In summary, if you're seeking the ideal investment opportunity, explore top choices such as Ballajura, WA (Postcode: 6066), Dawesville, WA (Postcode: 6211), and Byford, WA (Postcode: 6122). These suburbs boast high rental yields, low vacancy rates, and are perfect for families.",
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
    main: "Searching for a $300k Rental Property? Check Out These Top 2-Bedroom House Suburbs in AustraliaBest Suburbs for a $500k in QLD, Check Out These Top 2-Bedroom House Suburbs in Australia",
    previewText:
      "If you're on the hunt for a lucrative rental property investment, consider exploring prime locations such as Goodna, QLD (Postcode: 4300), Collingwood Park, QLD (Postcode: 4301) and Kallangur, QLD (Postcode: 4503).",
    subMain:
      "Let’s say you have $5,00,000 and open to search for best suburbs in Australia, any state.",
    mainImg:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1710244714/crlbtl2cuy5obmkkkb4g.jpg",
    imgPreview:
      "https://res.cloudinary.com/dsw1ubwyh/image/upload/v1710244714/crlbtl2cuy5obmkkkb4g.jpg",
    extraContent: (
      <div className="d-lg-flex justify-content-around">
        {infoArrayFunction("House", 2, "QLD", "$5,00,000").map((item) => {
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
          "Goodna, QLD (Postcode: 4300)",
          "Collingwood Park, QLD (Postcode: 4301)",
          "Kallangur, QLD (Postcode: 4503)",
        ],
      },
      {
        no: 2,
        subHeading: "",
        content: [
          "If you're on the hunt for a lucrative rental property investment, consider exploring prime locations such as Goodna, QLD (Postcode: 4300), Collingwood Park, QLD (Postcode: 4301) and Kallangur, QLD (Postcode: 4503). These suburbs offer impressive rental yields, minimal vacancy rates, and are particularly attractive for families looking for a rental home and also good population growth",
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
