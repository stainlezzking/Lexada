export const getListings = async function () {
  const data = await fetch(`${process.env.URL}/api/listings`, {
    next: {
      tags: ["listings"],
    },
  });
  return await data.json();
};

export const getProperty = async function (id) {
  const response = await fetch(`${process.env.URL}/api/listings/${id}`, {
    next: { tags: ["listings"] },
  }).then((data) => data.json());
  return response;
};
