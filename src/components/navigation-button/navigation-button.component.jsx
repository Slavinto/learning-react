const NavigationButton = ({ imageIndex, setImageIndex, lastIndex }) => {
  const styleHidden = {
    display: "none",
  };

  const handleClickNext = () => {
    imageIndex < lastIndex
      ? setImageIndex(imageIndex + 1)
      : setImageIndex(imageIndex);
  };
  const handleClickPrev = () => {
    imageIndex > 0 ? setImageIndex(imageIndex - 1) : setImageIndex(imageIndex);
  };

  return (
    <div>
      <button style={imageIndex ? {} : styleHidden} onClick={handleClickPrev}>
        {"Prev"}
      </button>
      <button
        style={imageIndex < lastIndex ? {} : styleHidden}
        onClick={handleClickNext}
      >
        {"Next"}
      </button>
    </div>
  );
};

export default NavigationButton;

//   const btnPrev = imageIndex ? (
//     <NavigationButton imageIndex={imageIndex} setImageIndex={setImageIndex}>
//       Prev
//     </NavigationButton>
//   ) : (
//     ""
//   );

//   const navBtnArr = [].push(btnPrev);
//   const btnNext =
//     imageIndex < sculptureList.length ? (
//       <NavigationButton imageIndex={imageIndex} setImageIndex={setImageIndex}>
//         Next
//       </NavigationButton>
//     ) : (
//       ""
//     );

//   navBtnArr.push(btnNext);
