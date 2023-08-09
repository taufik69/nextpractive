"use client";
import React, { useEffect, useState } from "react";
const axios = require("axios");
const moive1 = () => {
  const [fetchData, setfetchData] = useState([]);
  useEffect(() => {
    const fetchDataMethod = async () => {
      const options = {
        method: "GET",
        url: "https://netflix54.p.rapidapi.com/search/",
        params: {
          query: "stranger",
          offset: "0",
          limit_titles: "50",
          limit_suggestions: "20",
          lang: "en",
        },
        headers: {
          "X-RapidAPI-Key":
            "1678c21cf2msh4429f2876f9bf54p1ce74djsn5283dce3c5ca",
          "X-RapidAPI-Host": "netflix54.p.rapidapi.com",
        },
      };
      try {
        const response = await axios.request(options);
        setfetchData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataMethod();
  }, []);
  console.log("fetch data is : ", fetchData);
  return (
    <div className="bg-black text-white font-3xl text-center p-16">
      <h1>This is dynamic page 1</h1>
    </div>
  );
};

export default moive1;
