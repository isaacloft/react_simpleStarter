import React from 'react';
import ReactDom from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY_YOUTUBE = 'AIzaSyBvuQWEnyly3-GRI5B3mO7mKk6UBGi-P9s';

const App = () => {
	return (
		<div>
			<SearchBar />
			hello
		</div>
	);
};

ReactDom.render(<App />, document.querySelector('.container'));
