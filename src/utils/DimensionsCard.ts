export const DimensionsCard = (displayEssentials: any, doubleSection: any) => {
  if (displayEssentials) {
    return {
      width: "100%",
      height: "300px",
    };
  } else if (doubleSection) {
    return {
      width: "400px",
      height: "250px",
    };
  }

  return {
    width: "100%",
    height: "200px",
  };
};
