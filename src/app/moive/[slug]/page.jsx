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
        setfetchData(response.data.titles);
      } catch (error) {
        console.error(error);
      }
    };
    fetchDataMethod();
  }, []);
  console.log("fetch data is : ", fetchData);
  return (
    <div className="flex justify-center items-center flex-wrap  bg-black p-5 gap-7">
      {fetchData.map((item) => (
        <div className="">
          <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
              <img
                class="rounded-t-lg"
                src={item.jawSummary.backgroundImage.url}
                alt=""
              />
            </a>
            <div class="p-5">
              <a href="#">
                <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.jawSummary.title}
                </h5>
              </a>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {item.jawSummary.currentContextualSynopsis.text}
              </p>
              <a
                href="#"
                class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Read more
                <svg
                  class="w-3.5 h-3.5 ml-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default moive1;
