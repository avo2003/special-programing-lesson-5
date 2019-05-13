import React from 'react';

export default function PortfolioItem(props) {
	return (
		<div>
			<h1>Portfolio Item Page for item {props.match.params.id}</h1>
		</div>
	);
}