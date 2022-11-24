/**
 * 类型推断
 */
let x = [1,2,""]

window.onmousedown = function(mouseEvent) {
    console.log(mouseEvent.button);  //<- Error
};