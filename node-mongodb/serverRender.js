import axios from "axios";
import config from "./config";
import ReactDOMServer from "react-dom/server";
import React from "react";

import App from "./src/components/App";

const serverRender = () => {
  return axios.get(`${config.serverUrl}/api/contests`).then((resp) => {
    return {
      initialMarkup: ReactDOMServer.renderToString(
        <App initialData={resp.data} />
      ),
      initialData: resp.data,
    };
  });
};
export default serverRender;
