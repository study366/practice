import axios from 'axios';
import jsonp from 'assets/js/jsonp';
import {SUCC_CODE,TIME_OUT,HOME_RECOMMEND_PAGE_SIZE,jsonpOptions} from './config';

//获取幻灯片数据

export const getHomeSlider = () => {
	return axios.get('http://www.imooc.com/api/home/slider',{
		timeout: 10000
	}).then(res =>{		
		if(res.data.code === SUCC_CODE){				
			return res.data.slider;	
		}

		throw new Error('没有成功获得数据');
	}).catch(err =>{
		if(err){
			console.log(err);
		}

		return [{
			linkUrl: 'https://www.baidu.com',
			picUrl: require('assets/img/404.png')
		}]
	}).then(res =>{
		return new Promise(resolve =>{
			setTimeout(() =>{
				resolve(res);
			}, 1000);
		});			
	});

} ;

export const getHomeRecommend = (page = 1,psize = 20) =>{
	const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
	const params ={
		page,
		psize,
		type:0,
		frontCatId: ''
	};
	return jsonp(url, params, jsonpOptions).then(res =>{
		if(res.code === '200'){
			console.log(res);
			return res;
		}
		throw new Error('获取数据失败');
	}).catch(err =>{
		if(err){			
			console.log(err);
		}
	}).then(res =>{
		return new Promise(resolve =>{
			setTimeout(()=>{
				resolve(res)
			}, 1000);
		})
	})
}