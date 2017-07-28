import React, {PropTypes} from 'react';
import './LiveRegistration.css';
import Table from 'react-uikit-table'
export default class LiveRegistration extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const data = [
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'},
  {d1: 'Data', d2: 'Data', d3: 'Data'}
];
    return (
      <div className ="row-col-6">
      <Table
        caption='Hoverable table'
        hover head={['Heading', 'Heading', 'Heading']}
        body={data}/>
      </div>

    );
  }
}

LiveRegistration.propTypes = {
};
