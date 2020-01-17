(function() {
    //是否为PC
    function IsPC() {
        var userAgentInfo = navigator.userAgent;
        var Agents = ["Android", "iPhone",
            "SymbianOS", "Windows Phone",
            "iPad", "iPod"];
        var flag = true;
        for (var v = 0; v < Agents.length; v++) {
            if (userAgentInfo.indexOf(Agents[v]) > 0) {
                flag = false;
                break;
            }
        }
        return flag;
    }
    //获取当前页面的缩放值
    function detectZoom() {
        var ratio = 0,
            screen = window.screen,
            ua = navigator.userAgent.toLowerCase();

        if (window.devicePixelRatio !== undefined) {
            ratio = window.devicePixelRatio;
        }
        else if (~ua.indexOf('msie')) {
            if (screen.deviceXDPI && screen.logicalXDPI) {
                ratio = screen.deviceXDPI / screen.logicalXDPI;
            }
        }
        else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
            ratio = window.outerWidth / window.innerWidth;
        }

        if (ratio) {
            ratio = Math.round(ratio * 100);
        }
        return ratio;
    }
    //是否是微信打开
    function isWeiXin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf('micromessenger') != -1) {
            return true;
        } else {
            return false;
        }
    }
    var body = document.getElementsByTagName('html')[0];
    var screenWidth = window.screen.width;//屏幕宽度
    if(IsPC()){
        if(screenWidth < 1920){
            body.style.zoom=0.75;
        }
    }else{
        body.style.zoom=0.65;
    }
    if(isWeiXin()){
        body.style.zoom=0.65;
    }
})();