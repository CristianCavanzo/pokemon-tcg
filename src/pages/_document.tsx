import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html>
			<Head />
			<body style={{ background: 'var(--black)', display: 'flex' }}>
				<div>Hola</div>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
