import React, { Component } from 'react';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { Alert, Button } from 'react-bootstrap';

export class FlashMessages extends Component {
  onClick = () => {};
  render() {
    const { id, type, text } = this.props.message;
    return (
      <Alert
        className={classnames('alert', {
          success: type === 'success',
          danger: type === 'error'
        })}
      >
        <Button className="close">&times;</Button>
        {text}
      </Alert>
    );
  }
}

const mapStateToProps = state => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(FlashMessages);
