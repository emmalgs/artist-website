const ArtCard = ({ artwork }) => {
  return (
    <div className="art-card">
      <div>
        <img src={artwork.imgSrc} alt={artwork.title} height="200px" />
      </div>
      <h4>Title: {artwork.title}</h4>
      <p>Dimensions: {artwork.dimensions}</p>
      <p>Medium: {artwork.medium}</p>
      <p>{artwork.price ? `Price: ${artwork.price}` : ""}</p>
      <div>
        <button>Edit</button>
        <button>Delete</button>
      </div>
    </div>
  );
};

export default ArtCard;
