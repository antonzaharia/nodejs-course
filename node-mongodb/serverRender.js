import axios from "axios";
import config from "./config";
import ReactDOMServer from "react-dom/server";
import React from "react";

import App from "./src/components/App";

const serverRender = () => {
  return axios.get(`${config.serverUrl}/api/contests`).then((resp) => {
    return ReactDOMServer.renderToString(
      <App initialContest={resp.data.contests} />
    );
  });
};
export default serverRender;
