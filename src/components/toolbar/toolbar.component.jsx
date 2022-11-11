import Button from "../button/button.component.jsx";
import InteractiveButton from "../interactive-button/interactive-button.component.jsx";

const handlePlay = (e) => {
  e.stopPropagation();
  alert("Playing!");
};
const handleImageUpload = () => {
  alert("Uploading!");
};
const handleIBClick = () => {
  console.log("Interactive button clicked!");
};
const handleToolbarClick = () => {
  console.log("Toolbar click captured!");
};

const Toolbar = () => {
  return (
    // <div onClickCapture={handleToolbarClick}>
    <div>
      <Button onClick={handlePlay}>Play Movie</Button>
      <Button onClick={handleImageUpload}>Upload Image</Button>
      <InteractiveButton onClick={handleIBClick}> OK </InteractiveButton>
    </div>
  );
};

export default Toolbar;
