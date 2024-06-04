const BacktoHome = () => {
  return (
    <div className="blur-none w-full">
      <button
        className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 border border-gray- px-4 rounded-full uppercase blur-none mx-auto mt-10 block"
        onClick={() => {
          window.location.href = "/";
        }}
      >
        Back to Home
      </button>
    </div>
  );
};

export default BacktoHome;
