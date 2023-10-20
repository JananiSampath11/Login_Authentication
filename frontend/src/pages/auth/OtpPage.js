// import React from 'react'

// const OtpPage = () => {
//   return (
//     <div>
//      Otp Authentication
//     </div>
//   )
// }

// export default OtpPage
import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOtpChange = (e) => {
    const value = e.target.value;
    setOtp(value);

    // Clear any previous error message
    setErrorMessage('');
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add your validation logic here, for example, checking if the OTP is valid.
    // For this example, let's assume the OTP should be exactly 6 digits.
    if (otp.length !== 6 /* || !/^\d+$/.test(otp) */) {
      setErrorMessage('Invalid OTP. Please enter a 6-digit number.');
      return;
    }
  
    // You can handle OTP validation here.
    // If the OTP is valid, you can proceed to the next step.

    // For this example, we'll simply log the OTP.
    console.log('OTP entered:', otp);
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col sm={6}>
          <h2>Enter OTP</h2>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>OTP</Form.Label>
              <Form.Control
                type="text"
                value={otp}
                onChange={handleOtpChange}
                placeholder="Enter OTP"
                isInvalid={errorMessage !== ''}
              />
              <Form.Control.Feedback type="invalid">
                {errorMessage}
              </Form.Control.Feedback>
            </Form.Group>
            <Button variant="primary" type="submit" className='mt-3'>
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default OtpPage;

