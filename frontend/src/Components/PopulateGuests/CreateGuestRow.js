import React, {PropTypes} from 'react';

export default class CreateGuestRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      contact:"",
    };
  }
  onChange = (e) => {
    let state = this.state;

    switch (e.target.name) {
      case 'name':
        this.setState({
          name: e.target.value
        })
        break;
      case 'email':
        this.setState({
          email: e.target.value
        })
        break;
      case 'contact':
        this.setState({
          contact: e.target.value
        })
        break;
      default: state

    }

    this.setState(state);
    console.log(state)
  }

  onClick = (e) => {
    this.props.updateGuests(this.state)
    this.setState({
      name: "",
      email: "",
      contact:""
    })

  }
  render() {
    return (
      <section className="row create">
        <div className="col-md-2 title">
          <div className="form-group">
            <input type="text"
                   name="name"
                   placeholder="Name"
                   className="form-control"
                   onChange={this.onChange}
                   defaultValue={this.state.name}/>
          </div>
        </div>
        <div className="col-md-2 price">
          <div className="form-group">
            <input name="email"
                   placeholder="Email"
                   className="form-control"
                   onChange={this.onChange}
                   defaultValue={this.state.email}/>
          </div>
        </div>
        <div className="col-md-2 title">
          <div className="form-group">
            <input name="contact"
                   placeholder="Contact"
                   className="form-control"
                   onChange={this.onChange}
                   defaultValue={this.state.contact}/>
          </div>
        </div>

        <div className="col-md-2 PopulateGuests">
          <button type="button"
                  className="btn btn-success"
                  onClick={this.onClick}>Add Guest</button>
        </div>

      </section>
    );
  }
}

CreateGuestRow.propTypes = {
};
