import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from "react-google-recaptcha-v3";

export default function App() {
  const [token, setToken] = useState(0);

  function setToken2(token: any) {
    console.log(token);
    setToken(token);
  }

  function serverAuth() {
    console.log(token);
    axios
      .get(
        "https://us-east1-slack-app-for-mizukami.cloudfunctions.net/googleRecaptchav3"
      )
      .then(res => {
        console.log("ほげ");
        console.log("res");
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <div className="App">
      <GoogleReCaptchaProvider reCaptchaKey="6LcZ57QZAAAAAB5Zin3LaS1P7oyap4Vx7FxWeC6_">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
        <input type="button" value="認証ボタン" onClick={serverAuth} />
        <br />
        token：{token}
        <GoogleReCaptcha onVerify={token => setToken2(token)} />
      </GoogleReCaptchaProvider>
    </div>
  );
}
