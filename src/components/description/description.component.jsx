import ToggleDescription from "../toggle-description-button/toggle-description-button.component.jsx";

const Description = ({ imageIndex, galleryDataArray }) => {
  const currentImageInfo = galleryDataArray[imageIndex];
  const { name, artist, description, url, alt } = currentImageInfo;
  const textStyle = {
    lineHeight: "5px",
  };
  return (
    <div>
      <h2 style={textStyle}>
        {name} by {artist}
      </h2>
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
      <ToggleDescription description={description} />
    </div>
  );
};

export default Description;
