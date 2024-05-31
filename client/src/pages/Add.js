import Form from "../components/Form";

const Add = () => {
  return (
    <>
      <div className="container flex flex-wrap pt-6 mx-auto z-10 justify-center">
        <div className="blur-none">
          <h1 className="text-3xl text-gray-300 font-bold uppercase">
            Add Blog
          </h1>
        </div>
      </div>

      <Form />
    </>
  );
};

export default Add;
