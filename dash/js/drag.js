window.onload = function() {
    var dragCircle = document.getElementsByClassName('drag');
// 获取鼠标点击时在div中的相对位置
    dragCircle.onmousedown = function(ev) {
        var ev = ev || window.event;

        var relaX = ev.clientX - this.offsetLeft;
        var relaY = ev.clientY - this.offsetTop;

// 获取当前鼠标位置，减去与div的相对位置得到当前div应该被拖拽的位置
        document.onmousemove = function(ev) {
            var ev = ev || window.event;
            dragCircle.style.left = ev.clientX - relaX + 'px';
            dragCircle.style.top = ev.clientY - relaY + 'px';
        };
        document.onmouseup = function(ev) {
            var ev = ev || window.event;
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }
};


// /* 获取绝对位置 */
// function posLeft(obj){
//     var iLeft = 0;
//     while(obj){
//         iLeft += obj.offsetLeft;
//         obj = obj.offsetParent;
//         if(obj && obj!=document.body && obj!=document.documentElement){
//             iLeft += getStyle(obj, 'borderLeftWidth');
//         }
//     }
//     return iLeft;
// }
// function posTop(obj){
//     var iTop = 0;
//     while(obj){
//         iTop += obj.offsetTop;
//         obj = obj.offsetParent;
//         if(obj && obj!=document.body && obj!=document.documentElement){
//             iTop += getStyle(obj, 'borderTopWidth');
//         }
//     }
//     return iTop;
// }
// function getStyle(obj,attr){
//     if(obj.currentStyle){
//         return parseFloat( obj.currentStyle[attr]) || 0;
//     }
//     return parseFloat( getComputedStyle(obj)[attr]) || 0;
// }
// window.onload = function() {
//     var dragCircle = document.getElementById('dragCircle');
//     var wrapper = document.querySelector(".wrapper")
//     var range = {
//         left    : posLeft(wrapper),
//         right   : posLeft(wrapper) + wrapper.offsetWidth - dragCircle.offsetWidth,
//         top     : posTop(wrapper),
//         bottom  : posTop(wrapper) + wrapper.offsetHeight - dragCircle.offsetHeight
//     };
// // 获取鼠标点击时在div中的相对位置
//     dragCircle.onmousedown = function(ev) {
//         var ev = ev || window.event;
//         var relaX = ev.clientX - this.offsetLeft;
//         var relaY = ev.clientY - this.offsetTop;
//
// // 获取当前鼠标位置，减去与div的相对位置得到当前div应该被拖拽的位置
//         document.onmousemove = function(ev) {
//             var ev = ev || window.event;
//             if(ev.clientX - relaX < range.left) {
//                 dragCircle.style.left = range.left + 'px'
//             } else if (ev.clientX - relaX > range.right) {
//                 dragCircle.style.left = range.right + 'px'
//             } else {
//                 dragCircle.style.left = ev.clientX - relaX + 'px'
//             }
//             if(ev.clientY - relaY < range.top) {
//                 dragCircle.style.top = range.top + 'px'
//             } else if (ev.clientY - relaY > range.bottom) {
//                 dragCircle.style.top = range.bottom + 'px'
//             } else {
//                 dragCircle.style.top = ev.clientY - relaY + 'px'
//             }
//         };
//         document.onmouseup = function(ev) {
//             var ev = ev || window.event;
//             document.onmousemove = null;
//             document.onmouseup = null;
//         }
//     }
// };