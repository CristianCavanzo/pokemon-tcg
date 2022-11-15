import { Aside } from '@components/Aside';
import type { AppProps } from 'next/app';
import 'styles/global.css';
function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div style={{ display: 'flex' }}>
			<Aside />
			<div>
				<Component {...pageProps} />
			</div>
		</div>
	);
}
export default MyApp;
