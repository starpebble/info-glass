# info-glass
A pure javascript react native component to get info about a device, e.g. OS, manufacturer, and model.

[![npm version](https://badge.fury.io/js/info-glass.svg)](https://badge.fury.io/js/info-glass)

### Description

info-glass is a [react native](https://facebook.github.io/react-native/) component that provides device info. info-glass can provide:

* OS
* manufacturer
* model

to a react-native app. The component is written in javascript, convenient for some react native apps.

The component asynchronously provides device info to a parent component.

### Example Usage
See the example app [InfoGlassExampleApp](/example/InfoGlassExampleApp) in the examples directory.

JSX code snippet from example app ...
```
<View style={styles.container}>
  <Text>🔍 InfoGlass Example App 💡</Text>
  <Text>{OS}</Text>
  <Text>{Manufacturer}</Text>
  <Text>{Model}</Text>
  <InfoGlass
    callback={this._callback}
  />
</View>
```

Screenshot of example app.

![Screen Shot](https://raw.githubusercontent.com/starpebble/info-glass/master/example/InfoGlassExampleApp/info-glass-example-app-screenshot.png "info-glass screenshot")

### Questions

Leave comments or bug reports here on github in the project's [issues](https://github.com/starpebble/info-glass/issues).

### On GitHub
https://github.com/starpebble/info-glass
