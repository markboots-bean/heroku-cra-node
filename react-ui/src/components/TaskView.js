import React, { Fragment, useState } from 'react';

const TaskEmployer = () => {
    return (
        <Fragment>
            <h1 className="text-center mt-2">Task Viewer</h1>
            <h2 className="text-center pt-2">Current Tasks</h2>
            <table className="pt-1 px-1">
                <thead>
                <tr>
                    <th px-1>Task</th>
                    <th px-4>Task Description</th>
                    <th px-0>Complete</th>
                </tr>   
                </thead>
                <tbody id="employee-task-table"></tbody>
                <button className="btn btn-success">Mark as Complete</button>
            </table>
        </Fragment>
    )
    
}
    