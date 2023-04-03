---
layout: doc
title: Array.prototype.push
editLink: true
description: push 方法使用方式，返回值，手写 push 方法
lastUpdated: true
---
# Array.prototype.push
1. 该方法是向数组末尾添加元素(可以添加单个或多个元素)
```js
var arr = [1,2,3,4,5,6];
arr.push(7);
console.log(arr); // [1,2,3,4,5,6,7]
```

2. push 方法返回值是 执行完该方法后数组的长度
```js
var arr = [1,2,3,4,5];
console.log(arr.push(6)); // 6
```

3. 手写 push 方法
```js
var arr = [1,2,3,4,5];
// 挂载在 Array 原型上 让我们实例化出来的数组都可以继承到 pushItem 方法,因为参数是不定的所以不传入参数，使用 arguments 来讲参数添加进入数组中
Array.prototype.pushItem = function() {
    // this 谁调用只想谁
    if(!arguments.length) return this.length;
    for(var i = 0; i < arguments.length; i++) {
        this[this.length] = arguments[i];
    }
    // 返回添加完成的长度
    return this.length;
}
console.log(arr.pushItem(6,7)); // 7
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
```