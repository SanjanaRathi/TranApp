/**
 * @format
 */

import { AppRegistry, Text } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
import 'react-native-gesture-handler';
Text.defaultProps.allowFontScaling = false;

AppRegistry.registerComponent(appName, () => App);
