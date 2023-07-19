import React from "react";

const FilterResults = (props) => {
  const { results, isBedroomsUnsure, isDataNotFound } = props;
  return (
    <div>
      <center>
        {results ? (
          <>
            <div className="table-container">
              <table>
                <thead className="table-header">
                  <tr>
                    <th>Suburb Name</th>
                    <th>Postcode</th>
                    <th>State</th>
                    {isBedroomsUnsure ? (
                      <th style={{ textAlign: "center" }}>Max Bedrooms</th>
                    ) : (
                      ""
                    )}
                    <th>Vacancy rate</th>
                    <th>family</th>
                  </tr>
                </thead>
                <tbody>
                  {isDataNotFound ? (
                    <>
                      <div
                        style={{
                          width: "200%",
                          height: "50vh",

                          display: "grid",
                          placeItems: "center",
                        }}
                      >
                        <h3>Data not found</h3>
                      </div>
                    </>
                  ) : (
                    <>
                      {results
                        ? results.map((data) => {
                            return (
                              <tr key={data.suburb_id}>
                                <td>{data.suburb_name}</td>
                                <td>{data.postcode}</td>
                                <td>{data.state_code}</td>
                                {isBedroomsUnsure ? (
                                  <td style={{ textAlign: "center" }}>
                                    {data.max_bedrooms}
                                  </td>
                                ) : (
                                  ""
                                )}
                                <td>{data.current_vacancy_rate}</td>
                                <td>{data.family}</td>
                              </tr>
                            );
                          })
                        : ""}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </>
        ) : (
          ""
        )}
      </center>
    </div>
  );
};

export default FilterResults;
