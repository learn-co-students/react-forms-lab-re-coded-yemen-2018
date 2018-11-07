import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      value:''
    };
  }
  handleUserName=event =>{

    this.setState({value:event.target.value});
  }
  handlePassword=event =>{

    this.setState({value:event.target.value});
  }
  handleSubmit = event => {
  event.preventDefault()

}

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text"  value={this.state.username} onChange={this.handleUserName}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
