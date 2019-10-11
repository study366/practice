
;(function () {
    console.log('backHome ok');
    let backHome = document.querySelector(".backHome");
    backHome.addEventListener("click",function () {
       window.history.go(-1);
    })
})();
