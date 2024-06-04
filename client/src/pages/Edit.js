import Form from "../components/Form";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BacktoHome from "../components/BackToHome";

const Edit = () => {
  const params = useParams();
  // Get title and body
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = `http://127.0.0.1:3200/${params.id}`;

      try {
        const response = await axios.get(apiUrl);
        if (response.status === 200) {
          if (response?.data?.statusText === "OK") {
            setTitle(response?.data?.data?.title);
            setBody(response?.data?.data?.body);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.id]);

  return (
    <>
      <div className="container flex flex-wrap pt-6 mx-auto z-10 justify-center">
        <div className="blur-none">
          <h1 className="text-3xl text-gray-300 font-bold uppercase">
            Edit Blog
          </h1>
        </div>
      </div>

      <Form title={title} body={body} />

      <BacktoHome />
    </>
  );
};

export default Edit;
