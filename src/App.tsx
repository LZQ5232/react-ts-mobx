import React from 'react';
import './App.css';
import {Route, Router, Switch,Link} from 'react-router-dom';
import { History } from 'history';
import {Add, TodoList} from './pages';
export interface IAppProps {
    history: History;
}
const App: React.SFC<IAppProps> = ({ history }) => (
    <Router history={ history }>
             <button>
                <Link to='/add'>AddPage</Link>
            </button>
             <button>
                 <Link to='/todolist'>TodoListPage</Link>
            </button>
            <Switch>
                <Route path="/todolist" component={TodoList} />
                <Route path="/add" component={Add} />
            </Switch>
           
    </Router>
);

export default App;
