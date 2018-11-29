const vfilter = {
    stringfilter(val) {
        if (val == "" || val == undefined || val == null) {
            return null;
        } else {
            return val;
        }
    },
    //金额处理函数保留小数点后面两位小数    
    disposenumber(val) {
        if (val.indexOf(".") != -1) {
          let listnumber = val.split(".");
          if (listnumber[1][2]) {
            if (listnumber[1][2] != 0) {
              console.log("dddd")
              let dianhounumber = listnumber[1].slice(0, 2);
              if(parseInt(dianhounumber)+1>=10){
                return listnumber[0]+"."+(parseInt(dianhounumber)+1)
              }else{
                console.log(parseInt(dianhounumber)+1)
                return listnumber[0]+".0"+(parseInt(dianhounumber)+1)
              }
            }else{
                return listnumber[0]+"."+listnumber[1].slice(0, 2);
            }
          }else{
            return val;
          }
        }else{
          return val+".00";
        }
    },
    timefilter(val) {//事件过滤器   
        var dateTime = new Date(val);
        var year = dateTime.getFullYear();
        var month = dateTime.getMonth() + 1;
        var day = dateTime.getDate();
        var hour = dateTime.getHours();
        var minute = dateTime.getMinutes();
        var second = dateTime.getSeconds();
        var now = new Date();
        var now_new = new Date().getTime();  //typescript转换写法
        var milliseconds = 0;
        var timeSpanStr;
        milliseconds = now_new - val;
        if (milliseconds <= 1000 * 60 * 1) {
            timeSpanStr = '刚刚';
        }
        else if (1000 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60) {
            timeSpanStr = Math.round((milliseconds / (1000 * 60))) + '分钟前';
        }
        else if (1000 * 60 * 60 * 1 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24) {
            timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60)) + '小时前';
        }
        else if (1000 * 60 * 60 * 24 < milliseconds && milliseconds <= 1000 * 60 * 60 * 24 * 15) {
            timeSpanStr = Math.round(milliseconds / (1000 * 60 * 60 * 24)) + '天前';
        }
        else if (milliseconds > 1000 * 60 * 60 * 24 * 15 && year == now.getFullYear()) {
            timeSpanStr = month + '-' + day + ' ' + hour + ':' + minute;
        } else {
            timeSpanStr = year + '-' + month + '-' + day + ' ' + hour + ':' + minute;
        }
        return timeSpanStr;
    },
}
export default vfilter;