import { registerApplication, start } from 'single-spa';

// registerApplication({
//   // 应用名称
//   name: '@single-spa/welcome',
//   // 引入应用的路径
//   app: () =>
//     System.import(
//       'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
//     ),
//   // 路由匹配规则 可以是激活函数，比如参数API、路径前缀或两者的数组。因为最常见的用例是使用window.location 将其URL前缀进行匹配
//   activeWhen: ['/'],
//   // Custom prop functions are called with the application name and current window.location as arguments.
//   // customProps: (name, location) => ({
//   //   some: 'value',
//   // }),
// });

registerApplication(
  '@single-spa/welcome',
  () =>
    System.import(
      'https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js'
    ),
  (location) => location.pathname === '/'
);

// 注册react应用
registerApplication({
  name: '@phy/todos',
  app: () => System.import('@phy/todos'),
  activeWhen: ['/todos'],
});

// registerApplication({
//   name: "@phy/navbar",
//   app: () => System.import("@phy/navbar"),
//   activeWhen: ["/"]
// });

start({
  // 是否可以通过history.pushState() 和 history.replaceState() 更改触发single-spa路由
  // true: 允许 false：不允许
  urlRerouteOnly: true,
});
