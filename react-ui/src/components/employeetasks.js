import React, { Fragment, useState } from 'react';

const EmployeeTasks = () => {
    return (
        <Fragment>
            <h1 className="text-center mt-2">Task Viewer</h1>
            <h2 className="text-center pt-2">Current Tasks</h2>
            <table className="table mt-5 text-center">
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
    