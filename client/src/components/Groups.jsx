var GroupLink = React.createClass({
  render() {
    return (
      <div>
        <Link to={`/main/${window.un}/${this.props.group}`}>
          <div className='btn grey darken-1'>
            {this.props.group}
          </div>
        </Link>
        <br/>
        <br/>
      </div>
    );
  }
});

export default Groups = React.createClass({
  getInitialState: function() {
    return {groups: []};
  },
  componentDidMount: function() {
    this.loadAllGroups((data) =>
      this.setState({
        groups: data
      })
    );
  },
  loadAllGroups: function(callback) {
    $.ajax({
      url: '/group/getgroups',
      type: 'GET',
      contentType: 'application/json',
      success: function (data) {
        console.log('success grabbing the data', data);
        callback(data);
      },
      error: function (data) {
        console.error('fail', data);
      }
    });
  },
  render: function() {
    return (
      <div>
        <div className='container center-align'>
          <br/>
          <div className='row'>
            <div className='col s10 offset-s1'>
            <Link to='/groups/addgroup'><div className='btn green'>Add Group</div></Link>
            </div>
          </div>
          <div className='divider'/>
          {this.state.groups.map((group) =>
            <GroupLink key={group.id} group={group.groupname}/>
          )}          
        </div>
      </div>
    );
  }
});