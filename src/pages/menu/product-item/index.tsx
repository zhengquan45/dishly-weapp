import { View } from '@tarojs/components'
import './index.scss'
import { IconFont } from '@nutui/icons-react-taro'
import { Price } from '@nutui/nutui-react-taro'
import { plusItem, minusItem } from "src/actions/items";
import { useDispatch } from "react-redux";

function ProductItem({productItem, itemNum}) {
  const dispatch = useDispatch();

   const addItem = (id: number) => {
    dispatch(plusItem(id));
  };

  const reduceItem = (id: number) => {
    dispatch(minusItem(id));
  };

  return (
      <>
       <View className='product-item'>
              <View className='product-item-image'>
                <img src={productItem.imageUrl} />
              </View>
              <View className='product-item-info'>
                <View className='product-item-title'>{productItem.name}</View>
                <View className='product-item-subtitle'>{productItem.subName}</View>
                <View className='product-item-price'>
                  <Price style={{color:'#000'}} price={productItem.price} size="normal" thousands />
                </View>
                <View style={{position: 'absolute',right:0,bottom: 0,display:'flex',alignItems:'center'}}>
                  {
                    itemNum > 0 ? 
                    (
                      <>
                        <IconFont color='#ff0000' fontClassName='iconfont' classPrefix='icon' name='minus' onClick={()=>{
                          reduceItem(productItem)
                        }}/>
                        <span style={{fontSize:16,margin:'0px 10px'}}>{itemNum}</span>
                        <IconFont color='#ff0000' fontClassName='iconfont' classPrefix='icon' name='plus' onClick={()=>{
                          addItem(productItem)
                        }}/>
                      </>
                    ):
                    (
                      <IconFont color='#ff0000' fontClassName='iconfont' classPrefix='icon' name='plus' onClick={()=>{
                        addItem(productItem)
                      }}/>
                    )
                  }
                </View>
               
              </View>
        </View>
      </>
  )
}

export default ProductItem
