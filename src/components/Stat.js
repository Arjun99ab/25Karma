import React from 'react';
import { formatNum } from 'utils';

/*
* Shows a title/value pair for stats
*
* @param {string} props.title 		The title of the statistic (will be in bold)
* @param {string} props.children 	The value of the statistic 
*/
export function Stat(props) {
	function renderChildren() {
		if (props.children === undefined) return 0;
		else if (isNaN(props.children)) return props.children;
		else return formatNum(props.children);
	}

	return (
		<div style={{paddingBottom: '0.25rem'}}>
			<span className="font-bold">{`${props.title}: `}</span>
			<span className="c-gray">
				{renderChildren()}
			</span>
		</div>
		);
}