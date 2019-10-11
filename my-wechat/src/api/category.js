import axios from 'axios';
import {SUCC_CODE, TIME_OUT} from './config';


let cancelToken = axios.CancelToken;
let cancel;
// ajax获取数据

export const getCategoryContent = (id) =>{
  cancel && cancel('取消上次操作');
  cancel = null;
  return axios.get(`http://www.imooc.com/api/category/content/${id}`,{
    timeout: TIME_OUT,
    cancelToken: new cancelToken(function executor(c) {
      cancel = c;
    })
  }).then(res => {
    if(res.data.code === SUCC_CODE){
      console.log('数据获取成功');      
      return res.data.content;
    }
    throw new Error('获取数据失败');
  }).catch(err =>{
    if(axios.isCancel(err)){
      console.log(err);
    }else{
      console.log(err);
    }
  })
}