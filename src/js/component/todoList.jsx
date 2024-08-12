import React, { useState } from "react";
import Task from "./task";

const TodoList = () => {

    const [newTask, setNewTask] = useState("");
    const [taskList, setTaskList] = useState([]);

    return (

        <div className="container bg-white rounded-0">

            <input
                className="col-12 px-5 form-control rounded-0"
                type="text"
                value={newTask}
                placeholder={taskList.length === 0 ? "No tasks, add a task?" : "What needs to be done?"}
                onChange={(event) => setNewTask(event.target.value)}
                onKeyUp={(event) => {
                    if (event.key === "Enter" && newTask.trim() !== "") {
                        setTaskList([newTask, ...taskList]);
                        setNewTask("");
                    }
                }}
            />


            {taskList.map((tarea, indice) =>
                <Task
                    task={tarea}
                    key={indice}
                    onRemove={() => {
                        setTaskList(taskList.filter((_tarea, indiceABorrar) => indice != indiceABorrar))
                    }}
                />
            )}
            <p className="border text-start px-5">
                {taskList.length} items left
            </p>

        </div>
    )
}

export default TodoList;