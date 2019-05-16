import React, { Component } from "react";
import Button from '@material-ui/core/Button';
import  {Route, BrowserRouter as Router, Switch,Link} from "react-router-dom";
import Card from '@material-ui/core/Card';
import { CardContent, Typography } from "@material-ui/core";


var cardStyle = {
    display: 'block',
    width: '30vw',
    transitionDuration: '0.3s',
    height: '20vw'
}

class Weather extends Component {
    constructor(props){
        super(props);
        const min = 
        this.obtenerMin = this.obtenerMin.bind(this);
        this.obtenerMax = this.obtenerMax.bind(this);
        this.state = {
            weatherItems: [
                {month:'May', day:'15', max: '38', min: '18'},
                {month:'May', day:'16', max: '30', min: '20'},
                {month:'May', day:'17', max: '33', min: '17'},
                {month:'May', day:'18', max: '31', min: '19'}
            ]
        };
    }



    obtenerMin(){
        if(this.props.match.params.day == this.state.weatherItems[0].day){
            return this.state.weatherItems[0].min;
        }
        else if(this.props.match.params.day == this.state.weatherItems[1].day){
            return this.state.weatherItems[1].min;
        }
        else if(this.props.match.params.day == this.state.weatherItems[2].day){
            return this.state.weatherItems[2].min;
        }
        else if(this.props.match.params.day == this.state.weatherItems[3].day){
            return this.state.weatherItems[3].min;
        }
    }
    
    obtenerMax(){
        if(this.props.match.params.day == this.state.weatherItems[0].day){
            return this.state.weatherItems[0].max;
        }
        else if(this.props.match.params.day == this.state.weatherItems[1].day){
            return this.state.weatherItems[1].max;
        }
        else if(this.props.match.params.day == this.state.weatherItems[2].day){
            return this.state.weatherItems[2].max;
        }
        else if(this.props.match.params.day == this.state.weatherItems[3].day){
            return this.state.weatherItems[3].max;
        }
    }


    render() {
      return (
          <div>
          <Card style={cardStyle}>
              <CardContent>
                  <Typography>
                      Min:
                  </Typography>
                  <Typography>
                      {this.obtenerMin()}
                  </Typography>
              </CardContent>
          </Card>
          <Card style={cardStyle}>
              <CardContent>
                  <Typography>
                      Max:
                  </Typography>
                  <Typography>
                      {this.obtenerMax()}
                  </Typography>
              </CardContent>
          </Card>
          </div>
      );
    }
  }
  
  export default Weather;