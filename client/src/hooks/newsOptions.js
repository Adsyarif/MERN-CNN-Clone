import { useState, useEffect } from "react";
import { BASE_URL } from "../lib/apis";
import axios from "axios";

export const useNewsOptions = () => {
  const [newsOptions, setNewsOptions] = useState({
    newsTypes: [],
    newsCategories: [],
    newsSubCategories: [],
    newsTags: [],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const typeResponse = await axios.get(`${BASE_URL}/api/newsTypes`);
        const categoryResponse = await axios.get(
          `${BASE_URL}/api/newsCategories`
        );
        const tagResponse = await axios.get(`${BASE_URL}/api/newsTags`);

        setNewsOptions({
          newsTypes: typeResponse.data,
          newsCategories: categoryResponse.data,
          newsTags: tagResponse.data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return {
    newsTypes: newsOptions.newsTypes,
    newsCategories: newsOptions.newsCategories,
    newsSubCategories: [],
    newsTags: newsOptions.newsTags,
  };
};
