import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [apiData, setApiData] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "http://127.0.0.1:3200";
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
  }, []);

  return (
    <div className="container flex flex-wrap pt-6 mx-auto">
      <>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 border border-gray- px-4 rounded-full uppercase fixed bottom-5 right-5 shadow-2xl">
          New Blog
        </button>
        {apiData &&
          apiData.map((data) => (
            <div className="lg:w-1/3 sm:w-1/2 p-4" key={data?.id}>
              <div className="bg-gray-100 rounded pb-5 flex flex-col align-middle justify-center text-center backdrop-blur-md shadow-2xl bg-white/30">
                <img
                  src={data?.image}
                  alt=""
                  className="w-full h-full imageCard object-fill md:mb-5"
                />
                <h2 className="text-3xl text-gray-700 font-bold my-2">
                  {data?.title}
                </h2>
                <p className="leading-relaxed mb-3 text-gray-700">
                  {data.body.substring(0, 28) + "..."}
                </p>
                <Link
                  className="text-indigo-700 inline-flex items-center text-center mx-auto"
                  to={`/blog/${data?.id}`}
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
      </>
    </div>
  );
};

export default Home;
