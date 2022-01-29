export const calculateFaceLocation = (data) => {
  const image = document.getElementById("box");
  const width = image.width;
  const height = image.height;

  return {
    topRow: data.top_row * height,
    bottomRow: height - data.bottom_row * height,
    leftCol: data.left_col * width,
    rightCol: width - data.right_col * width,
  };
};
