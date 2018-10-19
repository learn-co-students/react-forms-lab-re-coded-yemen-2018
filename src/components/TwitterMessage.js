import React from "react";

class TwitterMessage extends React.Component {
  checkChars = event =>{
      this.setState({
        value: event.target.value
      });

  }
  constructor() {
      super();

      this.state = {
        value: ''
      };
    }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={event => this.checkChars(event)} value={this.state.value}/>
        {this.props.maxChars-this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
