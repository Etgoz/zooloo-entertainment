import { Col, Container, Row, Image } from 'react-bootstrap';

export function About() {
	return (
		<Container fluid className='py-4'>
			<Row xs={1} sm={2} md={2}>
				<Col className='d-flex justify-content-center align-items-center py-2 mb-2'>
					<Image
						src='../public/zooloo-logo.png'
						alt='ZooLoo Logo'
						rounded
						fluid
						style={{ maxHeight: '150px' }}
					></Image>
				</Col>
				<Col className='text-light py-2'>
					<h3 className=''>About Us</h3>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda laborum quidem iure
						voluptatum aspernatur maxime placeat dolorum quisquam. Illum temporibus minima,
						doloribus laborum hic dolor porro! Sit, nesciunt vitae ipsum unde ut repellendus
						obcaecati.
					</p>
					<br />
					<p>You can call us at - 059-1234567</p>
				</Col>
			</Row>
		</Container>
	);
}
