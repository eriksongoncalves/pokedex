import styled from 'styled-components';
import { Link } from 'react-router-dom';

import searchIcon from '../../assets/search-icon.png';

export const SearchInput = styled.input`
	background: url(${searchIcon}) no-repeat right 1rem center #fff;
	border: none;
	height: 6rem;
	width: 100%;
	font-size: 2rem;
	padding: 1rem;
	padding-right: 7rem;
	border-radius: 1.5rem;

	&::placeholder {
		color: #ecebeb;
		font-weight: bold;
	}
`;

export const CardContainer = styled.section`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-gap: 2.4rem;
	margin-top: 2rem;

	@media (max-width: 768px) {
		grid-template-columns: repeat(3, 1fr);
	}

	@media (max-width: 550px) {
		grid-gap: 1.5rem;
		grid-template-columns: repeat(2, 1fr);
	}
`;

export const CardItem = styled(Link)`
	background: rgba(255, 255, 255, 0.5);
	border-radius: 0.5rem;
	margin-top: 8rem;
	padding-bottom: 2rem;
	transition: all 0.3s linear;

	&:hover {
		background: rgba(255, 255, 255, 1);
		transform: scale(1.1);
	}
`;

export const Image = styled.img`
	max-width: 8rem;
	display: block;
	margin: 0 auto;
	margin-top: -4rem;
	margin-bottom: 1rem;
`;

export const Text = styled.p`
	text-align: center;
	font-weight: bold;
	color: #666;
`;
