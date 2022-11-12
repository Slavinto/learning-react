const Description = ({ imageIndex, galleryDataArray }) => {
  const currentImageInfo = galleryDataArray[imageIndex];
  const { name, artist, description, url, alt } = currentImageInfo;
  const textStyle = {
    lineHeight: "5px",
  };
  return (
    <div>
      <h1 style={textStyle}>{name}</h1>
      <div>
        ({imageIndex + 1} of {galleryDataArray.length})
      </div>
      <img
        src={url}
        alt={alt}
        style={{
          margin: "30px 0px",
          width: "200px",
          border: "1px solid black",
        }}
      />
      <div style={{ width: "600px" }}>{description}</div>
    </div>
  );
};

export default Description;
