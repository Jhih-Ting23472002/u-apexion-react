const host = 'http://localhost:3001';
const ProductsConfig = {
  NEW_Products: `${host}/product/api/getProduct-New`,
  MEN_Products: `${host}/product/api/getProductMen`,
  Woman_Products: `${host}/product/api/getProductWoman`,
  Shoes_Products: `${host}/product/api/getProductShoes`,
  IMG_PATH: `${host}/img/product_img`,

  MEN_List: `${host}/product/api/getAllMen`,
  Woman_List: `${host}/product/api/getAllWoman`,
  Shoes_List: `${host}/product/api/getAllShoes`,
};
export default ProductsConfig;
