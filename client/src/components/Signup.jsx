var Signup = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();

    console.log('Registering');    
    var newUser = {
      username: this.refs.username.value.toLowerCase(),
      password: this.refs.password.value,
      firstname: this.refs.firstname.value,
      lastname: this.refs.lastname.value,
      phone: '777 777 7777',
      email: 'cats@gmail.com',
      diet: ''
    };

    $.ajax({
      url: '/login/user',
      type: 'POST',
      data: JSON.stringify(newUser),
      contentType: 'application/json',
      success: function (data) {
        console.log('success logging in', data);
        //temporarily attaching user to window
        window.un = newUser.firstname.charAt(0).toUpperCase() + newUser.firstname.slice(1);
        window.cu = newUser.username;
        ///
        BrowserHistory.push('/groups/' + newUser.username);
      },
      error: function (data) {
        console.error('fail', data);
      }
    });
  },
  render: function() {
    return (
      <div>
        <h2 className='center-align grey-text text-darken-2'>Sign Up?</h2>
        <form className='col s10 offset-s1' onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className="input-field col s4 offset-s2">
            <input placeholder="First Name" ref="firstname" type="text" className="validate" required/>
            </div>
            <div className="input-field col s4">
            <input placeholder="Last Name" ref="lastname" type="text" className="validate" required/>
            </div>            
          </div>
          <div className='row'>
            <div className="input-field col s8 offset-s2">
            <input placeholder="Username" ref="username" type="text" className="validate" required/>
            </div>
          </div>
          <div className='row'>
            <div className="input-field col s8 offset-s2">
            <input placeholder='Password' ref="password" type="password" className="validate" required/>
            </div>
          </div>
          <div className='center-align'>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
          </div>
        </form>
      </div>
    );
  }
});

export default Signup;