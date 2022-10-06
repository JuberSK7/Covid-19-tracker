import React, { useState, useEffect } from "react";
import axios from "axios";
import "./covid.css";

const Covid = () => {
  const [data, setData] = useState([]);

  const getCovidData = async () => {
    const response = await axios.get("https://data.covid19india.org/data.json");
    setData(response.data.statewise[0]);
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <>
      <section className="covid-section">
        <div className="left-div">
          <h2>
            Frequently Asked
            <br />
            Questions
          </h2>
          <p>Get answers to your queries here</p>
          <button>VIEW ALL FAQs </button>
        </div>

        <div className="right-div">
          <div className="card__main">
            <p className="card-name">
              {" "}
              <span> OUR </span>COUNTRY
            </p>
            <p className="card-info" style={{ color: "#8a2be2" }}>
              INDIA
            </p>
          </div>

          <div className="card__main">
            <p className="card-name">
              {" "}
              <span> TOTAL </span>RECOVER
            </p>
            <p className="card-info" style={{ color: "green" }}>
              {data.recovered}
            </p>
          </div>

          <div className="card__main">
            <p className="card-name">
              {" "}
              <span> TOTAL </span>CONFIRMED
            </p>
            <p className="card-info" style={{ color: "rgb(255, 119, 0)" }}>
              {data.confirmed}
            </p>
          </div>

          <div className="card__main">
            <p className="card-name">
              {" "}
              <span> TOTAL </span>DEATHS
            </p>
            <p className="card-info" style={{ color: "red" }}>
              {data.deaths}
            </p>
          </div>

          <div className="card__main">
            <p className="card-name">
              {" "}
              <span> TOTAL </span>ACTIVE
            </p>
            <p className="card-info" style={{ color: "#00FF00" }}>
              {data.active}
            </p>
          </div>

          <div className="card__main">
            <p className="card-name">
              {" "}
              <span> DELTA </span>CUNFIRM
            </p>
            <p className="card-info" style={{ color: "black" }}>
              {data.deltaconfirmed}
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Covid;
