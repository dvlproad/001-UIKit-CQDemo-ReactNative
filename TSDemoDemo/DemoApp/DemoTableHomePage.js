import React  from 'react';
import CJTSTableHomeBasePage from '../react-native-demo/Demo/Table/CJTSTableHomeBasePage';

export default class DemoTableHomePage extends CJTSTableHomeBasePage {
  constructor(props) {
    super(props);

    this.state = {
      sectionDataModels: [
        {
          theme: "测试跳转1",
          data: [
            { title: "Main", content: '返回主页', nextPageName: "main" },
            { title: "Page1", content: '第一页', nextPageName: "demo_page1" },
          ]
        },
        { theme: "测试跳转2",
          data: [
            { title: "Page1", nextPageName: "demo_page1" },
            { title: "Page1", nextPageName: "demo_page1" },
          ]
        },
      ],
    }
  }


  render() {
    return super.render();
  }
}
