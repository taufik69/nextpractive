"use client";
import React, { useState, useEffect } from "react";
const axios = require("axios");
const MoiveDetails = ({ params }) => {
  const [fetchData, setfetchData] = useState([]);
  useEffect(() => {
    const fetchDataMethod = async () => {
      try {
        const options = {
          method: "GET",
          url: "https://netflix54.p.rapidapi.com/season/episodes/",
          params: {
            ids: "80077209,80117715",
            offset: "0",
            limit: "25",
            lang: "en",
          },
          headers: {
            "X-RapidAPI-Key":
              "1678c21cf2msh4429f2876f9bf54p1ce74djsn5283dce3c5ca",
            "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
          },
        };
        const response = await axios.request(url, options);
        console.log(response.data.titles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataMethod();
  }, []);

  // console.log("fetchData", fetchData);
  return (
    <div>
      <h1> {params.slug}</h1>
    </div>
  );
};

export default MoiveDetails;
