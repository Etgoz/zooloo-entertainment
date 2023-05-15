// import 'bootstrap/dist/css/bootstrap.min.css';

import { Container, Image, Stack } from 'react-bootstrap';
import { About } from './components/About';
import { Activities } from './components/Activities';
import { ContactForm } from './components/ContactForm';
import { Footer } from './components/Footer';

export function App() {
	return (
		<Container fluid className='p-0 bg-dark bg-gradient'>
			<Stack>
				<Image
					src='../public/zooloo-header.png'
					alt='zooloo header'
					style={{ maxHeight: '75vh' }}
				/>
				<About />
				<Activities />
				<ContactForm />
				<Footer />
			</Stack>
		</Container>
	);
}
