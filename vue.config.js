process.env.VUE_APP_API = "5e25c641099b810b946c5d5b";
process.env.CAR_IMAGE_PATH = "https://api-factory.simbirsoft1.com";

module.exports = {
  publicPath: "/need-for-drive/",
  devServer: {
    proxy: "https://api-factory.simbirsoft1.com/api/db",
  },
};
