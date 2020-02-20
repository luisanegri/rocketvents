import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createEvent } from '../../actions/events';
import { addFlashMessage } from '../../actions/messages';
import EventForm from './EventForm';

export class EventFormContainer extends Component {
  state = {
    name: '',
    description: '',
    start_date: '',
    image: '',
    price: '',
    location: '',
    time: '',
    message: ''
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createEvent(
      this.state.name,
      this.state.description,
      this.state.start_date,
      this.state.image,
      this.state.price,
      this.state.location,
      this.state.time
    );
    this.setState({
      name: '',
      description: '',
      start_date: '',
      image: '',
      price: '',
      location: '',
      time: ''
    });
    this.props.addFlashMessage({
      type: 'succcess',
      text: 'You have successfully created an event'
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <div>
        <EventForm
          onChange={this.onChange}
          onSubmit={this.onSubmit}
          value={this.state}
          user={this.props.user}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { user: state.users, event: state.events };
};
const mapDispatchToProps = { createEvent, addFlashMessage };

export default connect(mapStateToProps, mapDispatchToProps)(EventFormContainer);
