import Button from 'react-bootstrap/Button';

const Buttons = (props) => {
  const changeView = (viewName) => {
    props.changeView(viewName);
  };

  return (
    <div className='container'>
      <div className='row'>
        <Button
          variant={`${props.currentView == 'Month' ? '' : 'outline-'}primary`}
          className='col'
          onClick={() => changeView('Month')}
        >
          Monthly View
        </Button>{' '}
        <Button
          variant={`${props.currentView == 'Week' ? '' : 'outline-'}primary`}
          className='col'
          onClick={() => changeView('Week')}
        >
          Weekly View
        </Button>{' '}
        <Button
          variant={`${props.currentView == 'Agenda' ? '' : 'outline-'}primary`}
          className='col'
          onClick={() => changeView('Agenda')}
        >
          Agenda View
        </Button>{' '}
      </div>
    </div>
  );
};

export default Buttons;
