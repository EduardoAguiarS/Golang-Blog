import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const params = useParams();

  const [apiData, setApiData] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `http://127.0.0.1:3200/${params.id}`;
      try {
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          if (response?.data?.statusText === "OK") {
            setApiData(response?.data?.data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
    return () => {};
  }, [params.id]);

  return (
    <>
      <div className="container flex flex-wrap pt-6 mx-auto z-10 justify-center">
        <div className="blur-none">
          <h1 className="text-3xl text-gray-300 font-bold uppercase">
            Blog Datail
          </h1>
        </div>
      </div>
      {apiData && (
        <div className="container md:w-1/2 w-11/12 flex flex-wrap mx-auto mt-6 z-10 backdrop-blur bg-white/30 shadow-2xl border border-gray-200 rounded">
          <div className="p-4 w-full">
            <h1 className="text-2xl text-gray-700 font-bold uppercase block mx-auto text-center">
              {apiData?.title}
            </h1>
            <p className="text-gray-700 mt-2 text-center">{apiData?.body}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
