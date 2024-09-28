import logo from './logo.svg';
import React from 'react'
import './style/App.css';
import MainRouter from './Mainrouter';
import { BrowserRouter as Router } from 'react-router-dom'

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
function App() {
  return (
  <Router>
    <MainRouter/>
  </Router>
  );
}
export default App;
