import { fakePriceTagDetailsData , fakeOfflinePriceTagData } from '@/services/api';

export default {
  namespace: 'pricetagdetails',

  state: {
    userInfo: [],
    application: [],
    basicGoods: [],
    basicProgress: [],
    stepdatas: [],
    catagorydatas: [],
    categorynames: [],
    loading: false,
    currentTabKey: 'A',
    offlineData: [],
    offlineChartData: [],
    searchData:[],
  },
  effects: {
    *fetchPriceTagDetails({ payload }, { call, put }) {
      const response = yield call(fakePriceTagDetailsData, payload);
      yield put({
        type: 'save',
        payload: {
          userInfo: response.userInfo,
          stepdatas: response.stepdatas,
          catagorydatas: response.catagorydatas,
          categorynames: response.categorynames,
          offlineData: response.offlineData,
          offlineChartData: response.offlineChartData
        },
      });
    },
    *fetchOfflinePriceTagData({ payload }, { call, put }) {
      console.log('@@@payload.data-->'+payload.data)
      // yield call 通过 redux-saga 发起异步请求（比如从服务端加载数据）
      const response = yield call(fakeOfflinePriceTagData, payload.data);
      //yield put 发起 dispatch (action) 更新state状态
      yield put({
        type: 'save',
        payload: {
          offlineChartData: response.resultData,
          searchData: response.tableResultData
        },
      });
      // yield select 通过 redux-saga 从 state 获取数据
      // const todos = yield select(state => state.todos)
    },
  },

  reducers: {
    save(state, { payload }) {
      return {
        ...state,
        ...payload,
      };
    },
  },
};
