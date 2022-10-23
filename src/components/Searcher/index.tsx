import React, { useState } from 'react';
import styled from 'styled-components';
import SearchIcon from '/public/icons/search.svg';
import FilterIcon from '/public/icons/filter.svg';
import { SearcherInterface } from '@models/ComponentModels/Searcher.model';
const SearcherContainer = styled.div`
	position: relative;
	max-height: 49px;
	.left {
		left: var(--l);
		position: absolute;
		top: 8px;
	}
	.rigth {
		right: var(--l);
		position: absolute;
		top: 8px;
		border: none;
		background: transparent;
		outline: none;
		cursor: pointer;
	}
	picture,
	picture img {
		display: flex;
		width: 32px;
		height: 32px;
	}
`;
const SearcherComponent = styled.div`
	outline: none;
	padding: var(--s) calc(var(--xl) + var(--xl));
	border-radius: var(--xs);
	background: var(--gray-soft);
	color: var(--gray-dark);
	max-height: 49px;
	:empty:before {
		content: attr(placeholder);
		pointer-events: none;
	}
`;

const Filters = styled.div`
	position: absolute;
	top: 43px;
	width: 100%;
	background: var(--gray-soft);
	border-radius: 0 0 var(--xs) var(--xs);
	padding: var(--s) var(--l);
`;

interface SearcherProps {
	placeholder: string;
	options: SearcherInterface[];
}
const Searcher = ({ placeholder, options }: SearcherProps) => {
	console.log();
	const [state, setState] = useState({
		openFilter: false,
	});
	const handleFilter = () => {
		setState({
			...state,
			openFilter: !state.openFilter,
		});
	};
	return (
		<SearcherContainer>
			<picture className="left">
				<img src={SearchIcon.src} alt="" />
			</picture>
			<SearcherComponent contentEditable={true} placeholder={placeholder}></SearcherComponent>
			<button onClick={handleFilter} onKeyUp={handleFilter} className="rigth">
				<picture>
					<img src={FilterIcon.src} alt="" />
				</picture>
			</button>
			{state.openFilter && (
				<Filters>
					{options.map((option, index) => (
						<div key={index}>{option.name}</div>
					))}
				</Filters>
			)}
		</SearcherContainer>
	);
};

export { Searcher };
