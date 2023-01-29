import {AppRegistry} from 'react-native';
import Home from '../grocery_delivery/src/screens/Home/home';
import Register from './src/screens/Register/register';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Register);
// AppRegistry.registerComponent(appName, () => Home);
