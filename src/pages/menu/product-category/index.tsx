import { View } from '@tarojs/components';
import './index.scss';


function ProductCategory({ categorys, currentCategoryIndex = 0, onChangeCategory }) {

  const productCategoryItemClass = (index) => {
    return `product-category-item ${currentCategoryIndex === index ? 'product-category-item-active' : ''}`;
  };


  return (
    <>
      <View className="product-list-container">
        <View className="product-category-container">
          {categorys.map((category, index) => (
            <View
              key={index}
              className={productCategoryItemClass(index)}
              onClick={() => {
                onChangeCategory(index)
              }}
            >
              <View className="product-category-name">
                {category}
              </View>
            </View>
          ))}
        </View>
      </View>
    </>
  );
}

export default ProductCategory;

