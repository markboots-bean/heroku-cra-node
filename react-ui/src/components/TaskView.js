import React, { Fragment, useState } from 'react';

const TaskView = () => {
    return (
        <Fragment>
            <h1 className="text-center mt-2">Task Viewer</h1>
            <h2 className="text-center pt-2">Task Viewer</h2>
            <table className="pt-1 px-1">
                <thead>
                <tr>
                    <th px-1>Task</th>
                    <th px-3>Task Description</th>
                    <th px-1>Complete</th>
                    </tr>
                </thead>
            </table>
        </Fragment>
    )
    
}
    