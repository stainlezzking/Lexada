export const deleteOldImages = function (setId, remvId, id) {
  console.log("called funtion");
  setId((prev) => [...prev, id]);
  remvId((images) => {
    const newImages = images.filter((image) => image._id !== id);
    return newImages;
  });
};
