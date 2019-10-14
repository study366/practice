;(function () {

   console.log('form ok');
   let mask = document.querySelector(".mask"); 
   let close = document.querySelector(".close"); 
   let form = document.querySelector("form");
   let submit = document.querySelector("button.submit");
   let sign = document.querySelector(".demo-form");

   let rule = {
      "username": {"rule":/^[a-zA-Z]\w{5,19}$/,
                    "errorInfo":"用户名只能包含6-20位字母数字或下划线_，必须以字母开头"},
      "password": {"rule":/^\w{6,18}$/,
                   "errorInfo":"请设置密码 要求6-18位字母数字或_"},
      "confirmPassword": {"rule":/^\w{6,18}$/,
                    "errorInfo":"确认密码一致"},
      "name": {"rule":/^[\u1e00-\u9fa5]{2,5}$/,
                    "errorInfo":"请输入真实姓名，2-5位汉字"},
      "id": {"rule":/^\d{15}$|^\d{17}[Xx\d]$/,
                    "errorInfo":"请输入正确的身份证号"},
      "email": {"rule":/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/,
                    "errorInfo":"请输入正确的邮箱"},
      "phoneNumber": {"rule":/^\d{11}$/,
                    "errorInfo":"请输入正确的电话号码"}    
    } 
  sign.addEventListener("click",function () {
    showMask();
  })
  close.addEventListener("click",function () {
    hiddenMask()
  })
  form.addEventListener("focusout", function (e) {    
     informationValidation(e.target,rule);
   });
   form.addEventListener("submit", function () {
     let inputList = form.getElementsByTagName("input");
     let inputArr = Array.from(inputList);
     for(var i = 0; i < inputArr.length; i++){
        if(!informationValidation(inputArr[i],rule)){
          return false;
        };
     }
     if(inputArr[1].value !== inputArr[2].value){
      let tip = document.querySelector(".tip") || {};      
          tip.innerHTML = "请保证密码一致";
      return false;
     }
     hiddenMask(mask);

   });
   function showMask() {
     mask.className = "mask active";
   }
   function hiddenMask() {
     mask.className = " mask";
   }
   function informationValidation(input,rule) {//Validation 验证         
    let name = input.name;    
    if(!name){
      return true;
    }
    let regstr = rule[name].rule; //查找规则
    let value = input.value;

    if(!regstr.test(value)){//未通过检测
      input.className = " error";
      let tip = document.querySelector(".tip") || {};  
        tip.innerHTML = rule[name].errorInfo;
      return false;
    }else{
      input.className = "";
      let tip = document.querySelector(".tip") || {}; 
        tip.innerHTML = "";
      return true;
    };
  } 
  /**配置区域
  */
  
})();
