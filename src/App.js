import './App.css';
import React from "react";
// import {
//     Switch,
//     BrowserRouter as Router,
//     Route,
//     Link
// } from "react-router-dom";
import {About} from './pages/about/about.page'
import {Home} from './pages/home/home.page'


function App() {
  return (
      <div>
          <Home>

          </Home>
      </div>

  );
      // (
  //     <Router>
  //         <div>
  //             <nav>
  //                 <ul>
  //                     <li>
  //                         <Link to="/">Home</Link>
  //                     </li>
  //                     <li>
  //                         <Link to="/about">About</Link>
  //                     </li>
  //                 </ul>
  //             </nav>
  //
  //             {/* A <Switch> looks through its children <Route>s and
  //           renders the first one that matches the current URL. */}
  //             <Switch>
  //                 <Route path="/about">
  //                     <About />
  //                 </Route>
  //                 <Route path="/">
  //                     <Home />
  //                 </Route>
  //             </Switch>
  //         </div>
  //     </Router>
  //
  // );
}

export default App;
