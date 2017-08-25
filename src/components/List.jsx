var React= require('react');
var ReactDOM= require('react-dom');
var ListItem= require('./ListItem.jsx');

var values= [{ "id": 1, "description": "Coffee"}, { "id":2, "description": "Tea"}, {"id":3, "description": "Green Tea"}];

var List= React.createClass({
  render: function(){
    var ListItems= values.map(function(item){
      return <ListItem key={item.id} value={item.description} />
    });
    return(
      <ul>{ListItems}  </ul>
    )
  }
});

module.exports= List;
