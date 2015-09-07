// # Place all the behaviors and hooks related to the matching controller here.
// # All this logic will automatically be available in application.js.
// # You can use CoffeeScript in this file: http://coffeescript.org/

//////// CoffeeScript Way Using Dom /////////
// this.Records = React.createClass({
//  render: function() {
//    return React.DOM.div({
//      className: 'records'
//    }, React.DOM.h2({
//      className: 'title'
//    }, 'Records'));
//  }
// });
/////////////////////////////////////

this.Records = React.createClass({
 render: function() {
   return (
     <div className="records">
       <h2 className="title"> Records </h2>
    </div>
  );
 }
});
