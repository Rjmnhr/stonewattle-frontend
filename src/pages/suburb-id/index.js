import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GrowthChart from "../../components/growth-chart/growth-chart";

const SuburbId = () => {
  const [suburbData, setSuburbData] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    console.log(id);
    fetch(`http://localhost:8002/api/suburbs/${id}`)
      .then(async (response) => {
        const data = await response.json();
        console.log(data);
        setSuburbData(data);
      })
      .catch((err) => console.log(err));
  }, [setSuburbData, id]);
  return (
    <div>
      {suburbData
        ? suburbData.map((data) => {
            return (
              <>
                <h1>{data.suburb_name}</h1>
                <h2>{data.suburb_id}</h2>
                <h3>Having Bedrooms {data.bedrooms}</h3>

                <GrowthChart
                  growthRate_2020={data.growth_rate_2020}
                  growthRate_2021={data.growth_rate_2021}
                  growthRate_2022={data.growth_rate_2022}
                  growthRate_2023={data.growth_rate_2023}
                  growthRate_2019={data.growth_rate_2019}
                />
              </>
            );
          })
        : ""}
    </div>
  );
};

export default SuburbId;
