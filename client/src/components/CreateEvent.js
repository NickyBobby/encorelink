import React, { PropTypes } from 'react';
import { withRouter } from 'react-router';

class CreateEvent extends React.Component {
  static propTypes = {
    createEvent: PropTypes.func.isRequired,
    errorMessage: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      date: ''
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  handleNameChange(ev) {
    this.setState({ name: ev.target.value });
  }

  handleDateChange(ev) {
    this.setState({ date: ev.target.value });
  }

  handleFormSubmit(ev) {
    ev.preventDefault();
    this.props.createEvent(this.state.name, this.state.date);
  }

  render() {
    return (
      <div className="row align-center">
        <div className="large-8 columns">
          <h1>Schedule Performance</h1>
          <h4 className="subheader">Fill form below to set up a performance time slot</h4>
          <form className="form-create-event" onSubmit={this.handleFormSubmit}>
            <div className="row">
              <div className="large-2 columns">
                <label>Date</label>
              </div>
              <div className="large-10 columns">
                <input type="date"
                  onChange={this.handleDateChange}
                  placeholder="date"
                  required
                />
              </div>
            </div>
            <div className="row">
              <div className="large-2 columns">
                <label>Time</label>
              </div>
              <div className="large-10 columns">
                <div className="row">
                  <div className="large-5 columns">
                    <input type="time" placeholder="9:00 AM" />
                  </div>
                  <div className="large-2 columns centered">to</div>
                  <div className="large-5 columns">
                    <input type="time" placeholder="10:00 AM" />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="large-2 columns">
                <label>Additional Notes</label>
              </div>
              <div className="large-10 columns">
                <textarea placeholder="Notes" />
              </div>
            </div>
            <div className="row">
              <div className="large-2 columns">
                <label>Location</label>
              </div>
              <div className="large-10 columns">
                <input type="text"
                  onChange={this.handleNameChange}
                  placeholder="Location"
                  required
                  autoFocus
                />
              </div>
            </div>

            <div className="row">
              <div className="large-2 columns" />
              <div className="large-10 columns">
                <input className="button" type="submit" value="Schedule Performance Time Slot" />
              </div>
            </div>
          </form>
          <div>
            <span>{this.props.errorMessage}</span>
          </div>
        </div>
      </div>
    );
  }
}


export default withRouter(CreateEvent);
