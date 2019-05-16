import React from 'react';
import { Route,Link,BrowserRouter as Router} from 'react-router-dom'
import Home from './Home'
import Weather from './Weather';

class RouterDefinition extends React.Component{
    render(){
        return(
            <Router>
                <div>
                    <Route path = "/" component={Home}/>
                    <Route path = "/weather" component={Weather}/>
                </div>
            </Router>
        );
    }
}

export default RouterDefinition;