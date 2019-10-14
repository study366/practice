;console.log('compute ok');
(function () {

  
let Footprint = circleRunTo100(1);  
    let result = chance(Footprint);
    console.log(result)
  function logResult (chanceRsult) {
    let result = 'result:';
    let total = 0;
    for(var i = 0; i < chanceRsult.length; i++){
      result += `步数：${chanceRsult[i].footprint},概率：${chanceRsult[i].chance}\n`
      total += chanceRsult[i].chance;
    }
    result += `总概率：${total}`;
    console.log(result);
  }
  function chance (arr) {//传入数组 数组值为对象
    let total = 0;
    let result = [];
    for(var i = 0; i < arr.length; i++){
       total += arr[i].count;
       result[i] = {};
       result[i].footprint = arr[i].footprint;
       result[i].chance = arr[i].count;
    }
    
    for(var i = 0; i < result.length; i++){
      result[i].chance = result[i].chance / total;
    }
    console.log(arr)
    console.log(result);
    return result;
  }
  function runTo100 () {
    let mileage = 0;    
    let footprintArr = [];
    
    do{
      let point = Math.floor(Math.random() * 6) + 1;
      
      mileage += point;
      footprintArr.push(mileage);
    } while (mileage < 100);
    return footprintArr
  }
  function saveFootprint() {
    let result = {};
    return function (arr) {
      if(!arr){
        return result;
      }
      for(var i = 0; i < arr.length; i++){
        let num = arr[i];
        if(result[num]){
            result[num]++;
        }else {
          result[num] = 1;
        }
      }
      return result
    }
  }
  function sortByCount (obj) {
    let result = [];
    for(var i = 0; i < 100; i++){
      result[i] = {"footprint":0,"count":0}
    }

    for (let k in obj) { 
      let objItme = {};
          objItme.footprint = k;  
          objItme.count = obj[k]; 
        result[k] =  objItme;        
    }
    result.length = 100;
    
    // result.sort((a,b) =>{      
    //   return a.count > b.count ? -1 : 1;
    // })    
    return result; 
  }
  function circleRunTo100 (count) {    
    let saveFootprintInstance = saveFootprint();//
    let result = saveFootprintInstance();
    for(let i = 0; i < count; i++){
      let footprint = runTo100();
       saveFootprintInstance(footprint);
    }   
     
    return sortByCount(result);
  }
  /* 在以上区域书写你的代码**/
})()


