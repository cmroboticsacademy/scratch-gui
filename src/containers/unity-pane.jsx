import React from "react";
import { connect } from "react-redux";
import Unity from "react-unity-webgl";

class UnityPane extends React.Component {
  componentDidMount() {
    const { unity, vm } = this.props;
    unity.on("MessageFromUnity", () => {
      console.log("Unity -> React");
    });

    vm.runtime.attachUnity(unity);
  }

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
  const vm = state.scratchGui.vm;
  return {
    unity: unity,
    vm: vm,
  };
};

export default connect(mapStateToProps)(UnityPane);
