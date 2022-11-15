import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { List } from './List';

import Home from '/public/icons/home.svg';

const AsideComponent = styled.aside`
	height: 100vh;
	max-height: 100vh;
	width: 300px;
	display: flex;
	align-items: center;
	background: var(--black);
	flex-direction: column;
`;

const Profile = styled.section`
	display: flex;
	row-gap: 16px;
	flex-direction: column;
	align-items: center;
	padding: 16px 0;
`;

const ProfileImage = styled.article`
	width: 116px;
	height: 116px;
	border-radius: 50%;
	background-color: white;
	padding: 16px;
	display: grid;
	place-content: center;
	div {
		position: relative;
		width: 92px;
		height: 92px;
	}
`;

const Navigation = styled.nav`
	width: 100%;
	display: inline-flex;
	padding-left: 32px;
	ul {
		width: 100%;
		display: inline-flex;
	}
`;

const Aside = () => {
	const randomImage = () => {
		return Math.floor(Math.random() * 900);
	};

	return (
		<AsideComponent>
			<Profile>
				<ProfileImage>
					<div>
						<Image
							src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${randomImage()}.png`}
							alt="Profile image"
							layout="fill"
							objectFit="cover"
						/>
					</div>
				</ProfileImage>
				<p className="fs-l fw-b">Cristian</p>
			</Profile>
			<Navigation>
				<ul>
					<List image={Home} imageInformation="Home">
						Inicio
					</List>
				</ul>
			</Navigation>
		</AsideComponent>
	);
};

export { Aside };
