import styled from 'styled-components';

import { pokeTypes } from '../../utils/types';

type TypeProps = {
	type: pokeTypes;
};

export const Container = styled.section`
	display: flex;
	justify-content: center;
	align-items: center;
	margin-top: 4rem;
	margin-bottom: 4rem;

	@media (max-width: 767px) {
		flex-direction: column-reverse;
	}
`;

export const InfoContainer = styled.article`
	min-width: 300px;

	@media (min-width: 768px) {
		margin-right: 8rem;
	}
`;

export const Id = styled.h3<TypeProps>`
	font-size: 4rem;
	line-height: 2rem;
	color: var(${props => `--type-${props.type}-color`});
`;

export const Name = styled.h1`
	text-transform: uppercase;
	font-size: 6rem;
`;

export const Text = styled.p`
	margin-bottom: 0.5rem;
`;

export const Image = styled.img`
	display: block;
	width: 50%;

	@media (max-width: 767px) {
		width: 80%;
		margin-bottom: 4rem;
	}
`;

export const Types = styled.div`
	display: flex;
`;

export const Type = styled.p<TypeProps>`
	padding: 0.5rem 1rem;
	margin-right: 1rem;
	margin-bottom: 1rem;
	border-radius: 3rem;
	background-color: var(${props => `--type-${props.type}-color`});
	color: #fff;
`;

export const Stats = styled.div`
	margin-top: 2rem;
`;
