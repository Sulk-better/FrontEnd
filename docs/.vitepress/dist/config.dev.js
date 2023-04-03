"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _NavConfig = _interopRequireDefault(require("./NavConfig"));

var _SidebarConfig = _interopRequireDefault(require("./SidebarConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = {
  base: '/zh/',
  lang: 'zh-CN',
  title: '阿利的学习笔记',
  titleTemplate: 'ALi StudyNotes',
  description: 'Just playing around.',
  appearance: true,
  // 用户可以选择颜色模式
  ignoreDeadLinks: true,
  // 忽略死连接
  clearUrls: true,
  lastUpdated: true,
  // 最近更新时间
  themeConfig: {
    logo: '/logo.png',
    lastUpdatedText: 'Updated Date',
    // 导航栏配置
    nav: _NavConfig["default"],
    sidebar: _SidebarConfig["default"]
  },
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true
  }
};
exports["default"] = _default;