module.exports = {
  publicPath: "/need-for-drive/",
  devServer: {
    proxy: "https://api-factory.simbirsoft1.com/api/db"
  },
};