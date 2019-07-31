import { stringify } from 'qs';
import request from '@/utils/request';

export async function queryProjectNotice() {
  return request('/api/project/notice');
}

export async function queryActivities() {
  return request('/api/activities');
}

export async function queryRule(params) {
  return request(`/api/rule?${stringify(params)}`);
}

export async function removeRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'delete',
    },
  });
}

export async function addRule(params) {
  return request('/api/rule', {
    method: 'POST',
    data: {
      ...params,
      method: 'post',
    },
  });
}

export async function updateRule(params = {}) {
  return request(`/api/rule?${stringify(params.query)}`, {
    method: 'POST',
    data: {
      ...params.body,
      method: 'update',
    },
  });
}

export async function fakeSubmitForm(params) {
  return request('/api/forms', {
    method: 'POST',
    data: params,
  });
}

export async function fakeChartData() {
  return request('/api/fake_chart_data');
}

// load vpe data from local mock
export async function fakeChartData2(){
  return request('/api/fake_chart_data2');
}

export async function fakeOfflineData(params = {}){
  console.log('### api func params is ->' + params)
  return request('/api/fake_Offline_data', {
    method: 'POST',
    data: {'curr_tab_index' : params},
  });
}

// load echart data   
export async function fakeStepLineData(params = {}) {
  console.log('### api line func params is ->' + params)
  return request('/api/query_stepline_data', {
    method : 'POST' ,
    data: {'type_index' : params},
  });
}

// load fakePriceTrendsData 
export async function fakePriceTrendsData(params = {}) {
  console.log('### api PriceTrendsData func params is ->' + params)
  return request('/api/query_priceTrends_data', {
    method : 'POST' ,
    data: {'type_index' : params},
  });
}

// load price tag data
export async function fakePriceTagData(params) {
  return request(`/api/query_priceTag_data?${stringify(params)}`);
}

export async function queryPriceTagList(params) {
  return request(`/api/query_price_tag_list?${stringify(params)}`);
}

// load fakePriceTagDetailsData
export async function fakePriceTagDetailsData(id) {
  return request('/api/query_pricetagdetails_data',{
    method : 'POST' ,
    data: {'id' : id},
  });
}

// load fakeKqWarn data
export async function fakeKqWarnData() {
  return request('/api/fake_kqwarn_data');
}


export async function fakeOfflinePriceTagData(params = {}){
  return request('/api/fake_Offline_pricetag_data', {
    method: 'POST',
    data: {'curr_tab_index' : params},
  });
}


export async function queryTags() {
  return request('/api/tags'); 
}

export async function queryBasicProfile(id) {
  return request(`/api/profile/basic?id=${id}`);
}

export async function queryAdvancedProfile() {
  return request('/api/profile/advanced');
}

export async function queryFakeList(params) {
  return request(`/api/fake_list?${stringify(params)}`);
}

export async function removeFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    data: {
      ...restParams,
      method: 'delete',
    },
  });
}

export async function addFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    data: {
      ...restParams,
      method: 'post',
    },
  });
}

export async function updateFakeList(params) {
  const { count = 5, ...restParams } = params;
  return request(`/api/fake_list?count=${count}`, {
    method: 'POST',
    data: {
      ...restParams,
      method: 'update',
    },
  });
}

export async function fakeAccountLogin(params) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function fakeRegister(params) {
  return request('/api/register', {
    method: 'POST',
    data: params,
  });
}

export async function queryNotices(params = {}) {
  return request(`/api/notices?${stringify(params)}`);
}

export async function getFakeCaptcha(mobile) {
  return request(`/api/captcha?mobile=${mobile}`);
}
