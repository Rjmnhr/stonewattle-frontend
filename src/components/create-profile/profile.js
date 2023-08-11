import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../axios";
import "./style.css";

const CreateProfile = () => {
  const [phone, setPhone] = useState("");

  const [state, setState] = useState("");
  const [noOfProperty, setNoOfProperty] = useState(0);
  const [portfolio, setPortfolio] = useState(0);
  const [invest, setInvest] = useState("");
  const [postcode, setPostcode] = useState("");

  const navigate = useNavigate();

  const email = localStorage.getItem("email");
  const first_name = localStorage.getItem("first_name");
  const last_name = localStorage.getItem("last_name");
  const password = localStorage.getItem("password");

  const clearLocalStorage = () => {
    localStorage.removeItem("email");
    localStorage.removeItem("first_name");
    localStorage.removeItem("last_name");
    localStorage.removeItem("password");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("first_name", first_name);
    formData.append("last_name", last_name);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("post_code", postcode);
    formData.append("state", state);
    formData.append("phone", phone);
    formData.append("property", noOfProperty);
    formData.append("portfolio", portfolio);
    formData.append("invest", invest);

    AxiosInstance.post("/api/user/signup", formData, {
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(async (response) => {
        const data = await response.data;
        console.log(data);

        clearLocalStorage();
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
        alert("something is wrong");
        navigate("/login");
      });
  };

  return (
    <div>
      <div
        className="container content-space-1"
        style={{ width: "100%", display: "grid", placeItems: "center" }}
      >
        <div className="card card-lg card-shadow card-pinned h-100 p-lg-4 p-3 text-start">
          <form on onSubmit={handleSubmit}>
            <h4>Your personal details</h4>

            <div className="detail-inputmb-2 mb-2 col-10 ">
              <input
                class="form-control form-control-lg"
                type="number"
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
                required
              />
            </div>

            <div className="detail-input mb-2  col-10 ">
              <select
                class="form-select form-select-lg mb-3"
                onChange={(e) => setState(e.target.value)}
                required
              >
                <option value="">State</option>
                <option value="ACT">Australian Capital Territory</option>
                <option value="NSW">New South Wales</option>
                <option value="NT">Northern Territory</option>
                <option value="QLD">Queensland</option>
                <option value="SA">South Australia</option>
                <option value="TAS">Tasmania</option>
                <option value="VIC">Victoria</option>
                <option value="WA">Western Australia</option>
              </select>
            </div>

            <div className="detail-input mb-2 col-10 ">
              <div
              // style={{ display: "flex", gap: "3px", alignItems: "center" }}
              >
                <input
                  class="form-control form-control-lg"
                  type="number"
                  onChange={(e) => setPostcode(e.target.value)}
                  placeholder="Postcode"
                />
              </div>
            </div>

            <h4 className="mt-3">Your property investing goals</h4>
            <div className="detail-input  mb-2 col-10 ">
              <input
                class="form-control form-control-lg   property-input"
                type="number"
                onChange={(e) => setNoOfProperty(e.target.value)}
                placeholder="How many properties do you currently have"
              />
            </div>
            <div className="detail-input mb-2  col-10 ">
              <input
                class="form-control form-control-lg property-input"
                type="number"
                onChange={(e) => setPortfolio(e.target.value)}
                placeholder=" Current value of all of your property portfolio"
              />
            </div>
            <div className="detail-input  mb-2 col-10 ">
              <select
                class="form-select form-select-lg mb-3"
                onChange={(e) => setInvest(e.target.value)}
              >
                <option value="">
                  <p> How quickly are you looking to invest ?</p>
                </option>
                <option value="1 month">1 month</option>
                <option value="3 months">3 months</option>
                <option value="6 months">6 months</option>
                <option value="1 year">1 year</option>
                <option value="unsure">unsure</option>
              </select>
            </div>

            <button className="btn  btn-primary " type="submit">
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile;
