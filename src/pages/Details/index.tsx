import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import {
	Container,
	InfoContainer,
	Id,
	Name,
	Text,
	Image,
	Types,
	Type,
	Stats
} from './styles';

import Loading from '../../components/Loading';
import Progressbar from '../../components/Progressbar';
import { getPokemonData } from '../../services/api';
import { PokemonData } from '../../utils/types';
import { ucFirst } from '../../utils/strings';
import { pokeTypeColors } from '../../utils/constants';

type RouteParams = {
	id: string;
};

export default function Details() {
	const params = useParams<RouteParams>();
	const [pokemonData, setPokemonData] = useState<PokemonData>();

	useEffect(() => {
		getPokemonData(parseInt(params.id)).then(response => {
			setPokemonData(response.data);
		});
	}, [params]);

	return (
		<Container>
			{!pokemonData ? (
				<Loading />
			) : (
				<>
					<InfoContainer>
						<Id type={pokemonData.types[0].type.name}>
							#{params.id.padStart(3, '0')}
						</Id>
						<Name>{pokemonData.name}</Name>
						<Text>Height: {pokemonData.height}</Text>
						<Text>Weight: {pokemonData.weight}</Text>

						<Types>
							{pokemonData.types.map(({ slot, type }) => (
								<Type key={slot} type={type.name}>
									{ucFirst(type.name.toString())}
								</Type>
							))}
						</Types>

						<Stats>
							{pokemonData.stats.map(({ base_stat, stat }) => (
								<Progressbar
									key={stat.name}
									label={stat.name}
									max={base_stat}
									color={
										pokeTypeColors[pokemonData.types[0].type.name.toString()]
									}
								/>
							))}
						</Stats>
					</InfoContainer>
					<Image
						src={`https://pokeres.bastionbot.org/images/pokemon/${parseInt(
							params.id
						)}.png`}
						alt="Bulbasaur"
					/>
				</>
			)}
		</Container>
	);
}
