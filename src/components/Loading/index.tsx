import React from 'react';

import { Image } from './styles';

import pokeballIcon from '../../assets/pokeball-loading.png';

export default function Loading() {
	return (
		<>
			<Image src={pokeballIcon} alt="Pokeball Loading" />
		</>
	);
}
