import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

const Li = styled.li`
	width: 100%;
	font-weight: bold;
	fill: blue;
	list-style: none;
	a {
		position: relative;
		column-gap: 8px;
		display: flex;
		align-items: center;
		text-decoration: none;
	}

	&.here a::after {
		transition: all 0.2s ease-out;
		right: 0px;
		content: '';
		position: absolute;
		width: 4px;
		height: 100%;
		background-color: var(--blue);
		border-radius: 4px 0 0 4px;
	}
	a:hover::after {
		height: 100%;
		background-color: var(--blue);
		border-radius: 4px 0 0 4px;
		transition: all 0.3s ease-in;
		font-weight: bold;
		width: 24px;
	}
`;

interface Props {
	children: string;
	image: string;
	imageInformation: string;
}

const List = ({ children, image, imageInformation }: Props) => {
	return (
		<Li className="here">
			<Link href="/">
				<a>
					<Image src={image} width={30} height={30} alt={imageInformation} /> {children}
				</a>
			</Link>
		</Li>
	);
};

export { List };
