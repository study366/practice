import axios from 'axios';
import {TIMEOUT, SUCC_CODE, HOME_RECOMMEND_PAGE_SIZE, jsonpOptions} from './config.js';
import jsonp from 'assets/js/jsonp';


const shuffle = (arr) =>{
	const arrlength = arr.length;
	let i = arrlength;
	let rndNum;

	while (i--) {
		if( i != (rndNum = Math.floor(Math.random() * arrlength))){
			[arr[i], arr[rndNum]] = [arr[rndNum], arr[i]];
		}
	}

	return arr;
};


export const getHomeSlider = () => {
	return axios.get('http://www.imooc.com/api/home/slider',{
		timeout: TIMEOUT,
	}).then( res => {
		if(res.data.code === SUCC_CODE) {	
			let sliders = res.data.slider;
			const slider =	[sliders[Math.floor(Math.random() * sliders.length)]]
			sliders = sliders.filter(() => Math.random() > 0.5);
			if(sliders.length === 0){
				sliders = slider;
			}
			// sliders = shuffle(sliders);

			console.log('刷新');
			console.log(sliders);
			return sliders;
		}
		throw new Error('获取数据失败');
	}).catch(err => {
		if(err){
			console.log(err);
		}
		return [{
		    linkUrl: 'https://www.imooc.com',
			picUrl: require('pages/home/1.jpg'),
			text: '拍卖'				
		}]
	}).then(data => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(data);
			}, 1000);
		});
	});
};

// 获取热门数据
export const getHomeRecommend = (page = 1, psize = HOME_RECOMMEND_PAGE_SIZE) =>{
	const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';

	const params = {
		page,
		psize,
		type: 0,
		frontCatId: ' '
	};

	return jsonp(url, params, jsonpOptions).then(res =>{
		if(res.code === '200'){		
			return res;
		}

		throw new Error('热门数据获取失败');
	}).catch(err =>{
		if(err){
			console.log(err);
		}return [{
		    linkUrl: 'https://www.imooc.com',
			picUrl: require('pages/home/1.jpg'),
			text: '拍卖'				
		}]
	}).then(data => {
		return new Promise(resolve => {
			setTimeout(() => {
				resolve(data);
			}, 1000);
		});
	});
};
