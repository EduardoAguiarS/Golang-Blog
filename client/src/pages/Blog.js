import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Blog = () => {
  const params = useParams();

  const [apiData, setApiData] = useState(false);
  const [showModal, setShowModal] = useState(false);

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

  const deleteData = async () => {
    const apiUrl = `http://127.0.0.1:3200/${params.id}`;
    try {
      const response = await axios.delete(apiUrl);
      if (response.status === 200) {
        if (response?.data?.statusText === "OK") {
          setApiData(false);
        }
      }

      setShowModal(false);
      window.location.href = "/";
    } catch (error) {
      console.log(error);
    }
  };

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

          <div className="w-full flex justify-center pb-4">
            <Link
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 border border-gray- px-4 rounded-full uppercase"
              to={`/edit/${apiData?.id}`}
            >
              Edit
            </Link>
            {/* Delete button and confirmation modal */}
            <button
              className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 border border-gray- px-4 rounded-full uppercase ml-2"
              onClick={() => {
                setShowModal(true);
              }}
            >
              Delete
            </button>
            {showModal && (
              <div
                className="fixed inset-0 z-50"
                onClick={() => setShowModal(false)}
              >
                <div
                  className="fixed inset-0 bg-gray-500 opacity-75"
                  onClick={(e) => e.stopPropagation()}
                ></div>
                <div className="fixed inset-0 flex items-center justify-center p-4">
                  <div className="bg-white p-6 rounded-lg">
                    <p className="text-gray-700">
                      Are you sure you want to delete this blog?
                    </p>
                    <div className="flex justify-end mt-4">
                      <button
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 border border-gray- px-4 rounded-full uppercase"
                        onClick={() => deleteData()}
                      >
                        Yes
                      </button>
                      <button
                        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 border border-gray- px-4 rounded-full uppercase ml-2"
                        onClick={() => setShowModal(false)}
                      >
                        No
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Blog;
