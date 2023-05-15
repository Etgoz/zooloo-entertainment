import { Card, Col, Container, Row, Stack } from 'react-bootstrap';
import { ActivityCard } from './ActivitieCard';

export function Activities() {
	return (
		<Container fluid id='activities' className='py-3'>
			<Row className='py-3'>
				<Col>
					<h3 className='text-center text-light'>Our Activities</h3>
				</Col>
			</Row>
			<Row>
				<Col className='d-flex justify-content-center'>
					<ActivityCard
						imgSrc='https://dnwp63qf32y8i.cloudfront.net/4fbc21258c8218aee339f1d498c5206359e54e0f'
						title='Zooloo Shows'
						content="Some quick example text to build on the card title and make up the bulk of the
								card's content. more text to see what happens to the cards"
					/>
				</Col>
				<Col className='d-flex justify-content-center'>
					<ActivityCard
						imgSrc='https://t3.ftcdn.net/jpg/01/85/28/38/360_F_185283841_Nc58JUCf7FzWkD3LPrOxOvpMLWWcA02N.jpg'
						title='Patting Zoo'
						content="Some quick example text to build on the card title and make up the bulk of the
								card's content."
					/>
				</Col>
				<Col className='d-flex justify-content-center'>
					<ActivityCard
						imgSrc='https://scoutlife.org/wp-content/uploads/2017/01/wild-surv-019.jpg'
						title='Outdoor Servival Skills'
						content="Some quick example text to build on the card title and make up the bulk of the
								card's content."
					/>
				</Col>
			</Row>
		</Container>
	);
}
