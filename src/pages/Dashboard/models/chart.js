import { fakeChartData } from '@/services/api';

export default {
  namespace: 'chart',

  state: {
    visitData: [],
    visitData2: [],
    salesData: [],
    searchData: [],
    offlineData: [],
    offlineChartData: [],
    salesTypeData: [],
    salesTypeDataOnline: [],
    salesTypeDataOffline: [],
    radarData: [],
    loading: false,
  },

  effects: {
    *fetch(_, { call, put }) {
      console.log('effects *fetch load data ...')
      const response = yield call(fakeChartData);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchSalesData(_, { call, put }) {
      // yield call 通过 redux-saga 发起异步请求（比如从服务端加载数据）
      const response = yield call(fakeChartData);
      // yield put 发起 dispatch (action) 更新state状态
      yield put({
        type: 'save',
        payload: {
          salesData: response.salesData,
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
    clear() {
      return {
        visitData: [],
        visitData2: [],
        salesData: [],
        searchData: [],
        offlineData: [],
        offlineChartData: [],
        salesTypeData: [],
        salesTypeDataOnline: [],
        salesTypeDataOffline: [],
        radarData: [],
      };
    },
  },
};
