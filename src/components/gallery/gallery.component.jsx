import { sculptureList } from "../../data/sculpture-list.data.js";
import { useState } from "react";
import NavigationButton from "../navigation-button/navigation-button.component.jsx";
import Description from "../description/description.component.jsx";

const Gallery = () => {
  const [curImg, setCurImg] = useState(0);
  return (
    <div style={{ paddingLeft: "30px" }}>
      <NavigationButton
        imageIndex={curImg}
        setImageIndex={setCurImg}
        lastIndex={sculptureList.length - 1}
      />
      <Description imageIndex={curImg} galleryDataArray={sculptureList} />
    </div>
  );
};

export default Gallery;
