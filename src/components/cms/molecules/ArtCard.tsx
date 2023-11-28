const ArtCard = ({ artwork }) => {
  return (
    <div>
      <div>
        <img src={artwork.imgSrc} alt={artwork.title} />
      </div>
      <h4>{artwork.title}</h4>
      <p>{artwork.dimensions}</p>
      <p>{artwork.medium}</p>
      <p>{artwork.price}</p>
    </div>
  )
}

export default ArtCard;