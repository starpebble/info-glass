// infoglass.js
// A pure javascript react native component to get info about the mobile device.
// e.g. OS, manufacturer, and model.

import React, { Component } from 'react';
import { View, Text, WebView } from 'react-native';
import Parser from 'ua-parser-js';

let NOT_AVAILABLE = 'N/A';
let ASYNCHRONOUS_DELAY_MS = 10;
let HTML = `
<!DOCTYPE html>
<html>
<body>
<script>
  function getinfo() {
    if(window.postMessage.length !== 1) {
      setTimeout(getinfo, ${ASYNCHRONOUS_DELAY_MS});
    } else {
      window.postMessage(window.navigator.userAgent);
    }
  }
  window.onload = getinfo;
</script>
<div>
</div>
</body>
</html>
`;

class InfoGlass extends Component {
  constructor (props) {
    super(props);
    this.state = {hasInfo: false};
  }

  hasInfo = () => {
    return this.state.hasInfo;
  }

  _returnInfo = (infoglass) => {
    const os = (infoglass.os) ? infoglass.os : NOT_AVAILABLE;
    const manufacturer = (infoglass.device) ? infoglass.device.vendor : NOT_AVAILABLE;
    const model = (infoglass.device) ? infoglass.device.model : NOT_AVAILABLE;
    return {os,manufacturer,model};
  };

  getInfo = () => {
    let infoglass = this;
    return new Promise(function(resolve,reject) {
      setTimeout(() => resolve(infoglass._returnInfo(infoglass.state)), ASYNCHRONOUS_DELAY_MS*2);
    });
  }

  shouldComponentUpdate() {
    return false;
  }

  _onMessage = (event) => {
    const ua = Parser(event.nativeEvent.data);
    this.setState((prevState,props) => {
      return {hasInfo: true,
              ...ua};
    });
    if (this.props.callback) {
      let info = this._returnInfo(ua);
      this.props.callback(info);
    }
  }

  render() {
    return (
      <WebView
        style={{
          height: 1,
          width: 1,
          maxHeight: 1,
          maxWidth: 1
        }}
        onMessage={this._onMessage}
        javaScriptEnabledAndroid={true}
        source={{html: HTML}}
      />
    );
  }
}

export default InfoGlass;
