import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [apiData, setApiData] = useState(false)
  useEffect(() => {
    const fetchData = async () => {
      const apiUrl = "http://127.0.0.1:3200"
      try {
        const response = await axios.get(apiUrl)
        if (response.status === 200) {
          if (response?.data?.statusText === "OK") {
            setApiData(response?.data?.data)
          }
        }
      } catch (error) {
        console.log(error)
      }
    }
    
    fetchData()
    return () => {}
  }, [])
  
  console.log(apiData)

  return (
    <>
      <div className="container flex flex-wrap px-5 mx-auto">
        {apiData && (
          apiData.map((data, index) => (
            // responsive layout 3 cards in desktop, 2 in tablet, 1 in mobile
              <div className="lg:w-1/3 sm:w-1/2 p-4">
                <div className="bg-gray-100 px-8 pt-16 pb-16 rounded-3xl">
                  <img src={data.image} alt="" />
                  <h2 className="text-3xl text-gray-700 font-bold my-2">{data.title}</h2>
                  <p className="leading-relaxed mb-3 text-gray-600">{data.body}</p>
                  <a className="text-indigo-500 inline-flex items-center">Learn More
                    <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                      <path d="M5 12h14M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
            
          ))
        )}
      </div>


      <div className="backdrop-blur-md shadow-2xl bg-white/30 px-3 md:w-1/5 w-2/3 py-3 gap-2 rounded-3xl flex md:flex-row flex-col items-center justify-center mx-auto fixed bottom-1 left-1/2 transform -translate-x-1/2 -translate-y-1/2 border-white/40 border ring-1 ring-gray-900/5 justify-between">
        <h1 className="text-gray-700 text-2xl font-bold uppercase">GO Fiber Blog</h1>
        <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full uppercase">New Blog</button>
      </div>

      {/* Create a new blog button  */}
      
    </>
  );
}

export default App;
