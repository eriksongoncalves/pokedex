import styled, { keyframes } from 'styled-components';
import { lighten } from 'polished';

type ContainerProps = {
	color: string;
};

type ProgressProps = {
	max: number;
	color: string;
};

const progressAnimate = (x: number) => keyframes`
    0% {
        width: 0px
    }
    100% {
			width: ${x}
    }
`;

export const Container = styled.div<ContainerProps>`
	width: 100%;
	height: 1.5rem;
	margin-bottom: 1rem;
	border-radius: 0.5rem;
	position: relative;
	background: ${props => lighten(0.3, props.color)};
`;

export const Progress = styled.span<ProgressProps>`
	position: absolute;
	left: 0;
	top: 0;
	height: 100%;
	width: ${props => props.max}%;
	max-width: 100%;
	border-radius: 0.5rem;
	background: ${props => props.color};
	animation: ${props => progressAnimate(props.max)} 0.8s linear;
`;

export const Label = styled.p`
	margin-bottom: 0.5rem;
	font-size: 1.3rem;
	text-transform: uppercase;
`;
