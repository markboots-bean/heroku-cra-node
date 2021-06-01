import React, { Fragment, useEffect, useState } from 'react';

const viewalltasks = () => {
    const [tasks, setTasks] = useState([]);
    
    const getTodos = async () => {
        try {
          const response = await fetch("http://localhost:5000/view");
          const jsonData = await response.json();
          console.log(jsonData);
            let table = document.getElementById("employeetasks");
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
            <style>{"table, th, td{border:1px solid black; padding: 10px;margin:auto}"}</style>
            <h1 className="text-center mt-2">All Employee Tasks</h1>
            <body className="text-center mt-2">
            <table>
                <thead>
                    <tr><th>Employee</th><th>Task Description</th></tr>
                </thead>
                <tbody id="employeetasks"></tbody>
            </table>
            </body>
        </Fragment>
    )
}

export default viewalltasks;
