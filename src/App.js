import './App.css';
import Item from "./item";
import {useEffect, useState} from "react";
import TaskForm from "./task-form";

function App() {

    const [task, setTask] = useState([])
    const [isPending, setIsPending] = useState(true)
    const [error, setError] = useState()

    const onNewTaskHandler = (product) => {
        const newTask = [...task];
        newTask.push(product);
        console.log(newTask);
        setTask(newTask)
    }

    useEffect(() => {
        setTimeout(() => {
                fetch('http://localhost:3001/items')
                    .then(response => {
                        if (response.ok) {
                            return response.json()
                        }
                        throw new Error("Unable get tasks: " + response.statusText)
                    })
                    .then(json => setTask(json))
                    .catch((err) => setError(err.message))
                    .finally(() => setIsPending(false))
            }
            , 1000)
    }, [])

    const removeTaskHandler = function (product) {
        const newTask = [...task];
        const taskIndex = newTask.findIndex(item => item.id === product.id)
        newTask.splice(taskIndex, 1)
        setTask(newTask)
    }

    return (
        <div className="App">
            <h1>TO-DO List</h1>
            <TaskForm onNewTask={onNewTaskHandler}/>
            {isPending && "Loading data..."}
            {error && <div>{error}</div>}
            {task.map(item => <Item key={item.id} item={item} onClickHandler={removeTaskHandler}/>)}
        </div>
    );
}

export default App;
