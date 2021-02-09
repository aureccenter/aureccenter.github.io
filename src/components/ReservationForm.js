import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import TimePicker from 'react-bootstrap-time-picker';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

const ReservationForm = () => {
  const [formResponses, setFormResponses] = useState({
    firstName: '',
    lastName: '',
    email: '',
    idNumber: '',
    reservationReason: '',
    rooms: [],
    reservationDate: '',
    reservationDay: '',
    numberOfAttendees: '',
    startTime: 39600,
    endTime: 41400,
    start: '11:00 AM',
    end: '11:30 AM',
    organization: '',
    isRecurring: false,
    recurringFrequency: '',
  });

  const [isRecurring, setIsRecurring] = useState(false);
  const [validated, setValidated] = useState(false);
  const [timeIsBad, setTimeIsBad] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const inputRef = useRef();
  const inputRef2 = useRef();

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    setFormSubmitted(true);

    emailjs
      .send(
        'service_1vw76um',
        'template_j575ef8',
        formResponses,
        'user_wJ5IIawclAEmWJ073b9vj'
      )
      .then(
        function (response) {
          console.log('SUCCESS!', response.status, response.text);
        },
        function (error) {
          console.log('FAILED...', error);
        }
      );
  };

  const handleOnChange = (email, event) => {
    // don't remember from where i copied this code, but this works.
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (re.test(email)) {
      event.target.setCustomValidity('');
    } else {
      event.target.setCustomValidity('Email is invalid');
    }
  };

  const convertTime = (number) => {
    let newNumber = number / 3600;
    let decimal = newNumber - Math.floor(newNumber);
    newNumber = Math.floor(newNumber);
    decimal *= 60;
    let timeOfDay;
    if (newNumber >= 12) timeOfDay = 'PM';
    else timeOfDay = 'AM';
    return [
      `${newNumber == 0 || newNumber == 12 ? 12 : newNumber % 12}:${
        decimal == 0 ? '00' : decimal
      } ${timeOfDay}`,
      `${newNumber}:${decimal == 0 ? '00' : decimal}`,
    ];
  };

  return formSubmitted ? (
    <div className='container'>
      <div className='row'>
        <h4 style={{ textAlign: 'center' }}>
          {' '}
          Thank you for your submission. You will be emailed at
          <span style={{ color: 'cornflowerblue' }}>
            {' '}
            {formResponses.email}
          </span>{' '}
          shortly{' '}
        </h4>
        <div style={{ height: '400px' }} />
      </div>
    </div>
  ) : (
    <div className='container'>
      <div className='row'>
        <div className='col'></div>
        <div className='col-9'>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label className='mt-1'>First Name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Enter First Name'
                onChange={(e) => {
                  setFormResponses({
                    ...formResponses,
                    firstName: e.target.value,
                  });
                }}
              />

              <Form.Label className='mt-1'>Last Name</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Enter Last Name'
                onChange={(e) => {
                  setFormResponses({
                    ...formResponses,
                    lastName: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className='mt-1'>Email</Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Enter Email Address'
                onChange={(e) => {
                  handleOnChange(e.target.value, e);
                  setFormResponses({
                    ...formResponses,
                    email: e.target.value,
                  });
                }}
              />
              <Form.Control.Feedback type='invalid'>
                Invalid Email
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <Form.Label className='mt-1'>ID Number</Form.Label>
              <Form.Control
                required
                type='number'
                placeholder='Enter ID Number'
                min='0'
                onChange={(e) => {
                  setFormResponses({
                    ...formResponses,
                    idNumber: e.target.value,
                  });
                }}
              />

              <Form.Label className='mt-1'>
                What Is the Reservation For?
              </Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Ex. Birthday Party, Club Name Etc.'
                onChange={(e) => {
                  setFormResponses({
                    ...formResponses,
                    reservationReason: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Form.Group controlId='formBasicCheckbox'>
              <Form.Label>Which Area Would You Like to Reserve?</Form.Label>
              <hr />
              <Form.Check
                required={formResponses.rooms.length === 0}
                type='checkbox'
                label='Main Rec Center'
                onClick={(e) => {
                  if (e.target.checked) {
                    setFormResponses({
                      ...formResponses,
                      rooms: formResponses.rooms.concat('Main Rec Center'),
                    });
                  } else {
                    setFormResponses({
                      ...formResponses,
                      rooms: formResponses.rooms.filter(
                        (value) => value !== 'Main Rec Center'
                      ),
                    });
                  }
                }}
              />
              <Form.Text className='text-muted mb-2'>Capacity 10</Form.Text>
              <Form.Check
                required={formResponses.rooms.length === 0}
                type='checkbox'
                label='Amphitheater'
                onClick={(e) => {
                  if (e.target.checked) {
                    setFormResponses({
                      ...formResponses,
                      rooms: formResponses.rooms.concat('Amphitheater'),
                    });
                  } else {
                    setFormResponses({
                      ...formResponses,
                      rooms: formResponses.rooms.filter(
                        (value) => value !== 'Amphitheater'
                      ),
                    });
                  }
                }}
              />
              <Form.Text className='text-muted mb-2'>
                Capacity 15 (If socially distanced chairs are used)
              </Form.Text>
              <Form.Check
                required={formResponses.rooms.length === 0}
                type='checkbox'
                label='Study/Conference Room'
                onClick={(e) => {
                  if (e.target.checked) {
                    setFormResponses({
                      ...formResponses,
                      rooms: formResponses.rooms.concat(
                        'Study/Conference Room'
                      ),
                    });
                  } else {
                    setFormResponses({
                      ...formResponses,
                      rooms: formResponses.rooms.filter(
                        (value) => value !== 'Study/Conference Room'
                      ),
                    });
                  }
                }}
              />
              <Form.Text className='text-muted'>Capacity 2</Form.Text>
              <hr />
            </Form.Group>

            <Form.Group controlId='moreQuestions'>
              <Form.Label className='mt-1'>
                What Date would you Like to Reserve?
              </Form.Label>
              <Form.Control
                required
                type='date'
                onChange={(e) => {
                  if (e.target.valueAsDate === null) {
                    setFormResponses({
                      ...formResponses,
                      reservationDate: '',
                      reservationDay: '',
                    });
                  } else {
                    let dayOfWeek = new Date(
                      e.target.valueAsDate.getTime() +
                        e.target.valueAsDate.getTimezoneOffset() * 60000
                    )
                      .toString()
                      .substring(0, 3);
                    setFormResponses({
                      ...formResponses,
                      reservationDate: e.target.value,
                      recurringFrequency:
                        dayOfWeek == 'Sat'
                          ? 'Once a month'
                          : formResponses.recurringFrequency,
                      reservationDay: dayOfWeek,
                    });
                  }
                }}
              />

              <Form.Label className='mt-1'>
                Is This Reservation Recurring?
              </Form.Label>
              <Form.Check
                required
                type='radio'
                label='Yes'
                name='formQuestionRadios'
                id='formQuestionRadios1'
                onChange={() => {
                  setIsRecurring(true);
                  setFormResponses({
                    ...formResponses,
                    isRecurring: true,
                  });
                }}
              />
              <Form.Check
                type='radio'
                label='No'
                name='formQuestionRadios'
                id='formQuestionRadios2'
                onChange={() => {
                  setIsRecurring(false);
                  setFormResponses({
                    ...formResponses,
                    isRecurring: false,
                  });
                }}
              />

              {isRecurring ? (
                <div>
                  <Form.Label className='mt-1'>
                    How Often Does it Occur?
                  </Form.Label>

                  <Form.Control
                    required
                    as='select'
                    onChange={(e) => {
                      setFormResponses({
                        ...formResponses,
                        recurringFrequency: e.target.value,
                      });
                    }}
                  >
                    <option disabled selected value>
                      {' '}
                      -- select an option --{' '}
                    </option>
                    {formResponses.reservationDay !== 'Sat' ? (
                      <>
                        <option>Every week</option>
                        <option>Every other week</option>
                      </>
                    ) : (
                      <></>
                    )}
                    <option>Once a month</option>
                  </Form.Control>
                </div>
              ) : (
                <></>
              )}

              <Form.Label className='mt-2'>
                How Many People would be Attending the Reservation?
              </Form.Label>
              <Form.Control
                required
                type='number'
                placeholder='Enter a number'
                min='0'
                onChange={(e) => {
                  setFormResponses({
                    ...formResponses,
                    numberOfAttendees: e.target.value,
                  });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className='mt-1'>
                What Time Would you Like to Reserve??
              </Form.Label>
              <Form.Control
                required={timeIsBad}
                type='text'
                style={{ display: 'none' }}
              />
              <Form.Control.Feedback type='invalid'>
                {errorMessage}
              </Form.Control.Feedback>
              <Form.Row>
                <Col>
                  <Form.Label column='sm'>Start Time</Form.Label>
                  <div ref={inputRef}>
                    <TimePicker
                      start='11:00'
                      value={formResponses.startTime}
                      onChange={(time) => {
                        setFormResponses({
                          ...formResponses,
                          startTime: time,
                          endTime: time == 84600 ? 0 : time + 1800,
                          start: convertTime(time)[0],
                          end: convertTime(time == 84600 ? 0 : time + 1800)[0],
                        });
                        if (time >= formResponses.endTime) {
                          inputRef.current.firstChild.setCustomValidity(
                            'Time is invalid'
                          );
                          inputRef2.current.firstChild.setCustomValidity(
                            'Time is invalid'
                          );
                          setTimeIsBad(true);
                          setErrorMessage(
                            'The end time must be after the start time'
                          );
                        } else {
                          setTimeIsBad(false);
                          inputRef.current.firstChild.setCustomValidity('');
                          inputRef2.current.firstChild.setCustomValidity('');
                        }
                      }}
                    />
                  </div>
                </Col>
                <Col>
                  <Form.Label column='sm'>End Time</Form.Label>
                  <div ref={inputRef2}>
                    <TimePicker
                      start={
                        formResponses.startTime !== 84600
                          ? convertTime(formResponses.startTime + 1800)[1]
                          : '00:00'
                      }
                      end={
                        formResponses.startTime !== 84600 ? '23:30' : '00:00'
                      }
                      value={formResponses.endTime}
                      onChange={(time) => {
                        setFormResponses({
                          ...formResponses,
                          endTime: time,
                          end: convertTime(time)[0],
                        });
                        if (time <= formResponses.startTime) {
                          inputRef2.current.firstChild.setCustomValidity(
                            'Time is invalid'
                          );
                          inputRef.current.firstChild.setCustomValidity(
                            'Time is invalid'
                          );
                          setTimeIsBad(true);
                          setErrorMessage(
                            'The end time must be after the start time'
                          );
                        } else {
                          setTimeIsBad(false);
                          inputRef2.current.firstChild.setCustomValidity('');
                          inputRef.current.firstChild.setCustomValidity('');
                        }
                      }}
                    />
                  </div>
                </Col>
              </Form.Row>
            </Form.Group>

            <Form.Group controlId='formOrganization'>
              <Form.Label className='mt-2'>
                Is There An Organization Associated with Your Reservation?
              </Form.Label>
              <Form.Control
                required
                type='text'
                placeholder='Ex. BSCF, AUSA'
                onChange={(e) => {
                  setFormResponses({
                    ...formResponses,
                    organization: e.target.value,
                  });
                }}
              />
            </Form.Group>

            <Button variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </div>
        <div className='col'></div>
      </div>
    </div>
  );
};

export default ReservationForm;
