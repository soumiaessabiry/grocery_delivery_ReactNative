import {AppRegistry} from 'react-native';
import Home from '../grocery_delivery/src/screens/Home/home';
import Register from './src/screens/Register/register';
import Login from './src/screens/Login/login';
import {name as appName} from './app.json';

// AppRegistry.registerComponent(appName, () => Register);
AppRegistry.registerComponent(appName, () => Login);
// AppRegistry.registerComponent(appName, () => Home);
