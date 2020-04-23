import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

const ProjectDetails = (props) => {
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project Title - {id}</span>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            doloribus dolores sequi quidem recusandae est architecto
            exercitationem similique veritatis praesentium, nisi perspiciatis
            harum blanditiis, quia repudiandae dolorem ratione dignissimos esse.
          </p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>Posted by Lahiru</div>
          <div>4th Sep, 2020</div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { id } = ownProps.match.params;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {};
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect()
)(ProjectDetails);
