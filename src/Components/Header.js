import React, { Component } from 'react';

export default class Example extends Component {
  state = {
    dimensions: null,
  };

  componentDidMount() {
    this.setState({
      dimensions: {
        width: this.container.offsetWidth,
        height: this.container.offsetHeight,
      },
    });
  }

  renderContent() {
    const { dimensions } = this.state;
  }




  render() {
    const { dimensions } = this.state;

    return (
      <div className="Hello" ref={el => (this.container = el)}>
        {dimensions && this.renderContent()}
      </div>
    );
  }
}
