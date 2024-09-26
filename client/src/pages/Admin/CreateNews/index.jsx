import React, { useState } from "react";
import { TextEditor } from "../../../components/Admin";

const CreateNews = () => {
  const [error, setError] = useState("");
  const [newsOptions, setNewsOptions] = useState({
    newsTypes: [],
    newsCategories: [],
    newsSubCategories: [],
  });
  const [article, setArticles] = useState({
    title: "",
    selectedNewsType: "",
    fileName: {},
    selectedNewsCategory: "",
    selectedNewsSubCategory: "",
    author: "",
    content: "",
  });

  const handleSubmit = async (event) => {
    console.log(event.target);
  };

  const handleInputChange = (event) => {
    console.log(event.target.id);
    switch (event.target.id) {
      case "title":
        setArticles((prev) => ({
          ...prev,
          title: event.target.value,
        }));
        break;
      case "newsType":
        setArticles((prev) => ({
          ...prev,
          selectedNewsType: event.target.value,
        }));
        break;
      case "fileName":
        const file = event.target.files[0];
        const maxFileSizeInBytes = 50 * 1024 * 1024;
        if (file) {
          if (file.size > maxFileSizeInBytes) {
            setError("File size is exceeds the maximum allowed size.");
            break;
          }

          const fileType = file.type.split("/")[0];
          if (fileType) {
          }
        }
        setArticles((prev) => ({
          ...prev,
          fileName: event.target.value,
        }));
        break;
      case "newsCategory":
        setArticles((prev) => ({
          ...prev,
          selectedNewsCategory: event.target.value,
        }));
        break;
      case "newsSubCategory":
        setArticles((prev) => ({
          ...prev,
          selectedNewsSubCategory: event.target.value,
        }));
        break;
      case "author":
        setArticles((prev) => ({
          ...prev,
          author: event.target.value,
        }));
        break;
      default:
        console.log("Input is unknow form.");
    }
  };

  const handleTextEditorChange = (content) => {
    setArticles((prev) => ({
      ...prev,
      content: content,
    }));
  };

  return (
    <div className="mt-28">
      <div className="mx-auto bg-white drop-shadow-md w-10/12 rounded">
        <h3 className="p-6 font-bold mb-8 text-black border-b">
          Write News Article
        </h3>
        <div className="container p-5">
          <form onSubmit={handleSubmit}>
            <div className="mb-10">
              <label htmlFor="title" className="block text-sm text-gray-600">
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={article.title}
                onChange={handleInputChange}
                className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
              />
            </div>
            <div className="mb-10">
              <label htmlFor="newsType" className="block text-sm text-gray-600">
                News Type
              </label>
              <select
                id="newsType"
                name="news-type"
                value={article.selectedNewsType}
                onChange={handleInputChange}
                className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
              >
                <option disabled>Select News Type</option>
                {newsOptions.newsTypes.map((type) => (
                  <option key={type._id} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-10">
              <label className="block text-sm font-medium text-gray-600">
                Upload File
              </label>
              <input
                type="file"
                id="file"
                name="file"
                value={article.fileName}
                onChange={handleInputChange}
                className="sr-only mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                accept="image/*, video/*"
                required
              />
              <label
                htmlFor="file"
                className="mt-1 p-2 w-full cursor-pointer border border-gray-300 rounded-md flex items-center justify-center bg-blue-600 text-white hover:bg-gray-900"
              >
                Select Image or Video
              </label>
            </div>
            <TextEditor
              placeholder="Write Something..."
              onChange={handleTextEditorChange}
              initialText={""}
            />
            <div className="mb-10"></div>
            <div className="mb-10">
              <label
                htmlFor="newsCategory"
                className="block text-sm text-gray-600"
              >
                News Category
              </label>
              <select
                id="newsCategory"
                name="news-category"
                value={article.selectedNewsCategory}
                onChange={handleInputChange}
                className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
              >
                <option disabled>Select News Category</option>
                {newsOptions.newsCategories.map((category) => (
                  <option key={category._id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-10">
              <label
                htmlFor="newsSubCategory"
                className="block text-sm text-gray-600"
              >
                News Sub Category
              </label>
              <select
                id="newsSubCategory"
                name="news-sub-category"
                value={article.selectedNewsSubCategory}
                onChange={handleInputChange}
                className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
              >
                <option disabled>Select News Sub Category</option>
                {newsOptions.newsSubCategories.map((subCategory) => (
                  <option key={subCategory._id} value={subCategory.name}>
                    {subCategory.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-10">
              <label htmlFor="author" className="block text-sm text-gray-600">
                Author
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={article.author}
                onChange={handleInputChange}
                className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNews;
