var AddGroup = React.createClass({
  handleSubmit: function(event) {
    event.preventDefault();

    console.log('Adding Group');
    var newGroup = {
      groupname: this.refs.groupname.value
    };

    $.ajax({
      url: '/group/addgroup',
      type: 'POST',
      data: JSON.stringify(newGroup),
      contentType: 'application/json',
      success: function (data) {
        console.log('success adding group', data);
        BrowserHistory.push('/main/' + window.cu + '/' + newGroup.groupname);
      },
      error: function (data) {
        console.error('fail', data);
      }
    });
  },
  render: function() {
    return (
      <div>
        <h2 className='center-align grey-text text-darken-2'>Add Group?</h2>
        <form className='col s10 offset-s1' onSubmit={this.handleSubmit}>
          <div className='row'>
            <div className="input-field col s8 offset-s2">
            <input placeholder="Group Name" ref="groupname" type="text" className="validate" required/>
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

export default AddGroup;