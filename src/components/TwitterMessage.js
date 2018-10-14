import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      characters: ""
    };
  }
  
   maxCharacters = event => {
    this.setState({
      characters: event.target.value,
    });
}

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.maxCharacters} value={this.state.characters}/>
        {this.props.maxChars-this.state.characters.length}
      </div>
    );
  }
}

export default TwitterMessage;
