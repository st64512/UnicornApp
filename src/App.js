
import './App.css';
import Table from "./components/table/Table";
import MySecondTable from "./components/table/MySecondTable";
import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
} from "react-router-dom";
import UserDetail from "./components/UserDetail";

function App() {
    async function deleteItem (id) {
        const response = await fetch( 'http://localhost:3004/todos/' + id, {
            method: 'DELETE'
        })
        if(!response.ok) {
            throw new Error("Cannot delete todo element");
        }
    }
    const data =[
        {
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    },
        {
            "userId": 1,
            "id": 2,
            "title": "quis ut nam facilis et officia qui",
            "completed": false
        }] ;

    const columns = [
        {
            attribute: "title"
        },
        {
            attribute: "id",
            component: (item) => <button onClick={() => deleteItem(item.id)}>{item.id}</button>
        }
    ]

    const usersColumn = [
        {
            attribute: "name"
        },
        {
            attribute: "id",
            component: (item) => <button>{item.id}</button>
        },
        {
            attribute: "detail",
            component: (item) => {
                let target = "/detail/" + item.id;
                return <Link to={target}>detail usera</Link>
            }
        }
    ]

    return (
        <div className="App">
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/user">Users</Link>
                            </li>
                            <li>
                                <Link to="/todo">TODOS</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/user">
                            <MySecondTable baseUri={"http://localhost:3004/users"} columns={usersColumn}/>
                        </Route>
                        <Route path="/todo">
                            <MySecondTable baseUri={"http://localhost:3004/todos"} columns={columns}/>
                        </Route>
                        <Route path="/detail/:userId">
                            <UserDetail/>
                        </Route>
                        <Route path="/">
                            <Table data={data} columns={columns} />
                        </Route>
                    </Switch>
                </div>
            </Router>
        </div>
    );
}

export default App;
