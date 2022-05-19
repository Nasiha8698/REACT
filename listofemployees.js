import React from 'react'
import './App.css';

function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Job</th>
          
        </tr>
        <tr>
          <td>Nasiha</td>
          <td>Engineer</td>
          
        </tr>
        <tr>
          <td>Hameem</td>
          <td>Architecture</td>
          
        </tr>
        <tr>
          <td>Aalia</td>
          <td>pharmacist</td>
          
        </tr>
        <tr>
          <td>Farila</td>
          <td>Student</td>

        </tr>
      </table>
    </div>
  );
}
  
export default App;

----------------------------------app.css-------------------------------------------------------
  
  .App {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
  
table {
  border: 2px solid forestgreen;
  width: 800px;
  height: 200px;
}
  
th {
  border-bottom: 1px solid black;
}
  
td {
  text-align: center;
  border-bottom: 1px solid black;
}
