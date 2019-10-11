export default () =>{
	var newDate = new Date();	
	var yyyy = newDate.getFullYear();
	var mm = newDate.getMonth() + 1;
	var dd = newDate.getDate();
	var hh = newDate.getHours();
	var min = newDate.getMinutes();	
	return `${yyyy}年${mm}月${dd}日 ${hh}:${min}`
}