var Menu = React.createClass({
  render: function() {
    return (
      <div>
        <h3 className='center-align grey-text text-darken-2'>Menu for the Week</h3>
          <ol className='red-text text-lighten-3'>Sunday</ol>
          <ol className='orange-text text-lighten-3'>Monday</ol>
          <ol className='yellow-text text-lighten-3'>Tuesday</ol>
          <ol className='green-text text-lighten-3'>Wednesday</ol>
          <ol className='blue-text text-lighten-3'>Thursday</ol>
          <ol className='purple-text text-lighten-3'>Friday</ol>
          <ol className='pink-text text-lighten-3'>Saturday</ol>
      </div>
    );
  } 
});

export default Menu;