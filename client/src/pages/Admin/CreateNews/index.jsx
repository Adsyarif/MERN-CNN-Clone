import React, { useState, useEffect } from "react";
import { TextEditor } from "../../../components/Admin";
import { useNewsOptions } from "../../../hooks";
import axios from "axios";
import { BASE_URL } from "../../../lib/apis";

const CreateNews = () => {
  const [error, setError] = useState("");
  const { newsTypes, newsCategories, newsTags } = useNewsOptions();
  const [newsSubCategories, setNewsSubCategories] = useState([]);
  const [previewUrl, setPreviewUrl] = useState("");
  const [liveUpdateTypes, setLiveUpdateTypes] = useState({
    liveUpdateTypesCollection: [],
    selecetedLiveUpdateType: "",
    liveUpdateHeadline: "",
  });
  const [article, setArticles] = useState({
    title: "",
    selectedNewsType: "Select News Type",
    selectedMedia: {
      selectedFile: "",
      fileType: "",
      fileSize: "",
    },
    selectedNewsCategory: "Select News Category",
    selectedNewsSubCategory: "Select News Sub Category",
    author: "",
    content: "",
    selectedNewsTag: "Select News Tag",
  });

  useEffect(() => {
    return () => {
      if (previewUrl.startsWith("blob:")) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    // Handle form submission here
    console.log("Submitting form", article);
  };

  const allowedFileTypes = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/gif",
    "video/mp4",
    "video/webm",
    "video/ogg",
  ];

  useEffect(() => {
    if (article.newsTypes === "Live Update") {
      const getLiveUpdate = async () => {
        const liveUpdateResponse = await axios.get(
          `${BASE_URL}/api/lastFiveLiveUpdateType`
        );

        setLiveUpdateTypes((prev) => ({
          ...prev,
          liveUpdateTypesCollection: liveUpdateResponse.data,
        }));
      };
      getLiveUpdate();
    }
  }, [article.newsTypes]);

  const handleInputChange = (event) => {
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
      case "file":
        const file = event.target.files[0];
        const maxFileSizeInBytes = 50 * 1024 * 1024;
        if (file) {
          if (file.size > maxFileSizeInBytes) {
            setError("File size exceeds the maximum allowed size.");
            return;
          }
          const fileType = file.type.split("/")[0];
          setError("");

          setArticles((prev) => ({
            ...prev,
            selectedMedia: {
              selectedFile: file,
              fileType: fileType,
              fileSize: file.size,
            },
          }));

          if (allowedFileTypes.includes(file.type)) {
            if (fileType === "image") {
              const reader = new FileReader();
              reader.onloadend = () => {
                setPreviewUrl(reader.result);
              };
              reader.readAsDataURL(file);
            } else if (fileType === "video") {
              setPreviewUrl(URL.createObjectURL(file));
            }
          }
        }
        break;
      case "newsCategory":
        const categoryName = event.target.value;
        setArticles((prev) => ({
          ...prev,
          selectedNewsCategory: categoryName,
        }));

        newsCategories.map((category) => {
          if (category.title === categoryName) {
            setNewsSubCategories(category.items);
          }
        });

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
      case "newsTag":
        setArticles((prev) => ({
          ...prev,
          selectedNewsTag: event.target.value,
        }));
        break;
      default:
        console.log("Unknown input form.");
    }
  };

  const handleTextEditorChange = (content) => {
    setArticles((prev) => ({
      ...prev,
      content: content,
    }));
  };

  const handleCancelFile = () => {
    setPreviewUrl("");
  };

  const handleLiveUpdateTypeChange = (event) => {
    const currentLiveUpdateTypeCollection =
      liveUpdateTypes.liveUpdateTypesCollection;

    currentLiveUpdateTypeCollection.map((type) => {
      const typeLower = type.toLower.toLowerCase();
      const newType = event.target.value.toLowerCase();
      if (typeLower !== newType) {
        currentLiveUpdateTypeCollection.push(event.target.value);
      }
    });
    setLiveUpdateTypes((prev) => ({
      ...prev,
      liveUpdateTypesCollection: currentLiveUpdateTypeCollection,
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
                {newsTypes.map((type) => (
                  <option key={type._id} value={type.name}>
                    {type.name}
                  </option>
                ))}
              </select>
            </div>

            {article.selectedNewsType === "LiveUpdate" && (
              <>
                {liveUpdateTypes.liveUpdateTypesCollection.length !== 0 ? (
                  <div className=" bg-yellow-100 px-4 mb-10 rounded">
                    <div className="flex justify-between py-5">
                      <div className=" w-full">
                        <label
                          htmlFor="title"
                          className="block text-sm font-medium text-gray-600"
                        >
                          Live Update News Type
                        </label>
                        <input
                          type="text"
                          id="LiveUpdateType"
                          name="LiveUpdateType"
                          placeholder="eg: e-sport"
                          onChange={handleLiveUpdateTypeChange}
                          className="mt-2 p-3 mr-2 bg-gray-200 focus:outline-none w-full border rounded-md"
                          required
                        />
                      </div>
                      <p className=" font-medium text-xs flex items-center mb-2 ml-2 text-gray-600">
                        OR
                      </p>
                      <div className=" w-full">
                        <label
                          htmlFor="LiveUpdateType"
                          className="block text-sm font-medium  ml-2.5 text-gray-600"
                        >
                          Live Update News Type
                        </label>
                        <select
                          id="LiveUpdateType"
                          name="LiveUpdateType"
                          value={liveUpdateTypes.selecetedLiveUpdateType}
                          onChange={handleLiveUpdateTypeChange}
                          className="mt-2 p-[0.95rem] ml-2 bg-gray-200 focus:outline-none w-full border rounded-md"
                        >
                          <option value="" disabled>
                            Select Live News Type
                          </option>
                          {liveUpdateTypes.liveUpdateTypesCollection.map(
                            (type) => (
                              <option key={type} value={type}>
                                {type}
                              </option>
                            )
                          )}
                        </select>
                      </div>
                    </div>
                    <div className="pb-5">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Live Update Main Headline
                      </label>
                      <input
                        type="text"
                        id="LiveUpdateType"
                        name="LiveUpdateType"
                        value={liveUpdateTypes.liveUpdateHeadline}
                        onChange={(e) => {
                          setLiveUpdateTypes((prev) => ({
                            ...prev,
                            liveUpdateHeadline: e.target.value,
                          }));
                        }}
                        placeholder="Live Update Main Headline"
                        className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                        required
                      />
                    </div>
                  </div>
                ) : (
                  <div className=" bg-yellow-200 px-4 mb-10 rounded">
                    <div className="py-5">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Live Update News Type
                      </label>
                      <input
                        type="text"
                        id="LiveUpdateType"
                        name="LiveUpdateType"
                        placeholder="eg: e-sports"
                        onChange={handleLiveUpdateTypeChange}
                        className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                        required
                      />
                    </div>
                    <div className="pb-5">
                      <label
                        htmlFor="title"
                        className="block text-sm font-medium text-gray-600"
                      >
                        Live Update Main Headline
                      </label>
                      <input
                        type="text"
                        id="LiveUpdateType"
                        name="LiveUpdateType"
                        value={liveUpdateTypes.liveUpdateHeadline}
                        onChange={(e) => {
                          setLiveUpdateTypes((prev) => ({
                            ...prev,
                            liveUpdateHeadline: e.target.value,
                          }));
                        }}
                        placeholder="Live Update Main Headline"
                        className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                        required
                      />
                    </div>
                  </div>
                )}
              </>
            )}

            <div className="mb-10">
              <label className="block text-sm font-medium text-gray-600">
                Upload File
              </label>
              <input
                type="file"
                id="file"
                name="file"
                onChange={handleInputChange}
                className="sr-only mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
                accept="image/*, video/*"
              />
              <label
                htmlFor="file"
                className="mt-1 p-2 w-full cursor-pointer border border-gray-300 rounded-md flex items-center justify-center bg-blue-600 text-white hover:bg-gray-900"
              >
                Select Image or Video
              </label>
              {error && <p className="text-red-500">{error}</p>}
              {previewUrl && (
                <div className="mt-2 flex justify-center relative">
                  <button
                    className="absolute right-2 cursor-pointer z-999"
                    onClick={handleCancelFile}
                  >
                    x
                  </button>
                  {article.selectedMedia.fileType === "image" && (
                    <img
                      src={previewUrl}
                      alt="Preview image"
                      className="max-w-full h-96"
                    />
                  )}
                  {article.selectedMedia.fileType === "video" && (
                    <video
                      src={previewUrl}
                      className="w-100 object-cover"
                      controls
                    >
                      <source
                        src={previewUrl}
                        type={article.selectedMedia.selectedFile.type}
                      />
                      Your browser does not support the video tag.
                    </video>
                  )}
                </div>
              )}
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
                {newsCategories.map((category) => (
                  <option key={category._id} value={category.title}>
                    {category.title}
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
                {newsSubCategories.map((subCategory) => (
                  <option key={subCategory._id} value={subCategory.name}>
                    {subCategory.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="mb-10">
              <label htmlFor="newsTag" className="block text-sm text-gray-600">
                News Tag
              </label>
              <select
                id="newsTag"
                name="news-tag"
                value={article.selectedNewsTag}
                onChange={handleInputChange}
                className="mt-2 p-3 bg-gray-200 focus:outline-none w-full border rounded-md"
              >
                <option disabled>Select News Tag</option>
                {newsTags.map((newsTag) => (
                  <option key={newsTag._id} value={newsTag.name}>
                    {newsTag.name}
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
            <div className="mb-10">
              <button
                type="submit"
                className="bg-blue-600 text-white w-full p-3 rounded-md"
              >
                Publish
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateNews;
