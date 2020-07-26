import React, { useState } from "react";
import "./styles.css";
import axios from "axios";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from "react-google-recaptcha-v3";

export default function App() {
  const [token, setToken] = useState();
  const [score, setScore] = useState();
  const [challengeTime, setChallengeTime] = useState();

  function serverAuth() {
    console.log(token);
    axios
      .get(
        "https://us-east1-slack-app-for-mizukami.cloudfunctions.net/googleRecaptchav3?token=" + token
      )
      .then(res => {
        console.log("res");
        console.log(res);
        setChallengeTime(res.data.challenge_ts);
        setScore(res.data.score);
      })
      .catch(e => {
        console.log(e);
      });
  }

  return (
    <div className="App">
      <GoogleReCaptchaProvider reCaptchaKey="6LcZ57QZAAAAAB5Zin3LaS1P7oyap4Vx7FxWeC6_">
        <h1>Google reCaptcha V3</h1>
        <h2>練習用ソース</h2>
        <input type="button" value="認証ボタン" onClick={serverAuth} />
        <h3>token：{token}</h3>
        <h3>認証後</h3>
        <h3>challengeTime：{challengeTime}</h3>
        <h3>score：{score}</h3>
        <GoogleReCaptcha onVerify={token => setToken(token)} />
      </GoogleReCaptchaProvider>
    </div>
  );
}
