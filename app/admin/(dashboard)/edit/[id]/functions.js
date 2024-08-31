export const deleteOldImagesFunction = function (setId, remvId, public_id) {
  console.log(public_id);
  setId((prev) => [...prev, public_id]);
  remvId((images) => {
    const newImages = images.filter((image) => image.public_id !== public_id);
    return newImages;
  });
};
