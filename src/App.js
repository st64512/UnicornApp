
import './App.css';
import Table from "./components/table/Table";
import MySecondTable from "./components/table/MySecondTable";


/*
TODO to next time:
pagination for table with json server
 */

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
        }
    ]

    return (
        <div className="App">
            <Table data={data} columns={columns} />
            <MySecondTable baseUri={"http://localhost:3004/users"} columns={usersColumn}/>
            <MySecondTable baseUri={"http://localhost:3004/todos"} columns={columns}/>
        </div>
    );
}

export default App;
