'use strict';

import React from 'react';

import Form from './Form';

class Contribute extends React.Component {
  render() {
    return (<Form onSubmit={this.props.postVideo}/>)
  }
}

export default Contribute;
