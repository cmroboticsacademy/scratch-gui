import React from "react";
import { connect } from "react-redux";
import Unity from "react-unity-webgl";

class UnityPane extends React.Component {
  render() {
    return (
      <div className="unity-container">
        <h2>Unity Content</h2>
        <Unity unityContent={this.props.unity} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const unity = state.scratchGui.unity;
  return {
    unity: unity,
  };
};

export default connect(mapStateToProps)(UnityPane);
