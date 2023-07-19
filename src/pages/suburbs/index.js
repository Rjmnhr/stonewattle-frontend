import React, { useEffect, useState } from "react";
import { SuburbsPageStyled } from "./style";
import HorizontalBarRentVsOwner from "../../components/rent-vs-owner";
import { Dropdown, Space, Skeleton } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useApplicationContext } from "../../context/app-context";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../components/axios";

const Suburb = () => {
  const [resultData, setResultData] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const { isUserValid } = useApplicationContext();

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = () => {
      AxiosInstance.get("/api/suburbs/data")
        .then(async (response) => {
          const result = await response.data;
          console.log(result);
          setResultData(result);
          setOriginalData(result);
        })
        .catch((err) => console.log(err));
    };

    if (isUserValid) {
      fetchData();
    } else {
      navigate("/");
    }
  }, [isUserValid, navigate]);

  useEffect(() => {
    if (resultData && sortOrder) {
      const sortedData = [...resultData];
      if (sortOrder === "0") {
        sortedData.sort((a, b) => b.rental_yield - a.rental_yield);
      } else if (sortOrder === "1") {
        sortedData.sort((a, b) => a.rental_yield - b.rental_yield);
      }
      setResultData(sortedData);
      console.log(JSON.stringify(sortedData));
    } else if (originalData) {
      setResultData(originalData);
    }
  }, [resultData, sortOrder, originalData]);

  const handleSortOrderChange = (key) => {
    setSortOrder(key);
  };

  const items = [
    {
      label: (
        <p style={{ margin: "0" }} onClick={() => handleSortOrderChange("0")}>
          Highest to Lowest
        </p>
      ),
      key: "0",
    },
    {
      label: (
        <p style={{ margin: "0" }} onClick={() => handleSortOrderChange("1")}>
          Lowest to Highest
        </p>
      ),
      key: "1",
    },
  ];

  return (
    <>
      <SuburbsPageStyled>
        <div style={{ padding: "20px" }} className="suburbs-main-container">
          {resultData ? (
            <>
              <center>
                <h1>SUBURBS</h1>
              </center>
              <div className="filter-bar">
                <div className="filter-sub-list">
                  <p onClick={() => handleSortOrderChange(null)}>All</p>
                </div>
                <div>
                  <p>
                    <Dropdown
                      menu={{
                        items,
                      }}
                      trigger={["click"]}
                    >
                      <Space>
                        Rental Yield
                        <DownOutlined />
                      </Space>
                    </Dropdown>
                  </p>
                </div>
              </div>

              <div className="suburbs-table-heads">
                <p>Postcode</p>
                <p>Suburb Name</p>
                <p>State</p>
                <p>Rating</p>
                <p>Renter vs Owner</p>
                <p>
                  {" "}
                  <Dropdown
                    menu={{
                      items,
                    }}
                    trigger={["click"]}
                  >
                    <Space>
                      Rental Yield
                      <DownOutlined />
                    </Space>
                  </Dropdown>
                </p>
              </div>
              <div className="suburbs-details">
                <div className="suburbs-data">
                  <ul>
                    {resultData.map((data, index) => {
                      return (
                        <>
                          <a href={`/suburb/${data.suburb_id}`}>
                            <list className="suburbs-list" key={data.suburb_id}>
                              <p>{data.postcode}</p>
                              <p style={{ textAlign: "start" }}>
                                {data.suburb_name}
                              </p>
                              <p>{data.state}</p>
                              <p>{data.ratings}/5</p>
                              <HorizontalBarRentVsOwner
                                rent={data.renter}
                                owner={data.owner}
                              />
                              <p>{data.rental_yield}</p>
                            </list>
                          </a>
                        </>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </>
          ) : (
            <div>
              <Skeleton />
              <Skeleton />
              <Skeleton />
            </div>
          )}
        </div>
      </SuburbsPageStyled>
    </>
  );
};

export default Suburb;
