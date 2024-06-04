import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";

const Form = ({ title, body }) => {
  const { register, handleSubmit } = useForm();

  const saveForm = (data) => {
    const apiUrl = "http://127.0.0.1:3200";
    try {
      axios.post(apiUrl, data);
      setTimeout(() => {
        window.location.href = "/";
      });
    } catch (error) {
      alert(error);
    }
  };

  const params = useParams();
  const editForm = (data) => {
    const apiUrl = `http://127.0.0.1:3200/${params.id}`;
    try {
      console.log("Entrei");
      axios.put(apiUrl, data);
      setTimeout(() => {
        window.location.href = "/";
      });
    } catch (error) {
      alert(error);
    }
  };

  console.log(params.id);

  return (
    <form
      className="flex flex-col blur-none container mx-auto md:w-1/2 w-11/12"
      onSubmit={handleSubmit(params.id ? editForm : saveForm)}
    >
      <label className="text-2xl font-bold">Title</label>
      <input
        className="border-2 border-gray-300 rounded-md"
        type="text"
        name="title"
        id="title"
        {...register("title", { required: true })}
        defaultValue={title}
      />
      <label className="text-2xl font-bold mt-5">Body</label>
      <textarea
        className="border-2 border-gray-300 rounded-md"
        type="text"
        name="body"
        id="body"
        rows="10"
        {...register("body", { required: true })}
        defaultValue={body}
      />

      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 border border-gray- px-4 rounded-full uppercase mt-5"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
