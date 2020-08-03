import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { MdSearch } from 'react-icons/md';
import './Searchbar.css';

/*
* Styled input with search button
*/
export function Searchbar(props) {

	const refInput = useRef("input")
	const history = useHistory();
	
	/*
	* Checks if the key that was pressed was the Enter key
	*
	* @param {KeyboardEvent} event Generated by onKeyDown listener
	*/
	function handleKeyDown(event) {
		if(event.key === "Enter") {
			search();
		}
	}
	
	/*
	* Searches for a player based on the text currently in the input
	*/
	function search() {
		const player = refInput.current.value;
		if (player !== '') {
			history.push(`/player/${player}`);
		}
	}

	return (
		<div className="py-1 px-2 input">
			<input
			ref={refInput}
			type="text" 
			onKeyDown={handleKeyDown} 
			autoFocus
			/>
			<IconContext.Provider value={{ className: 'react-icons' }}>
				<button className="font-md" onClick={search}>
					<MdSearch />
				</button>
			</IconContext.Provider>
		</div>
	);
}