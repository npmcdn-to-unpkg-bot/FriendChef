var Week = React.createClass({
  saveData: function(event) {
    event.preventDefault();

    var weekString = 
    this.refs.sun.value + ',' + this.refs.mon.value + ',' + 
    this.refs.tue.value + ',' + this.refs.wed.value + ',' + 
    this.refs.thu.value + ',' + this.refs.fri.value + ',' + 
    this.refs.sat.value;

    console.log(weekString);
    console.log('groupname to be submited ', this.props.groupName);
    console.log({menu: weekString,
                            username: window.un,
                            groupname: this.props.groupName});
    $.ajax({
      url: '/group/menu',
      type: 'POST',
      data: JSON.stringify({menu: weekString,
                            username: window.un,
                            groupname: this.props.groupName}),
      contentType: 'application/json',
      success: function (data) {
        console.log('successfully saved menu data');
      },
      error: function (data) {
        console.error('fail', data);
      }
    });
  }, 
  render: function() {
    return (
      <div>
        <h2 className='center-align grey-text text-darken-2'>{this.props.groupName}'s Weekly Schedule</h2>  
        <form onSubmit={this.saveData}>
        <table className='responsive-table centered hoverable'> 
          <thead>
            <tr>
                <th className='red-text text-lighten-3' data-field="sun">Sunday</th>
                <th className='orange-text text-lighten-3' data-field="mon">Monday</th>
                <th className='yellow-text text-lighten-3' data-field="tue">Tuesday</th>
                <th className='green-text text-lighten-3' data-field="wed">Wednesday</th>
                <th className='blue-text text-lighten-3' data-field="thu">Thursday</th>
                <th className='purple-text text-lighten-3' data-field="fri">Friday</th>
                <th className='pink-text text-lighten-3' data-field="sat">Saturday</th>
            </tr>
          </thead>
          <tbody>
            <tr className='grey-text text-darken-1'>
              {/*input or text field???*/}
              <td className='sun-menu'>
                <input placeholder='food' placeholder={this.props.menu[0]} ref='sun' type='text'/>
              </td>
              <td className='mon-menu'>
                <input placeholder='food' placeholder={this.props.menu[1]} ref='mon' type='text'/>
              </td>
              <td className='tue-menu'>
                <input placeholder='food' placeholder={this.props.menu[2]} ref='tue' type='text'/>
              </td>
              <td className='wed-menu'>
                <input placeholder='food' placeholder={this.props.menu[3]} ref='wed' type='text'/>
              </td>
              <td className='thu-menu'>
                <input placeholder='food' placeholder={this.props.menu[4]} ref='thu' type='text'/>
              </td>
              <td className='fri-menu'>
                <input placeholder='food' placeholder={this.props.menu[5]} ref='fri' type='text'/>
              </td>
              <td className='sat-menu'>
                <input placeholder='food' placeholder={this.props.menu[6]} ref='sat' type='text'/>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='right-align'>
          <button className="btn waves-effect waves-light" type="submit" name="action">Submit
            <i className="material-icons right">send</i>
          </button>
        </div>
        </form>
      </div>
    );
  }
});

export default Week;