import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import TimePicker from 'react-bootstrap-time-picker';
import { useState } from 'react';

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
    startTime: 28800,
    endTime: 30600,
    organization: '',
  });

  const [isRecurring, setIsRecurring] = useState(false);
  const [dayOfWeek, setDayOfWeek] = useState(0);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col'></div>
        <div className='col-9'>
          <Form>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label className='mt-1'>First Name</Form.Label>
              <Form.Control
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
                type='text'
                placeholder='Enter Last Name'
                onChange={(e) => {
                  setFormResponses({
                    ...formResponses,
                    lastName: e.target.value,
                  });
                }}
              />

              <Form.Label className='mt-1'>Email</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter Email Address'
                onChange={(e) => {
                  setFormResponses({
                    ...formResponses,
                    email: e.target.value,
                  });
                }}
              />

              <Form.Label className='mt-1'>ID Number</Form.Label>
              <Form.Control
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
                      e.target.value + '00:00:00'
                    ).getDay();
                    setFormResponses({
                      ...formResponses,
                      reservationDate: e.target.value,
                      reservationDay: new Date(
                        e.target.valueAsDate.getTime() +
                          e.target.valueAsDate.getTimezoneOffset() * 60000
                      )
                        .toString()
                        .substring(0, 3),
                    });
                  }
                }}
              />

              <Form.Label className='mt-1'>
                Is This Reservation Recurring?
              </Form.Label>
              <Form.Check
                type='radio'
                label='Yes'
                name='formQuestionRadios'
                id='formQuestionRadios1'
                onChange={(e) => {
                  setIsRecurring(true);
                }}
              />
              <Form.Check
                type='radio'
                label='No'
                name='formQuestionRadios'
                id='formQuestionRadios2'
                onChange={(e) => {
                  setIsRecurring(false);
                }}
              />

              {isRecurring ? (
                <div>
                  <Form.Label className='mt-1'>
                    How Often Does it Occur?
                  </Form.Label>
                  <Form.Control as='select'>
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

            <Form.Label className='mt-1'>
              What Time Would you Like to Reserve??
            </Form.Label>
            <Form.Row>
              <Col>
                <Form.Label column='sm'>Start Time</Form.Label>
                <TimePicker
                  start='8:00'
                  end='23:30'
                  value={formResponses.startTime}
                  onChange={(time) => {
                    setFormResponses({
                      ...formResponses,
                      startTime: time,
                    });
                  }}
                  step={30}
                />
              </Col>
              <Col>
                <Form.Label column='sm'>End Time</Form.Label>
                <TimePicker
                  start='8:00'
                  end='23:30'
                  value={formResponses.endTime}
                  onChange={(time) => {
                    setFormResponses({
                      ...formResponses,
                      endTime: time,
                    });
                  }}
                  step={30}
                />
              </Col>
            </Form.Row>

            <Form.Group controlId='formOrganization'>
              <Form.Label className='mt-2'>
                Is There An Organization Associated with Your Reservation?
              </Form.Label>
              <Form.Control
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
