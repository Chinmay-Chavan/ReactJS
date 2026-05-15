import 'react'
import { useState } from 'react'

const App = () => {

 

  const [title, setTitle] = useState('') ;

  const [description, setDescription] = useState('') ;

  const [notes, setNotes] = useState([]) ;

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const copyTask = [...notes];

    copyTask.push({title, description});

    setNotes(copyTask)

  


    setTitle('')
    setDescription('')
  }

  const handleDelete = (index) => {

    const copyTask = [...notes];

    copyTask.splice(index, 1);

    setNotes(copyTask)
  }

  return (
    <div className='w-full min-h-screen flex flex-col md:flex-row bg-black'>

      {/* Form left side */}
      <div className='w-full md:w-2/5 lg:w-1/3 md:min-h-screen md:sticky md:top-0 p-6 sm:p-8 flex flex-col md:border-r border-gray-700'>

        <h1 className='text-white text-xl sm:text-2xl font-bold mb-4'>Add Note</h1>

        <form className='flex flex-col gap-4 w-full' onSubmit={(e) =>
          handleSubmit(e)
        }>

          <input
            type="text"
            placeholder='Title'
            className='w-full border-2 border-gray-600 focus:border-white rounded-lg p-3 text-white font-medium bg-transparent outline-none transition-colors'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <textarea
            placeholder='Description'
            className='w-full border-2 border-gray-600 focus:border-white rounded-lg p-3 text-white bg-transparent outline-none transition-colors resize-none min-h-32 sm:min-h-40'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            type='submit'
            className='w-full bg-white text-black p-3 rounded-lg font-semibold active:scale-95 hover:bg-gray-200 transition-all cursor-pointer'
          >
            Add Note
          </button>

        </form>
      </div>

      {/* Notes right side */}
      <div className='w-full md:w-3/5 lg:w-2/3 p-6 sm:p-8 flex flex-col'>

        <h1 className='text-xl sm:text-2xl font-bold mb-6 text-white'>Your Notes</h1>

        {/* Notes grid: 1 col mobile → 2 col sm → 3 col xl */}
        <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6'>

          {notes.map((elem, idx) => (
            <div
              key={idx}
              className="del2 bg-cover bg-center w-full h-56 sm:h-60 bg-gray-200 p-4 flex flex-col justify-between overflow-auto rounded-lg"
              style={{
                backgroundImage: "url('https://image.slidesdocs.com/responsive-images/docs/decorative-sticky-notes-with-pushpins-in-simple-label-pattern-page-border-background-word-template_2834b9d0fb__1131_1600.jpg')",
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              <div>
                <h2 className='text-base sm:text-lg font-bold mb-2 text-black'>{elem.title}</h2>
                <p className='text-xs sm:text-sm text-gray-700 line-clamp-4'>{elem.description}</p>
              </div>

              <button className='mt-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 text-sm rounded-md font-medium cursor-pointer transition-colors self-start' onClick={() => handleDelete(idx)}>
                Delete
              </button>
            </div>
          ))}

            
        </div>
      </div>

    </div>
  )
}

export default App