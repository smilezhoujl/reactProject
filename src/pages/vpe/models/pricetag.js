import { fakePriceTagData , fakePriceTagDetailsData } from '@/services/api';

export default {
  namespace: 'pricetag',

  state: {
    data: {
      list: [],
      pagination: {},
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
