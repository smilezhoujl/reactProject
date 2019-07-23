import { fakeChartData2 , fakeOfflineData , fakeStepLineData } from '@/services/api';

export default {
    namespace: 'vpedata',
    state: {
        visitData:[],
        visitData2:[],
        salesData:[],
        searchData:[],
        vpeTags : [],
        offlineData : [],
        offlineChartData : [] ,
        loadingdata: 'load vpedata state data',
        x_data_1 : [] ,
        x_data_2 : [] ,
        series_1 : [] ,
        series_2 : []
    },
    effects: {
        *fetch(_, { call, put }) {
            console.log('vpedata effects *fetch load data ...')
            const response = yield call(fakeChartData2);
            yield put({
                type: 'save',
                payload: response,
            });
        },
        *fetchOfflineData({ payload }, { call, put }) {
            console.log('### effects fetchOfflineData is ### ->' + payload.data)
            // yield call 通过 redux-saga 发起异步请求（比如从服务端加载数据）
            const response = yield call(fakeOfflineData , payload.data);
            console.log('offline data is ->' + JSON.stringify(response.resultData))
            console.log('offline table data is ->' + JSON.stringify(response.tableResultData))
            //yield put 发起 dispatch (action) 更新state状态
            yield put({
              type: 'save',
              payload: {
                offlineChartData: response.resultData,
                searchData : response.tableResultData
              },
            });
            // yield select 通过 redux-saga 从 state 获取数据
            // const todos = yield select(state => state.todos)
        },
        *fetchStepsLineData(payload , { call ,put }) {
            console.log('fetchStepsLineData @@@@@ --->' + payload.data )
            const response = yield call(fakeStepLineData , payload.data || "MAN");
            
            yield put({
                type: 'svaeStepslineData' ,
                x_data_1 : response.x_data_1 ,
                x_data_2 : response.x_data_2 ,
                series_1 : response.series_1 ,
                series_2 : response.series_2
            })
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
        svaeStepslineData(state , action){
            return {
                ...state ,
                x_data_1 : action.x_data_1 ,
                x_data_2 : action.x_data_2 ,
                series_1 : action.series_1 ,
                series_2 : action.series_2
            };
        },
        clear() {
          return {
            vpetabledata : [],
            vpeTags :[]
          }
        }
    }
}