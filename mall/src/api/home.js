import axios from 'axios';
import jsonp from '../assets/js/jsonp';
import {SUCC_CODE} from './config';
import {TIME_OUT} from './config';


// 获取幻灯片数据 ajax


//打乱顺序 
const shuffle = (arr) =>{
	const arrLength = arr.length;
	let i = arrLength;
	let rndNum;

	while(i--){
		if(i != (rndNum = Math.floor(Math.random() * arrLength))){
			[arr[i] ,arr[rndNum]] = [arr[rndNum], arr[i]];
 		}
	}
	return arr;
}

export const getHomeSlider= () => {
	return axios.get('http://www.imooc.com/api/home/slider',{
		timeout:TIME_OUT
	}).then(res=>{
		if(res.data.code == SUCC_CODE){ 
			let sliders = res.data.slider;
			const slider = [sliders[Math.floor(Math.random()*sliders.length)]];
			sliders = sliders.filter(()=>Math.random() >= 0.5);
			sliders = shuffle(sliders);
			if(sliders.length === 0){
				sliders = slider;
			}
			return sliders;
		}
		throw new Error('获取数据失败');
	},{}).catch(err => {
		if(err){
			console.log('我有错');
		}
		return [
		  {
			linkUrl: 'https://www.imooc.com',
			picUrl: require('assets/img/404.png')
		  }
		];
	}).then(data => {
		return new Promise(resolve =>{
			setTimeout(() =>{
				resolve(data);
			}, 1000);
		});
	})
}

// 获取热门推荐数据 jsonp
export const getHomeRecommend = (page = 1,psize = 20) =>{
	const url = 'https://ju.taobao.com/json/tg/ajaxGetItemsV2.json';
	const params = {
		page,
		psize,
		type: 0,
		frontCatId:''

	};
	return jsonp( url, params,{
		param: 'callback',
		timeout: 10000
	}).then(res => {
		if(res.code === '200'){
			return res;
		}
		throw new Error('获取数据失败了');
	}).catch(err =>{
		if(err){
			console.log(err);
		}
	}).then(data =>{
		return new Promise(resolve =>{
			setTimeout(() => {
				resolve(data);
			},1000);
		});
	});
};