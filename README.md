# 001-UIKit-CQDemo-ReactNative
UIKit、ReactNative



## 一、工程创建

创建APP(iOS & Android)项目

```
react-native init TSDemoDemo
```

### 1、iOS工程

```
cd iOS项目
pod install
```

### 2、Android工程

```
终端运行cd myProject切换到项目根目录中，
运行adb devices来确保有设备连接到了电脑上

运行react-native run-android打包编译安卓项目，并部署到模拟器或开发机中

运行上一条命令之前，要确保有设备连接到了电脑上，可以运行adb devices查看当前接入的设备列表；如果无法检查到设备列表，请先确保手机开启了开发者模式，同时要电脑上要安装手机的驱动程序；

注意：首次打包时候，会联网下载gradle相关的文件，需要等待很长时间，大家可以直接从http://www.androiddevtools.cn/手动下载对应版本的gradle文件，并手动拷贝解压到C:\Users\自己的用户名\.gradle\wrapper\dists目录下；

注意：接下来，如果是第一次打包，会从https://jcenter.bintray.com下载好多的依赖项，此时需要耐心等待，如果中间出现了长时间卡顿，大家需要Ctrl+C停止打包，并重新运行react-native run-android

作者：白小白大白白
链接：https://www.jianshu.com/p/ab8bf4128b0e
来源：简书
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
```



## 二、添加路由

参考文档

* 官方文档：[react-navigation Getting started](https://reactnavigation.org/docs/getting-started)

* [React Navigation5.0系列一：StackNavigator的使用](https://segmentfault.com/a/1190000021753725)

```
①
yarn add @react-navigation/native

②
yarn add react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view

③在iOS工程中，重新 pod install


④接下来，因为从React Navigation4.x版本开始，堆栈导航库就已经被分离出来，作为单独的依赖文件，所以要想添加StackNavigator的依赖
yarn add @react-navigation/stack
```



## 三、发布

```
npm config get registry

npm login

npm publish --access=public
```

