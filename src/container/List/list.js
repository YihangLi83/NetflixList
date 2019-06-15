import React from "react";
import * as actions from "../../action";
import { connect } from "react-redux";
import "./style.css";

class List extends React.Component {
  deleteMovie = index => {
    this.props.deleteMovie(index);
  };
  addMovie = index => {
    this.props.addMovie(index);
  };
  render() {
    return (
      <div className="List">
        <h2>Favorites</h2>
        <div className="MyList">
          {this.props.mylist.map((movie, index) => {
            return (
              <li key={movie.id} className="Hover">
                <div>
                  <h2>{movie.title}</h2>
                  <img src={movie.img} alt={movie.id} />
                  <button
                    className="buttonlist"
                    onClick={this.deleteMovie.bind(this, index)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            );
          })}
        </div>
        <h2>Recommendations</h2>
        <div className="List">
          {this.props.recommendations.map((recommendation, index) => {
            return (
              <li className="Hover" key={recommendation.id}>
                <div>
                  <h3>{recommendation.title}</h3>
                  <img src={recommendation.img} alt={recommendation.id} />
                  <button
                    className="buttonlist"
                    onClick={this.addMovie.bind(this, index)}
                  >
                    Add
                  </button>
                </div>
              </li>
            );
          })}
        </div>
        <h2>Deleted List</h2>
        <div className="List">
          {this.props.deleted.map((de, index) => {
            return (
              <li className="Hover" key={de.id}>
                <div>
                  <h3>{de.title}</h3>
                  <img src={de.img} alt={de.id} />
                  <button
                    className="buttonlist"
                    onClick={this.props.addFromDelete.bind(this, index)}
                  >
                    Add
                  </button>
                </div>
              </li>
            );
          })}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mylist: state.lists.mylist,
    recommendations: state.lists.recommendations,
    deleted: state.lists.deleted
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getList: () => {
      dispatch(actions.getData());
    },
    deleteMovie: id => {
      dispatch(actions.deleteMovie(id));
    },
    addMovie: index => {
      dispatch(actions.addMovie(index));
    },
    addFromDelete: index => {
      dispatch(actions.addFromDelete(index));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
