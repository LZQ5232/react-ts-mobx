import React from 'react';
import {observable, isArrayLike, computed, action, autorun, when, reaction,runInAction} from "mobx";
import {observer} from 'mobx-react';
import {Button} from 'antd-mobile';
import './index.scss';

// 定义数据Store,用Mobx作为状态管理工具
class Store {
    @observable queue:number = 1;
    @action refresh = ():void => {
        this.queue += 1;
        console.log('this.queue -> ', this.queue);
    }
    @computed get fooProps():any {
        return {
            queue: this.queue,
            refresh: this.refresh
        };
    }
  }
// ts组件接收父组件传递过来的数据必须定义接口类型,否则报错
interface BarProps{
    queue :number
}
// @observer修饰类,Bar组件接受Foo组建传过来的queue属性
@observer 
class Bar extends React.Component<BarProps>{
    render() {
        const {queue} = this.props
        return (
            <div className="queue">{queue}</div>
        )
    }
}
interface FooProps {
    queue: number,
    refresh():void
}
// Foo组件接收来自Add组件的store数据
@observer
class Foo extends React.Component<FooProps>{
    render() {
        const {queue,refresh} = this.props;
        return (
            <div>
                <Button type="primary" onClick = {refresh}>Refresh</Button>
                <Bar queue = {queue} />
            </div>
        )
    }
}
// 初始化store数据,传递给Foo组件
const store = new Store();
class Add extends React.Component{
    render() {
        return (
            <div>
                <h2 className="add"> hello react-ts-mobx</h2>
                <Foo queue = {store.queue} refresh = {store.refresh} />
            </div>
           
        )
    }
}
export default observer(Add)