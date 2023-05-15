import { Card } from 'react-bootstrap';

interface ActivityCardProps {
	imgSrc: string;
	title: string;
	content: string;
}

export function ActivityCard({ imgSrc, title, content }: ActivityCardProps) {
	return (
		<Card style={{ minWidth: '18rem', minHeight: '21rem' }} className='shadow mb-2'>
			<Card.Img variant='top' src={imgSrc} alt={title} />
			<Card.Body>
				<Card.Title>{title}</Card.Title>
				<Card.Text>{content}</Card.Text>
			</Card.Body>
		</Card>
	);
}
