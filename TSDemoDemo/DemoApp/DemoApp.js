import React, { Component } from 'react';
import { View, Button } from "react-native";
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { createBrowserHistory } from 'history';
// import Page1 from "./DemoNormalPage";
// import DemoTableHomePage from './DemoTableHomePage';
// import DemoCollectionHomePage from './DemoCollectionHomePage';
//
// const history =  createBrowserHistory({
//     basename: 'demo',
// });


// Demo 的主页
export default class Main extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: "center", backgroundColor:"#F5F5F5"}}>
                <Button
                    style={{height: 60, marginTop:40, backgroundColor:"red"}}
                    title={"page1"}
                    // onPress={()=>{this.props.history.push('page1')}}
                />

                <Button
                    style={{height: 60, marginTop:40, backgroundColor:"red"}}
                    title={"Table 型首页"}
                    // onPress={()=>{this.props.history.push('demo_table')}}
                />

                <Button
                    style={{height: 60, marginTop:40, backgroundColor:"red"}}
                    title={"Collection 型首页"}
                    // onPress={()=>{this.props.history.push('demo_collection')}}
                />
            </View>
        );
    }
}




// export const DemoPages = [
//     <Route path="/main" component={Main} key="/main" />,
//     <Route path="/page1" component={Page1} key="/page1" />,
//     <Route path="/demo_table" component={DemoTableHomePage} key="/demo_table" />,
//     <Route path="/demo_collection" component={DemoCollectionHomePage} key="/demo_collection" />,
// ]
//
//
// export default function APP() {
//     return (
//         <Router history={history}>
//             <Switch>
//                 {DemoPages}
//             </Switch>
//         </Router>
//     )
// }
