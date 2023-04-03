import NavConfig from './NavConfig';
import SidebarConfig from './SidebarConfig';
export default {
    base: '/zh/',
    lang: 'zh-CN',
    title: '阿利的学习笔记',
    titleTemplate: 'ALi StudyNotes',
    description: 'Just playing around.',
    appearance: true, // 用户可以选择颜色模式
    ignoreDeadLinks: true, // 忽略死连接
    clearUrls: true,
    lastUpdated: true, // 最近更新时间
    themeConfig: {
        logo: '/logo.png',
        lastUpdatedText: 'Updated Date',
        // 导航栏配置
        nav: NavConfig,
        sidebar: SidebarConfig
    },
    markdown: {
        theme: 'material-palenight',
        lineNumbers: true
    }
}