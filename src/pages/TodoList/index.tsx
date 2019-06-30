import React from 'react';
import {observable, isArrayLike, computed, action, autorun, when, reaction,runInAction} from "mobx";
import {observer} from 'mobx-react';
import './index.scss';
// 定义Todo数据类型
class Todo {
    id:number = new Date().getTime();
    title:string = '';
    finished:boolean = false;
    constructor(title:string) {
        this.title = title;
    }
}
// Store数据方法管理
class Store {
    @observable title:string = '';
    @observable todos:Todo[] =[];
    // 添加Todo的Title
    @action createTitle (e:any) {
        console.log('e',e.target.value);
        this.title = e.target.value;
    }
    // 增加Todo数据
    @action createTodo = () => {
        this.todos.unshift(new Todo(this.title));
        this.title = '';
    }
    // 删除Todo
    @action delTodo (id:number) {
        this.todos.forEach((item,index) => {
            if (item.id === id) {
                this.todos.splice(index,1)
            }
        })
    }
    // 监听todos数据变化,显示剩余待办数量
    @computed get unfinished () {
        return this.todos.filter(todo => !todo.finished).length;
    }

}
interface TodoItemProps {
    todo:any;
    store:any;
}
// 每一条Todo数据组件
@observer 
class TodoItem extends React.Component<TodoItemProps> {
    render() {
        const {todo,store} = this.props
        return (
            <div className="item">
               <span>{todo.title}</span>
               <span onClick={()=> store.delTodo(todo.id)}>X</span>
            </div>
        )
    }
}
const store = new Store();
@observer 
class TodoList extends React.Component {
    render() {
        return (
            <div>
                <h2>TodoList</h2>
                <header>
                    <input type="text" placeholder="please input" value={store.title} onChange = {e => store.createTitle(e)} />
                    <button onClick ={store.createTodo}>add</button>
                </header>
                <ul>
                    {store.todos.map((todo)=>{
                        return <li key={todo.id}>
                           <TodoItem todo={todo} store = {store}/>
                        </li>
                    })}
                </ul>
                <footer>
                 {store.unfinished} item(s) unfinished
                </footer>
            </div>
        )
    }
}
export default TodoList