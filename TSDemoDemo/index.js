/**
 * @format
 */

import {AppRegistry} from 'react-native';

// import App from './App';                                    // 脚手架自身的Demo
// import App from './DemoApp/DemoNormalPage';             // 单独测试不支持跳转的普通页面
// import App from './DemoApp/DemoTableHomePage';          // 单独测试不支持跳转的Table首页
// import App from './DemoApp/DemoCollectionHomePage';     // 单独测试不支持跳转的Table首页
// import App from './DemoApp/DemoMainPage';               // 单独测试不支持跳转的主页
import App from './DemoApp/MainRooter';                 // 混合测试【支持跳转】的主页


import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
