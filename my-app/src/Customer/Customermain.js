import React from 'react';
import Header from './Components/Header';
import Places from './Components/Places';

class Customermain extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      api: [],
      location: [],
    };
  }
  componentDidMount = () => {
    fetch('http://localhost:3004/hotelData')
      .then((res) => res.json())
      .then((data) => {
        const location = data.map((item) => item.location);
        this.setState({
          ...this.state,
          api: data,
          location: [...new Set(location)],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <React.Fragment>
        <Header fetched_data={this.state.location} />
        <Places location={this.state.location} />
      </React.Fragment>
    );
  }
}

export default Customermain;
