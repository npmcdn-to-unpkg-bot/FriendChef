export default Login = React.createClass({
  authenticate: function(event) {
    event.preventDefault();

    var user = {
      username: this.refs.username.value.toLowerCase(),
      password: this.refs.password.value,
    };

    $.ajax({
      url: '/login/user',
      type: 'GET',
      data: user,
      contentType: 'application/json',
      success: function (data) {
        window.un = data[0].firstname.charAt(0).toUpperCase() + data[0].firstname.slice(1);
        window.cu = data[0].username;        
        BrowserHistory.push('/groups/' + data[0].username);
      },
      error: function (data) {
        console.error('fail', data);
      }
    });
  },
  render: function() {
    return (
      <div>
        {console.log('LOGIN')}
        <h2 className='center-align grey-text text-darken-2'>Login?</h2>
        <form className='col s10 offset-s1' onSubmit={this.authenticate}>
          <div className='row'>
            <div className="input-field col s8 offset-s2">
            <input placeholder="Username" ref='username' type="text" className="validate"/>
            </div>
          </div>
          <div className='row'>
            <div className="input-field col s8 offset-s2">
            <input placeholder='Password' ref='password' type="password" className="validate"/>
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