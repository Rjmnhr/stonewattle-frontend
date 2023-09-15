import React from "react";
import "./style.css";
import NavBar from "../../components/nav-bar/nav-bar";

const ServicePage = () => {
  return (
    <div>
      <NavBar />
      <div class="container-fluid px-lg-8 px-3 content-space-2 content-space-lg-1 service-container">
        <div class="col-md-12 mb-5 mb-md-0 text-start">
          <p className="fs-3">
            In Australia, there are three views, which is consistent among
            buyers, consultants, advisors, buyers agents and so on.{" "}
          </p>
          <ol style={{ textAlign: "start" }}>
            <li>You should always buy houses</li>
            <li>You should buy in rural, if you can’t buy in main cities</li>
            <li>
              You need to spend significant time researching properties and
              markets
            </li>
          </ol>
          <p className="fs-3">
            We have always gone the other way and see below for the proof. We
            have bought a combination of units and houses and have never gone
            more than 15 kms from the city centre.
          </p>
          <p className="fs-3">
            We have bought a total of eight properties (6 units and 2 houses)
            over the last eight years. The total of all our property values was
            $2.7m and it currently (September 2023) is $3.8m, which has given us
            a total equity of $approximately 1.2m. On a month-by-month basis,
            this equates to a growth of approximately $25,000 in equity.
          </p>

          <table className="table-bordered" style={{ overflowX: "scroll" }}>
            <thead>
              <tr>
                <th>Location</th>
                <th>Location Type of property</th>
                <th>Beds</th>
                <th>Baths</th>
                <th>Distance from city</th>
                <th>Size (sq meters)</th>
                <th>Purchase time</th>

                <th>Months since purchase</th>
                <th>Property value (time of purchase)</th>
                <th>Property value (September 2023)</th>
                <th>Growth since purchase</th>
                <th>Monthly growth in value ($)</th>
                <th>Monthly growth in value (%)</th>
                <th>Monthly rent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Gold Coast</td>
                <td>Unit</td>
                <td>2</td>
                <td>2</td>
                <td>2 kms</td>
                <td>110</td>
                <td>15/04/2015</td>
                <td>102</td>
                <td>$289,000</td>
                <td>$575,000</td>
                <td>$212,000</td>
                <td>$2,078</td>
                <td>0.7%</td>
                <td>$2,600</td>
              </tr>
              <tr>
                <td>Gold Coast</td>
                <td>Unit</td>
                <td>2</td>
                <td>1</td>
                <td>2 kms</td>
                <td>80</td>
                <td>15/06/2017</td>
                <td>76</td>
                <td>$225,000</td>
                <td>$360,000</td>
                <td>$135,000</td>
                <td>$1,776</td>
                <td>0.8%</td>
                <td>$1,880</td>
              </tr>
              <tr>
                <td>Brisbane</td>
                <td>Unit</td>
                <td>2</td>
                <td>2</td>
                <td>4 kms</td>
                <td>60</td>
                <td>15/07/2018</td>
                <td>62</td>
                <td>$355,000</td>
                <td>$470,000</td>
                <td>$115,000</td>
                <td>$1,855</td>
                <td>0.5%</td>
                <td>$2,320</td>
              </tr>
              <tr>
                <td>Brisbane</td>
                <td>House</td>
                <td>5</td>
                <td>3</td>
                <td>11 kms</td>
                <td>700</td>
                <td>15/11/2019</td>
                <td>46</td>
                <td>$615,000</td>
                <td>$1,040,000</td>
                <td>$425,000</td>
                <td>$9,239</td>
                <td>1.5%</td>
                <td>$3,400</td>
              </tr>
              <tr>
                <td>Gold Coast</td>
                <td>House</td>
                <td>3</td>
                <td>2</td>
                <td>15 kms</td>
                <td>450</td>
                <td>15/03/2020</td>
                <td>42</td>
                <td>$373,000</td>
                <td>$570,000</td>
                <td>$197,000</td>
                <td>$4,690</td>
                <td>1.3%</td>
                <td>$2,320</td>
              </tr>
              <tr>
                <td>Brisbane</td>
                <td>Unit</td>
                <td>1</td>
                <td>1</td>
                <td>6 kms</td>
                <td>60</td>
                <td>15/09/2020</td>
                <td>36</td>
                <td>$230,000</td>
                <td>$275,000</td>
                <td>$45,000</td>
                <td>$1,250</td>
                <td>0.5%</td>
                <td>$1,800</td>
              </tr>
              <tr>
                <td>Perth</td>
                <td>Unit</td>
                <td>3</td>
                <td>2</td>
                <td>7 kms</td>
                <td>120</td>
                <td>15/07/2021</td>
                <td>26</td>
                <td>$310,000</td>
                <td>$375,000</td>
                <td>$35,000</td>
                <td>$1,346</td>
                <td>0.4%</td>
                <td>$2,200</td>
              </tr>
              <tr>
                <td>Melbourne</td>
                <td>Unit</td>
                <td>2</td>
                <td>1</td>
                <td>11 kms</td>
                <td>60</td>
                <td>15/01/2023</td>
                <td>8</td>
                <td>$295,000</td>
                <td>$350,000</td>
                <td>$15,000</td>
                <td>$1,875</td>
                <td>0.6%</td>
                <td>$1,600</td>
              </tr>
            </tbody>
            <tbody className="mt-3">
              <tr>
                <td className="invisible">Melbourne</td>
                <td className="invisible">Unit</td>
                <td className="invisible">2</td>
                <td className="invisible">1</td>
                <td className="invisible">11 kms</td>
                <td className="invisible">60</td>
                <td className="invisible">15/01/2023</td>
                <td className="invisible">8</td>
                <td>$2,692,000</td>
                <td>$4,015,000</td>
                <td>$1,179,000</td>
                <td>$24,110</td>
                <td></td>
                <td>$18,120</td>
              </tr>
            </tbody>
          </table>
          <p className="fs-3 mt-3">
            We earn a monthly rent of $18,000 against a mortgage of $11,500.
            After all rates (Council, Body Corporate, water), we take home
            $3,000 a month (amounting to $36,000)
          </p>
          <p className="fs-3">
            We have adopted a range of strategies in terms of:
          </p>

          <ul>
            <li>Determining the right lender</li>
            <li>Determining the right loan type</li>
            <li>Identifying the best suburb </li>
            <li>
              Identifying the most relevant property type – what’s special,
              extra balcony, outdoor space
            </li>
            <li>
              Limiting the additional expenses – in terms of body corporate and
              other council rates
            </li>
          </ul>

          <p className="fs-3">
            We work with clients researching best suburbs and properties for
            you. If you are time poor, have no desire to learn and don’t want to
            spend $15,000 on other support, work with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
