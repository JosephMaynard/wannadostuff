var React  = require('react');
var ReactDOM = require('react-dom');

var ReactRouter = require('react-router');
var Router  = ReactRouter.Router;
var Route = ReactRouter.Route;
var Navigation = ReactRouter.Navigation;
var createBrowserHistory = require('history/lib/createBrowserHistory');

var App = React.createClass({
	render: function(){
		return (
			<div>Hello Happy Bollocks</div>
		)
	}
});

/*
  Not Found
*/

var NotFound = React.createClass({
  render : function() {
    return <h1>Not Found!</h1>
  }
});


/*
  Routes
*/

var routes = (
  <Router history={createBrowserHistory()}>
    <Route path="/" component={App}/>
    <Route path="*" component={NotFound}/>
  </Router>
)

ReactDOM.render(
	routes,
	document.getElementById('app')
);