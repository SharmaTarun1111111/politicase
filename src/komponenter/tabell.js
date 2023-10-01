import React from 'react';

const TableComponent = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>Merke</th>
          <th>Modell</th>
          <th>Årsmodell</th>
          <th>Registreringsnummer</th>
          <th>Status</th>
          <th>Oppdrag</th>      
        </tr>
      </thead>
      <tbody>
        {data.map(item => (
          <tr key={item.id}>
            <td>{item.merke}</td>
            <td>{item.modell}</td>
            <td>{item.årsmodell}</td>
            <td>{item.regNr}</td>
            <td>{item.status}</td>
            <td>{item.oppdrag}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TableComponent;