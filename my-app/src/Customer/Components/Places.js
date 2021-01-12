import React from 'react';
import { Link } from 'react-router-dom';
import '../Components/SASS/Places.css';

class Places extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      location: [],
    };
  }
  componentDidMount = () => {
    this.setState({
      location: this.props.location,
    });
  };

  render() {
    return (
      <React.Fragment>
        <div id="title">LOCATIONS</div>
        <section className="section">
          {this.props.location.map((location, index) => {
            return (
              <div id="child" key={index}>
                {/* //TODO: add proper redirect to that page */}
                <Link to="/location">
                  <img
                    src="https://cdnb.artstation.com/p/assets/images/images/019/170/273/large/ford-nguyen-city-street.jpg?1562315890"
                    alt="city"
                  />
                  <span id="location">
                    {location[0].toUpperCase() + location.substring(1)}
                  </span>
                </Link>
              </div>
            );
          })}
        </section>
      </React.Fragment>
    );
  }
}

export default Places;
//TODO:add with router to child components
