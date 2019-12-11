import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './pages/Login';
import Home from './pages/Home';

export default createAppContainer(
  createStackNavigator({
    Login: Login,
    Home: Home,
  }),
);
