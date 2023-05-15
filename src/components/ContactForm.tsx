import { FormEvent, useState } from 'react';
import { Button, Col, Container, FloatingLabel, Form, Row } from 'react-bootstrap';

export function ContactForm() {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [emailBody, setEmailBody] = useState('');

	function handleEmailSend(event: FormEvent<HTMLButtonElement>) {
		event.preventDefault();
		console.log(`${name}\n${email}\n${emailBody}`);
	}

	return (
		<Container fluid className='text-light bg-success bg-gradient p-4 m-0'>
			<Row className='text-center mb-3'>
				<h2>
					<u>Contact Us</u>
				</h2>
			</Row>
			<Row>
				<Form className='text-dark'>
					<Row xs={1} md={2}>
						<Col className='mb-2'>
							<FloatingLabel label='Name' controlId='floatingName'>
								<Form.Control
									type='text'
									placeholder='Name'
									required
									onChange={(event) => {
										setName(event.target.value);
									}}
								/>
							</FloatingLabel>
						</Col>
						<Col>
							<FloatingLabel label='Email' controlId='floatingEmail'>
								<Form.Control
									type='email'
									placeholder='example@example.com'
									required
									onChange={(event) => {
										setEmail(event.target.value);
									}}
								/>
							</FloatingLabel>
						</Col>
					</Row>
					<Row className='my-3'>
						<FloatingLabel label='Your Message' controlId='floatingTextarea'>
							<Form.Control
								required
								placeholder="I'd like to get more details"
								as={'textarea'}
								rows={3}
								onChange={(event) => {
									setEmailBody(event.target.value);
								}}
							></Form.Control>
						</FloatingLabel>
					</Row>
					<Row className='d-flex justify-content-end'>
						<Col xs='auto'>
							<Button
								variant='primary'
								className='xs-12'
								type='submit'
								size='lg'
								onSubmit={handleEmailSend}
							>
								Sent
							</Button>
						</Col>
						<Col xs='auto'>
							<Button variant='danger' className='xs-12' type='reset' size='lg'>
								Clear
							</Button>
						</Col>
					</Row>
				</Form>
			</Row>
		</Container>
	);
}
