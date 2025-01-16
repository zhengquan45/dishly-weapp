import { useEffect, useState } from 'react';
import { View } from '@tarojs/components';
import './index.scss';
import SplitOrder from './split-order';
import ProductItem from '../product-item';
import { useSelector } from "react-redux";
import { InfiniteLoading } from '@nutui/nutui-react-taro';
import Taro from '@tarojs/taro';
import request from 'src/utils/request';

interface RootState {
  items: Item[];
}

function ProductList({categorys,currentCategoryIndex}) {
  const [currentPage, setCurrentPage] = useState(1); // 当前页码
  const [hasMore, setHasMore] = useState(true); // 是否还有更多数据
  const [list, setList] = useState<ProductItemProps[]>([]); // 产品列表

  const items = useSelector((state: RootState) => state.items); // 获取 items 状态

  const getItemsNum = (id) => {
    const item = items.find((item) => item.productItem.id === id);
    return item ? item.num : 0;
  };

  const getData = async (reset: boolean = false) => {
    const res = await request({
      url: '/api/product',
      data: {
        current: currentPage,
        pageSize: 6,
        category: categorys[currentCategoryIndex], // 当前分类
      }
    });
    console.log('Data format success:', res);
    const newData = res.data;

    // 如果是第一次加载或者切换分类时，重置数据
    if (reset) {
      setList(newData);
    } else {
      setList((prevList) => [...prevList, ...newData]);
    }

    // 如果返回的数据小于页面大小，表示没有更多数据了
    setHasMore(newData.length === 6); // 如果返回数据不足一页，则没有更多数据
      
  };

  const loadMore = async () => {
    if (hasMore) {
      setCurrentPage(currentPage + 1);
    }
  };

  // 每次页码变化时重新请求数据
  useEffect(() => {
    getData(currentPage === 1); // 如果是第一页请求，重置数据
  }, [currentPage]); // 当currentPage变化时重新请求数据

  return (
    <>
      <View className="product-item-list">
          <View className="product-item-list-body" id="scroll">
            <InfiniteLoading
              target="scroll"
              hasMore={hasMore}
              onLoadMore={loadMore}
            >
              {currentCategoryIndex === 0 && <SplitOrder />}
              {list.map((item, index) => (
                <ProductItem key={index} productItem={item} itemNum={getItemsNum(item.id)} />
              ))}
            </InfiniteLoading>
          </View>
        </View>
    </>
  );
}

export default ProductList;

