"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var Sidebar = {
  '/Study/': [{
    text: '必须掌握',
    collapsible: true,
    items: [{
      text: '建议',
      link: '/Study/'
    }, {
      text: '计算机组成原理与体系结构',
      link: '/Study/architecture/'
    }, {
      text: '计算机操作系统',
      link: '/Study/System/'
    }, {
      text: '计算机网络',
      link: '/Study/Network/'
    }]
  }],
  '/foundAtion/': [{
    text: '前端',
    collapsible: true,
    items: [{
      text: '建议',
      link: '/foundAtion/'
    }, {
      text: 'HTML',
      link: '/foundAtion/HTML/'
    }, {
      text: 'CSS',
      link: '/foundAtion/CSS/'
    }, {
      text: 'JavaScript',
      link: '/foundAtion/JavaScript/',
      collapsible: true,
      items: [{
        text: '基础',
        collapsible: true,
        items: [{
          text: 'Array.prototype.push',
          link: '/foundAtion/JavaScript/ECMAScript'
        }]
      }, {
        text: 'Array',
        collapsible: true,
        items: [{
          text: 'Array.prototype.push',
          link: '/foundAtion/JavaScript/Array/push'
        }]
      }, {
        text: 'Object',
        collapsible: true,
        items: [{
          text: 'Object.prototype.create',
          link: '/foundAtion/JavaScript/Object/create'
        }]
      }]
    }]
  }]
};
var _default = Sidebar;
exports["default"] = _default;