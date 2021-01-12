import React from 'react';
import { Link } from 'react-router-dom';
import './SASS/header.css';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      api: [],
      location: [],
      search: [],
    };
  }

  componentDidMount = () => {
    fetch('http://localhost:3004/hotelData')
      .then((res) => res.json())
      .then((data) => {
        const filter = data.map((hotel) => hotel.location);
        this.setState({
          ...this.state,
          api: data,
          location: [...new Set(filter)],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  onchange = (value) => {
    if (value.length === 0) {
      this.setState({
        ...this.state,
        search: [],
      });
    }

    if (value.length > 0) {
      const filtering = this.state.location.filter((location) => {
        return location.match(value.toLowerCase());
      });
      // for reference console.log(filtering);
      this.setState({
        ...this.state,
        search: filtering,
      });
    }
  };
  render() {
    return (
      <React.Fragment>
        <header>
          <div className="liveSearch">
            <div id="inputMain">
              <input
                type="text"
                placeholder="serch your location"
                onChange={(e) => this.onchange(e.target.value)}
              ></input>
              <i className="fas fa-search fa-sm"></i>
            </div>
            <button>
              {/* //TODO: should link to correct router page */}
              <Link to="/admin">
                <i className="far fa-user-circle fa-2x"></i>
              </Link>
            </button>
          </div>
          <div className="title">
            <div className="linkMain">
              {this.state.search.map((value, index) => {
                return (
                  <div className="sublink" key={index}>
                    {/* //TODO: should link to correct router page */}
                    <Link to="/place" id="link">
                      {value[0].toUpperCase() + value.substring(1)}
                    </Link>
                  </div>
                );
              })}
            </div>
            <div>{/* made dummy div for mobile responsive */}</div>
          </div>
          <img
            src="https://i.pinimg.com/736x/14/16/bd/1416bd23247f4bdc77de4bbfaf0e87b4.jpg"
            alt="headerbackground"
          />
        </header>
      </React.Fragment>
    );
  }
}

export default Header;
//TODO:should do with router for adding router to childeren components
