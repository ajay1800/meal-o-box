import React from "react";
import "../styles/global.css";
import "../styles/home.css";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faEnvelope, faKey);

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
