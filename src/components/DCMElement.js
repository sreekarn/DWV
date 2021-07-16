import React from 'react';

var dwv = require("dwv");
dwv.gui.getElement = dwv.gui.base.getElement;

class DCMElement extends React.Component{
    constructor(){
        super();
        this.state={
            app: new dwv.App(),
        }
    }

    componentDidMount(){
      this.state.app.init({containerDivId: this.props.id});
      this.state.app.loadURLs(this.props.urls);
    }
  
    render(){
      return (
            <div id={this.props.id}>
              <div className="layerContainer"></div>
            </div>
          );
    }
  }
  
  export default DCMElement;