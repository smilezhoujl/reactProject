import { fakeKqWarnData } from '@/services/api';

export default {
    namespace: 'kqwarn',

    state: {
        firstDatasource: [],
        secondDatasource: [],
    },
    effects: {
        *fetchKqWarnData({ payload }, { call, put }) {
            console.log('### ......')
            const response = yield call(fakeKqWarnData, payload);
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
