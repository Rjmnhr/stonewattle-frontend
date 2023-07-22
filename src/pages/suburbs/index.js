import React, { useEffect, useState } from "react";
import { SuburbsPageStyled } from "./style";
import HorizontalBarRentVsOwner from "../../components/rent-vs-owner-bar/rent-vs-owner";
import { Dropdown, Space, Skeleton } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import AxiosInstance from "../../components/axios";

const Suburb = () => {
  const [resultData, setResultData] = useState(null);
  const [sortOrder, setSortOrder] = useState(null);
  const [originalData, setOriginalData] = useState(null);
  const isAdmin = localStorage.getItem("isAdmin");

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

    if (isAdmin === "true") {
      fetchData();
    } else {
      navigate("/");
    }
  }, [isAdmin, navigate]);

  const handleNavigate = (id) => {
    navigate(`/suburb/${id}`);
  };

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
    // eslint-disable-next-line
  }, [sortOrder]);

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
        <div className="suburbs-main-container">
          {resultData ? (
            <>
              <center>
                <h1>SUBURBS</h1>
                <div className="table-container">
                  <table>
                    <thead className="table-header">
                      <tr>
                        <th style={{ textAlign: "center" }}>Postcode</th>
                        <th>Suburb Name</th>
                        <th style={{ textAlign: "center" }}>State</th>
                        <th style={{ textAlign: "center" }}>Rating</th>
                        <th style={{ textAlign: "center" }}>Rent vs Owner</th>
                        <th>
                          {" "}
                          <Dropdown
                            menu={{
                              items,
                            }}
                            trigger={["click"]}
                          >
                            <div>
                              <Space>
                                Rental Yield
                                <DownOutlined />
                              </Space>
                            </div>
                          </Dropdown>
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {resultData
                        ? resultData.map((data) => {
                            return (
                              <tr
                                key={data.domain_string}
                                onClick={() => handleNavigate(data.suburb_id)}
                              >
                                <td style={{ textAlign: "center" }}>
                                  {data.postcode}
                                </td>
                                <td>{data.suburb_name}</td>
                                <td style={{ textAlign: "center" }}>
                                  {data.state}
                                </td>
                                <td style={{ textAlign: "center" }}>
                                  {data.ratings}/5
                                </td>

                                <td
                                  style={{
                                    display: "grid",
                                    placeItems: "center",
                                  }}
                                >
                                  <HorizontalBarRentVsOwner
                                    rent={data.renter}
                                    owner={data.owner}
                                  />
                                </td>

                                <td style={{ textAlign: "center" }}>
                                  {data.rental_yield}
                                </td>
                              </tr>
                            );
                          })
                        : ""}
                    </tbody>
                  </table>
                </div>
              </center>
              {/* <div className="filter-bar">
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
              </div> */}
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
