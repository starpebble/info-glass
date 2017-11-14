import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import InfoGlass from 'info-glass';

export default class App extends React.Component {
  constructor( props ) {
      super( props );
      this.state = {
        'deviceInfo' : {}
      };
  }

  // our example callback after InfoGlass asynchronously returns
  _callback = (info) => {
    this.setState((prevState,props) => {
      return {deviceInfo : info};
    });
    console.log('info-glass returns...\n' + JSON.stringify(info,null,2));
  }

  render() {
    let OS = this.state.deviceInfo.os ? `${this.state.deviceInfo.os.name} ${this.state.deviceInfo.os.version}` : 'N/A';
    let Manufacturer = this.state.deviceInfo.manufacturer ? `${this.state.deviceInfo.manufacturer}` : 'N/A';
    let Model = this.state.deviceInfo.model ? `${this.state.deviceInfo.model}` : 'N/A';

    return (
      <View style={styles.container}>
        <Text>🔍 InfoGlass Example App 💡</Text>
        <Text>{OS}</Text>
        <Text>{Manufacturer}</Text>
        <Text>{Model}</Text>
        <InfoGlass
          callback={this._callback}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop : 40,
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
