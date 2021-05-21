exports.getCollections = (req, res) => {
  let currentCollections = [
    { header: "All The Cloth You Like in One Place", image: "/photo.png" },
    { header: "All The Cloth You Like in One Place", image: "/photo2.jpg" },
    { header: "All The Cloth You Like ", image: "/photo3.jpg" },
  ];
  res.send(currentCollections);
};
