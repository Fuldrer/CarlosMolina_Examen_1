import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import  {Route, BrowserRouter as Router, Switch,Link} from "react-router-dom";



class Home extends React.Component {
    constructor(props){
        super(props);
        this.intercalar = this.intercalar.bind(this);
        this.state = {
            estado1: 'Bienvenido',
            estado2: 'Weather App',
        };
    }

    intercalar(){
        this.setState({estado1: this.state.estado2})
        this.setState({estado2: this.state.estado1})
    }

    render() {
      return (
          <div>
              <h1>
                  {this.state.estado1}              
              </h1>
              <h1>
                  {this.state.estado2}
              </h1>
              <Button onClick={this.intercalar} variant="contained" color="primary">
                Intercalar
              </Button>
              <ul>
                  <li>
                      <Link to ='/weather/May/15'>Weather of May 15</Link>
                  </li>
                  <li>
                      <Link to = '/weather/May/16'>Weather of May 16</Link>
                  </li>
                  <li>
                      <Link to = '/weather/May/17'>Weather of May 17</Link>
                  </li>
                  <li>
                      <Link to = '/weather/May/18'>Weather of May 18</Link>
                  </li>
              </ul>
          </div>
      );
    }
  }
  
  export default Home;