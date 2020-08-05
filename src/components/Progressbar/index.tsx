import React from 'react';

import { Container, Progress, Label } from './styles';

export type ProgressbarProps = {
	max: number;
	color: string;
	label?: string;
};

export default function Progressbar({ max, color, label }: ProgressbarProps) {
	return (
		<>
			{label && <Label>{label}</Label>}
			<Container color={color}>
				<Progress max={max} color={color} />
			</Container>
		</>
	);
}
