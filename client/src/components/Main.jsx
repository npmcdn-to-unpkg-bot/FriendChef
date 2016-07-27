var Main = React.createClass({
  getInitialState: function() {
    return {menu: ''};
  },
  componentDidMount: function() {
    this.loadGroup((data) =>
      this.setState({
        menu: data
      })
    );
  },
  loadGroup: function(callback) {
    var loadData = {
      username: window.un,
      groupname: this.props.params.groupName
    };

    $.ajax({
      url: '/group/menu',
      type: 'GET',
      data: loadData,
      contentType: 'application/json',
      success: function (data) {
        console.log('success grabbing the data', data);

        callback(data.split(','));
      },
      error: function (data) {
        console.error('fail', data);
      }
    });
  },
  render: function() {
    console.log('rendering main!');
    return (
      <div>
        <div className='container'>
          <h3>Hey{' ' + window.un}!</h3>
          <div className='row'>
            <div className='col s10 offset-s1'>
            <Week groupName={this.props.params.groupName || 'Group'} menu={this.state.menu}/>
            </div>
          </div>
          <div className='divider'></div>
          <div className='row'>
            <div className='col s6'>
              <Menu/> 
            </div>
            <div className='col s6'>
              <Diet/>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

export default Main;