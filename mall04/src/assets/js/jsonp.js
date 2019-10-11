import jsonp from 'jsonp';

const parseParam = param =>{
	let params = [];
	for(const key in param){
		params.push(key + '=' + param[key] );
	}
	params = params.join('&');
	return params;
};
export default (url, data, options) =>{
	url += (url.indexOf('?') > 0 ? '&' : '?') + parseParam(data);
	return new Promise((resolve,reject) =>{
		jsonp(url, options, (err, data) =>{
			if(err){				
				console.log('jsonp err');
				reject(err); 
			}else{				
				console.log('jsonp success');				
				resolve(data);
			}
		})
	})
}