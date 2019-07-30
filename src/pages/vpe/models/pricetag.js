import { stringify } from 'qs';
import { fakePriceTagData , fakePriceTagDetailsData , queryPriceTagList } from '@/services/api';

export default {
  namespace: 'pricetag',

  state: {
    data: {
      list: [],
      pagination: {},
      expandForm : false ,
    },
  },
  effects: {
    *fetchPricTageData({ payload }, { call, put }) {
      //console.log('@@@ pricetag *fetch ... ')
      const response = yield call(fakePriceTagData, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
    *fetchPriceList({ payload }, { call, put }) {
      console.log('@@@ query fetchPriceList func ......')
      const response = yield call(queryPriceTagList, payload);
      yield put({
        type: 'save',
        payload: response,
      });
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  }
};
