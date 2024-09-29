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
        const typeResponse = await axios.get(`${BASE_URL}/api/types`);
        // console.log(typeResponse.data);
        // const categoryResponse = await axios.get(`${BASE_URL}/api/categories`);
        // const subCategoryResponse = await axios.get(
        //   `${BASE_URL}/api/subCategories`
        // );
        // const newsTagsResponse = await axios.get(`${BASE_URL}/api/newsTags`);

        setNewsOptions({
          newsTypes: typeResponse.data,
          // newsCategories: categoryResponse.data,
          // newsSubCategories: subCategoryResponse.data,
          // newsTags: newsTagsResponse.data,
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return {
    newsTypes: newsOptions.newsTypes,
    newsCategories: [],
    newsSubCategories: [],
    newsTags: [],
  };
};
