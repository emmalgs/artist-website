

const IconButton = ({ icon }) => {
  return (
    <button className="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-3 border-b-2 border-blue-700 hover:border-blue-500 rounded">
      { icon }
    </button>
  )
}

export default IconButton;