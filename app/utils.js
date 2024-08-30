export const getListings = async function () {
  const data = await fetch(`${process.env.URL}/api/listings`, {
    next: {
      tags: ["listings"],
    },
  });
  return await data.json();
};
