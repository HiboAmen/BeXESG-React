// TableComponent.js
import React from "react";

function FillUpStep({ tables, activeTableIndex }) {
  if (!tables) {
    return null;
  }

  const tablesToRender = tables[activeTableIndex];

  if (!tablesToRender) {
    return null;
  }

  return (
    <div key={activeTableIndex} className="TableContainer2">
      <h4 className="table-title">{tablesToRender.title}</h4>
      <table className="table">
        <thead className="TableHeader">
          <tr>
            {tablesToRender.headers?.map((header, headerIndex) => (
              <th key={headerIndex} className="tabel-cell">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tablesToRender.rows?.map((row, rowIndex) => (
            <tr key={rowIndex}>
              <td>{row.label}</td>
              {row.cells?.map((cell, cellIndex) => (
                <td key={cellIndex} contentEditable={true}>
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FillUpStep;
