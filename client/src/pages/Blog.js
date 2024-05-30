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

  console.log(apiData);

  return (
    <>
      <div className="container flex flex-wrap pt-6 mx-auto z-10">
        <div className="blur-none">
          <h1>Blog Datail</h1>
        </div>
      </div>
    </>
  );
};

export default Blog;
