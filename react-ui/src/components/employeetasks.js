import React, { Fragment, useEffect, useState } from 'react';

const EmployeeTasks = () => {
    const [tasks, setTasks] = useState([]);
    const getTodos = async () => {
        try {
          const response = await fetch("http://localhost:5000/usertasks");
          const jsonData = await response.json();
          console.log(jsonData);
            let table = document.getElementById("employee-task-table");
            for (let row of jsonData){
                let tR = document.createElement("tr");
                for(let key of ["name", "description"]){
                    let cell = document.createElement("td");
                    cell.textContent = row[key];
                    table.append(cell);
                }
                table.append(tR);}
          setTasks(jsonData);
        } catch (err) {
          console.error(err.message);
        }
      };
    
    useEffect(() => {
        getTodos();
      }, []);

    return (
        <Fragment>
            <h1 className="text-center mt-2">Task Viewer</h1>
            <h2 className="text-center pt-2">Current Tasks</h2>
            <table class="table mt-5 text-center">
                <thead>
                    <tr>
                        <th>Task</th>
                        <th>Task Description</th>
                        <th>Complete</th>
                    </tr>
                </thead>
                <tbody id="employee-task-table"></tbody>
            </table>
        </Fragment>
    )
    
}

export default EmployeeTasks;
