import styled, { createGlobalStyle } from 'styled-components';

import pokeball from '../assets/pokeball.png';

export const GlobalStyle = createGlobalStyle`

	:root{
		--type-grass-color: #78c850;
		--type-fire-color: #f08030;
		--type-water-color: #6890f0;
		--type-bug-color: #a8b820;
		--type-normal-color: #a8a878;
		--type-poison-color: #a040a0;
		--type-electric-color: #f8d030;
		--type-ground-color: #e0c068;
		--type-fairy-color: #ee99ac;
		--type-flying-color: #c03028;
		--type-psychic-color: #f85888;
		--type-rock-color: #b8a038;
		--type-ghost-color: #705898;
		--type-ice-color: #98d8d8;
		--type-dragon-color: #7038f8;

		--bgColor: #eceef5;
	}

	*{
		margin: 0;
		padding: 0;
		outline: 0;
		box-sizing: border-box;
	}

	html{
		font-size: 62.5%;
	}

	body{
		min-height: 100vh;
		font: 1.6rem 'Roboto', sans-serif;
    -webkit-font-smoothing: antialiased;

		background: var(--bgColor);

		@media (min-width: 1300px) {
			background: url(${pokeball}) no-repeat bottom -150px left -200px var(--bgColor);
		}
	}

	h1, h2, h3, h4, h5{
		font-family: Oswald;
		font-weight: 500;
	}

	a{
		text-decoration: none;
	}

	ul{
		list-style: none;
	}

	button {
		cursor: pointer;
	}
`;

export const Container = styled.section`
	width: 100%;
	max-width: 1024px;
	margin: 0 auto;

	@media (max-width: 1024px) {
		padding: 0 1.5rem;
	}
`;
