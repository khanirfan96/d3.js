import Home_page from './Home_page';
import Bar_chart from "./Bar_chart";
import Random from './Random';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {  

  return (
   <div>
     <Router>
                <Switch>
                <Route exact path="/" 
                        component={Home_page} />
                    <Route exact path="/Bar_chart" 
                        component={Bar_chart} />
                        <Route exact path="/container" 
                        component={Random} />
                        <Route exact path="/container" 
                        component={Random} />
                </Switch>
      </Router>
        
   </div>   
  );
}

export default App;
