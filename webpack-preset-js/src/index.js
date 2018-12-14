// import Form from './Form/';
// import ArticlesList from './ArticlesList/';


// const NEWS_LIST = localStorage.length > 0 ? (
// 	JSON.parse(localStorage.getItem("newsList"))
// ) : (
// 	[]
// )

// // const NEWS_LIST = [
// 	// {
// 	// 	id: 1,
// 	// 	title: 'title 1',
// 	// 	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 	// 	image: 'https://placehold.it/400x300/'
// 	// },
// 	// {
// 	// 	id: 2,
// 	// 	title: 'title 2',
// 	// 	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 	// 	image: 'https://placehold.it/400x300/'
// 	// },
// 	// {
// 	// 	id: 3,
// 	// 	title: 'title 3',
// 	// 	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 	// 	image: 'https://placehold.it/400x300/'
// 	// },
// 	// {
// 	// 	id: 4,
// 	// 	title: 'title 4',
// 	// 	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 	// 	image: 'https://placehold.it/400x300/'
// 	// },
// 	// {
// 	// 	id: 5,
// 	// 	title: 'title 5',
// 	// 	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 	// 	image: 'https://placehold.it/400x300/'
// 	// },
// 	// {
// 	// 	id: 6,
// 	// 	title: 'title 6',
// 	// 	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 	// 	image: 'https://placehold.it/400x300/'
// 	// },
// 	// {
// 	// 	id: 7,
// 	// 	title: 'title 7',
// 	// 	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 	// 	image: 'https://placehold.it/400x300/'
// 	// },
// 	// {
// 	// 	id: 8,
// 	// 	title: 'title 8',
// 	// 	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 	// 	image: 'https://placehold.it/400x300/'
// 	// },
// 	// {
// 	// 	id: 9,
// 	// 	title: 'title 9',
// 	// 	text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
// 	// 	image: 'https://placehold.it/400x300/'
// 	// }
// // ];


// class App extends React.Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			isListUpdated: false
// 		};
// 		this.updateList = this.updateList.bind(this);
// 	}
// 	updateList() {
// 		this.state = {
// 			isListUpdated: !isListUpdated,
// 		}
// 	}
// 	render() {
// 		return (
// 			<div>
// 				<Form updateList={this.updateList} />
// 				<ArticlesList />
// 			</div>
// 		)
// 	}
// }
// ReactDOM.render(
// 	<App />,
// 	document.getElementById('app')
// );
const text = 'ssss';
console.log(text)
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(
	<div>sdsds</div>,
	document.getElementById('app')
)