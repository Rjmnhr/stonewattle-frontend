import React, { useState } from "react";
import NavBar from "../../components/nav-bar/nav-bar";
import useMediaQuery from "@mui/material/useMediaQuery";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { ContactPageStyled } from "./style";

const ContactPage = () => {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery("(max-width: 768px)");

  const [messageApi, contextHolder] = message.useMessage();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFormFilled(true);
    setQuery("");
    console.log(query);
    success();
  };

  const success = () => {
    messageApi.open({
      type: "success",
      content: "Submitted successfully",
    });
  };

  const handleNavigate = () => {
    navigate("/home");
  };

  return (
    <>
      <NavBar />
      <ContactPageStyled>
        {contextHolder}
        <div className="contact-container">
          <h1 style={{ marginBottom: "20px", paddingLeft: "10px" }}>
            Contact us
          </h1>
          <p>
            Please contact us at ---------- if you want us to assist you in your
            ideal property search
          </p>
          <form onSubmit={handleSubmit}>
            {!isSmallScreen ? (
              <>
                <textarea
                  cols={50}
                  rows={10}
                  placeholder="Please tell us what your question is and we will reach back in 2 days"
                  onChange={(e) => setQuery(e.target.value)}
                  required
                />
              </>
            ) : (
              <textarea
                cols={30}
                rows={15}
                placeholder="Please tell us what your question is and we will reach back in 2 days"
                onChange={(e) => setQuery(e.target.value)}
                required
              />
            )}

            <br />
            <button type="submit">Submit</button>
          </form>

          {isFormFilled ? (
            <div>
              <p>
                Thanks for your question. Someone from our team will reach out
                to you on your registered email in the next 2 days
              </p>

              <h4 style={{ cursor: "pointed" }} onClick={handleNavigate}>
                <ArrowLeftOutlined /> Go Back
              </h4>
            </div>
          ) : (
            ""
          )}
        </div>
      </ContactPageStyled>
    </>
  );
};

export default ContactPage;
