export default App = React.createClass({
  render: function() {
    return (
      <div>
        {console.log('MAIN')}
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper green lighten-1">
              <Link to='/' className="brand-logo center">FriendChef</Link>
            </div>
          </nav>
        </div>
        <div className='grey-text text-darken-2'>
          {this.props.children || 'Welcome to FriendChef!!!'}
        </div>
      </div>  
    );
  }
});