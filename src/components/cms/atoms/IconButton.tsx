const IconButton = ({ icon, type }) => {
  let iconStyle = ""

  if (type === "delete") {
    iconStyle = "text-red-700 hover:text-red-600"
  } else if (type === "edit") {
    iconStyle = "text-green-700 hover:text-green-600"
  } else if (type === "add") {
    iconStyle = "text-blue-700 hover:text-blue-600"
  }

  return (
    <button className={`${iconStyle} font-bold px-1 py-1`}>
      { icon }
    </button>
  )
}

export default IconButton;