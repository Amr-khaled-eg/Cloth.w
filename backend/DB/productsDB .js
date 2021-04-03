// const uploadProduct = async (Collection, product) => {
//   if (product === undefined || product === {}) {
//     return {};
//   } else {
//     try {
//       let prod = new Collection({ product });
//       let result = await prod.save();
//       return result;
//     } catch (err) {
//       console.error(err);
//       return {};
//     }
//   }
// };
// const getProducts = async (Collection, product) => {
//   try {
//     let result = await Collection.find(product);
//     return result;
//   } catch (err) {
//     console.error(err);
//     return {};
//   }
// };

module.exports = {
  uploadProduct,
  getProducts,
};
