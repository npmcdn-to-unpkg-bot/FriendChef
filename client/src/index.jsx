import { Router, Route, Link, IndexRoute, History, browserHistory } from 'react-router';

import { App, AddGroup, Diet, Groups, Login, Main, Menu, Signup, Week } from './Components.jsx';

console.log('loaded app');

var Base = React.createClass({
  render() {
    return (
      <div>
        <h1 className='center-align'>Welcome :)</h1>
        <div className='container center-align'>
          <Link to='signup'><div className='btn'>Sign Up</div></Link>
          <span> - or - </span>
          <Link to='login'><div className='btn'>Login</div></Link>
        </div>      
      </div>
    );
  }
});

var Error = React.createClass({
  render() {
    return (
      <div className="center-align">
      {console.log('ERROR', this.props.params)}
        <h1>Error Cat 404</h1>
        <img className='circle responsive-img' src='//pixabay.com/static/uploads/photo/2014/05/23/12/06/cat-351926_960_720.jpg' />
      </div>
    );
  }
});

var routes = (
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Base}/>
      <Route path='login' component={Login}/>
      <Route path='signup' component={Signup}/>
      <Route path='groups/addgroup' component={AddGroup}/>
      <Route path='groups/:userName' component={Groups}/>
      <Route path='main(/:userName/:groupName)' component={Main}/>
      <Route path='*' component={Error}/>
    </Route>
  </Router>
);

ReactDOM.render(routes, document.getElementById('app'));


