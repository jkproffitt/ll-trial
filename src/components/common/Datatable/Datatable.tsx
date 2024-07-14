import React from 'react';

interface DataTableProps {
    data: any[]; // Replace `any[]` with your actual data type
}

function DataTable({ data }: DataTableProps) {
    return (
        <div className="dataTable">
            <h2>Data Table</h2>
            <table>
                <thead>
                    <tr>
                        <th>Column 1</th>
                        <th>Column 2</th>
                        {/* Add more columns as needed */}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{item.column1}</td>
                            <td>{item.column2}</td>
                            {/* Map and display more columns */}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default DataTable;
