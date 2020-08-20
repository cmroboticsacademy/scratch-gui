import { UnityContent } from "react-unity-webgl";

const defaultState = () => {
  return new UnityContent(
    "unity_game/Build/unity_game.json",
    "unity_game/Build/UnityLoader.js",
  );
};

const reducer = function (state = defaultState(), action) {
  switch (action.type) {
    default:
      return state;
  }
};

export { reducer as default };
