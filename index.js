import {AppRegistry} from 'react-native';
import {App} from './src';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import {enableLatestRenderer} from 'react-native-maps';

enableLatestRenderer();
AppRegistry.registerComponent(appName, () => App);
