import React, { Component } from 'react';

class ImageCard extends Component {
  constructor(props) {
    super(props);
    this.state = { spans: 0 };
    this.imageRef = React.createRef();
  }

  componentDidMount() {
    this.imageRef.current.addEventListener('load', this.setSpans);
  }

  setSpans = () => {
    const height = this.imageRef.current.clientHeight;
    this.setState({ spans: Math.ceil(height / 10) });
  }

  render() {
    const { urls, description_alt } = this.props.image
    return (
      <div style={{ gridRowEnd: `span ${this.state.spans}`}}>
        <img
          ref={this.imageRef}
          src={urls.regular}
          alt={description_alt}
        />
      </div>
    );
  }
}

export default ImageCard;
