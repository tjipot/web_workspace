// var localOne = [];
// console.log(localOne.length);

var dateFn = function () {
    // 先判断第一周周一是几号;
    //var curDate = new Date();
    //var curYear = curDate.getFullYear();
    //var firstDayOfYear = curYear + '-01-01';
    //// Sunday=>0, Monday=>1, Tuesday=>2, etc;


    // 开始判断: 'yyyy-mm-dd', 2017-01-02;
    //for (var i = 0; i < 7; i++) {
    //    var tmpDate = new Date(firstDayOfYear);
    //    tmpDate.setDate(tmpDate.getDate() + i);
    //    if (tmpDate.getDay() == 1) {
    //        console.log("i = ");console.log(i);
    //        firstDayOfYear = curYear + '-01-0' + (1+i);
    //        break;
    //    }
    //}
    //console.log(firstDayOfYear);
    //// console.log(dayOfWeek);
    //// console.log('2017-11-11' < curDate);


    // 产生字串;
    //console.log(new Date().toLocaleDateString().replace("/","-").replace("/","-"));
    //console.log(new Date().toLocaleDateString().substring(0, 7));

    // 产生"YYYY-MM";
    var newDate = new Date();
    var monthYearDate = newDate.getFullYear() + '-' + (newDate.getMonth()+1) + '-' + newDate.getDate();
    console.log(new Date().getFullYear() + '-' + (new Date().getMonth()+1));

};  dateFn();










