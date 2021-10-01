import React from 'react';

function Table({data}) {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Attendance</th>
                </tr>
            </thead>
            <tbody>
                {data.map((obj, index) => {
                    return (
                      <tr key={index}>
                        <td>{obj.name}</td>
                        <td>{obj.email}</td>
                        <td>{obj.duration}</td>
                      </tr>
                    );
                })}
            </tbody>
        </table>
    );
}

export default Table;