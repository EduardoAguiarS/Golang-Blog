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
       <div class="area fixed top-0" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >

      <div className="container flex flex-wrap pt-6 mx-auto">
        {apiData && (
          apiData.map((data, index) => (
            // responsive layout 3 cards in desktop, 2 in tablet, 1 in mobile
              <div className="lg:w-1/3 sm:w-1/2 p-4 ">
                <div className="bg-gray-100 px-5 rounded-3xl py-5 flex flex-col align-middle justify-center text-center backdrop-blur-md shadow-2xl bg-white/30">
                  <img src={data.image} alt="" className='rounded-3xl h-48 w-96 object-fill mx-auto'/>
                  <h2 className="text-3xl text-gray-700 font-bold my-2">{data.title}</h2>
                  {/* Limit the body to 28 characters */}
                  <p className="leading-relaxed mb-3 text-gray-700">{data.body.substring(0, 28) + "..."}</p>
                  <a className="text-indigo-700 inline-flex items-center text-center mx-auto">Learn More
                  </a>
                </div>
              </div>
            
          ))
        )}
      </div>

      <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 border border-gray- px-4 rounded-full uppercase fixed bottom-5 right-5 shadow-2xl">New Blog</button>
    </>
  );
}

export default App;
