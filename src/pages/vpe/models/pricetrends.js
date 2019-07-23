import { fakePriceTrendsData } from '@/services/api';

export default {
    namespace: 'pricetrends',
    state: {
        monthcategory : [],
        salesDatas:[],
        productPrices : [] ,
        threeAvgPrices : []
    },
    effects: {
        *fetchPriceTrendsData({ payload }, { call, put }) {
            console.log('### effects fakePriceTrendsData is ### ->' + payload.data)
            // yield call 通过 redux-saga 发起异步请求（比如从服务端加载数据）
            const response = yield call(fakePriceTrendsData , payload.data);
            console.log('offline data is ->' + JSON.stringify(response.category))
            //yield put 发起 dispatch (action) 更新state状态
            yield put({
              type: 'save',
              payload: {
                monthcategory : response.monthcategory,
                salesDatas: response.salesDatas,
                productPrices : response.productPrices,
                threeAvgPrices : response.threeAvgPrices,
              },
            });
            // yield select 通过 redux-saga 从 state 获取数据
            // const todos = yield select(state => state.todos)
        }
    },

    reducers: {
        save(state, { payload }) {
          // console.log(' ###### reducers save ...... ')
          return {
            ...state,
            ...payload,
          };
        },
        
        clear() {
          return {
            salesDatas:[],
            productPrices : [] ,
            threeAvgPrices : []
          }
        }
    }
}