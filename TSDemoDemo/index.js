/**
 * @format
 */

import {AppRegistry} from 'react-native';

// import App from './App';                                    // 脚手架自身的Demo
// import App from './DemoApp/DemoTableHomePage';          // 单独测试不支持跳转的Table首页
import App from './DemoApp/DemoCollectionHomePage';     // 单独测试不支持跳转的Table首页
// import App from './DemoApp/DemoApp';                       // 混合测试支持跳转的首页

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
