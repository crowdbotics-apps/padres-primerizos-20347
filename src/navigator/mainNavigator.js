import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Maps102488Navigator from '../features/Maps102488/navigator';
import Add-Item102487Navigator from '../features/Add-Item102487/navigator';
import Maps102483Navigator from '../features/Maps102483/navigator';
import UserProfile102479Navigator from '../features/UserProfile102479/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Maps102488: { screen: Maps102488Navigator },
Add-Item102487: { screen: Add-Item102487Navigator },
Maps102483: { screen: Maps102483Navigator },
UserProfile102479: { screen: UserProfile102479Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
