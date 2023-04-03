---
layout: doc
title: Object.prototype.create
editLink: true
description: create 方法使用方式，返回值，手写 create 方法
lastUpdated: true
---
# Object.prototype.create
1. create 方法 用于自定义原型且参数只能是 `Object or Null` 其他类型参数均会报错
* 如果为 null 那么对象内的属性就是 `No properties`;
* 如果为 对象 那么对象原型属性就是 我们传入的对象;
```js
var obj = Object.create({});
console.log(obj); // {__proto__: {}}
var obj1 = Object.create(null);
console.log(obj1); // {No properties}
var obj2 = Object.create('');
console.log(obj2); // TypeError
var obj3 = Object.create(123);
console.log(obj3); // TypeError
var obj4 = Object.create(true);
console.log(obj4); // TypeError
var obj5 = Object.create(undefined);
console.log(obj5); // TypeError
var obj6 = Object.create(function b() {});
console.log(obj6); // TypeError
var obj7 = Object.create([]);
console.log(obj7); // TypeError
```

2. create 方法返回值是 返回自定义原型对象
```js
var obj = Object.create({});
console.log(obj); // {__proto__: {}}
```

3. 手写 create 方法
* 第一种方法(简单)
* 函数内定义对象
```js
Object.prototype.myCreate = function (properties) {
    // 类型
    var type = {
        'number': 1,
        'string': 2,
        'boolean': 3,
        'object': function() {
            if(properties === null) {
                return false;
            } else if(!Array.isArray(properties)) {
                return false;
            }
            return true;
        },
        'function': 5,
        'undefined': 6,
        'Symbol': 7
    }, obj = {};
    // 如果 我们传进来没有在 对象列表中就进入对象中
    if (!type[typeof properties] || (typeof type[typeof properties] === 'function' && type[typeof properties])) {
        obj.__proto__ = properties;
        return obj;
    }
    // 否则抛出类型错误
    throw new TypeError('myCreate: properties Can only be Object or null:\t' + properties);
}
var obj1 = Object.myCreate(null);
console.log(obj1);
var obj2 = Object.myCreate({ name: 'obj2' });
console.log(obj2);
```
* 第二种方法
* 主要依靠对象来操作对象并返回出去
```js
Object.prototype.createObj = function (properties) {
    var type = {
        'obj': {},
        'setObj': function (prop) {
            prop = arguments[0] || null;
            this.obj.__proto__ = prop;
            return this.obj;
        },
        '[object Null]': function () {
            return this.setObj(null);
        },
        '[object Object]': function () {
            return this.setObj(properties);
        },
    }[Object.prototype.toString.call(properties)]();

    if (type) return type;

    throw new TypeError('createObj: properties Can only be Object or null:\t' + properties);
}

var obj1 = Object.createObj(null);
console.log(obj1);
var obj2 = Object.createObj({ name: 'obj2' });
console.log(obj2);
```