import axios from 'axios';
import { useState, useEffect } from 'react';

const App = () => {
  const [images, setImage] = useState([]);
  const [page, setPage] = useState(1);
  const [select, setSelect] = useState(null);

  const handleImage = async () => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${page}&limit=24`);
    setImage(response.data);
  };

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    handleImage();
  }, [page]);

  return (
    <div className="p-5 bg-black min-h-screen text-white">
      <h1 className="text-xl font-semibold mb-4">Gallery</h1>

      {images.length === 0 ? (
        <div className="flex items-center justify-center h-[80vh]">
          <p className="text-gray-500 text-xl">Loading...</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {images.map((image) => (
            <div key={image.id} className="flex flex-col gap-1">
              <div className="w-full h-40 overflow-hidden rounded">
                <img
                  src={image.download_url}
                  alt={image.author}
                  className="w-full h-full object-cover cursor-pointer active:scale-95 transition-transform"
                  onClick={() => setSelect(image)}

                />
              </div>
              <p className="text-sm truncate">{image.author}</p>
            </div>
          ))}
        </div>
      )}


         {/* Modal */}
      {select && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelect(null)}
        >
          <div
            className="relative max-w-3xl w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="absolute -top-8 right-0 text-white text-2xl cursor-pointer"
              onClick={() => setSelect(null)}
            >
              ✕
            </button>
            <img
              src={select.download_url}
              alt={select.author}
              className="w-full rounded-lg"
            />
            <p className="text-center mt-2 text-gray-300">{select.author}</p>
          </div>
        </div>
      )}



      <div className="mt-10 text-center">
        <button
          className={`ml-2 px-4 py-1 rounded text-lg transition-transform ${
    page > 1
      ? 'bg-amber-400 cursor-pointer active:scale-95'
      : 'bg-gray-500 cursor-not-allowed opacity-50'
  }`}
          onClick={() => { 
            if (page > 1) 
            setPage(page - 1); 
          
            }}
        >
          Prev
        </button>
        <span className="mx-2 text-lg text-center p-2">Page {page}</span>
        <button
          className="ml-2 bg-amber-400 px-4 py-1 rounded text-lg cursor-pointer active:scale-95 transition-transform"
          onClick={() => setPage(page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;