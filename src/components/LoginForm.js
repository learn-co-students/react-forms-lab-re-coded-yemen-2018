import React from "react";

class LoginForm extends React.Component {

  onSubmit = event =>{
    event.preventDefault()

    if(this.state.username==="null" || this.state.password==="null") {
      return this.props.onSubmit(this.state)

    }

  }
  handleInputChange = event =>{
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  constructor() {
    super();

    this.state = {
                username:'',
                password:''
           };
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input
              id="username"
              type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleInputChange}
              />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
            id="password"
             name="password"
             type="password"
             value={this.state.password}
             onChange={this.handleInputChange}
             />
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
