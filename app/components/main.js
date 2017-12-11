// Include React dependency
var React = require('react');

var Main = React.createClass({

	render: function() {

		return(
			<div className = 'main-container'>
				<div className = 'row'>
					<div className = 'jumbotron'>
						<h1>Scraper: New York Times</h1>
					</div>
				</div>
				<div className = 'row'>
					<Search />
				</div>
				<div className = 'row'>
					<Saved />
				</div>
            </div>
        )
	}
})