
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import MovieScreen from "../screens/Movies";
import TVScreen from "../screens/Search";
import SearchScreen from "../screens/Search";
import { BG_COLOR } from "../constants/Colors";

const TabNavigation =  createBottomTabNavigator(
    {
        Movies: MovieScreen,
        TV: TVScreen,
        Search: SearchScreen
    },
    {
        tabBarOptions: {
            showLabel: false,
            style: {
                backgroundColor: BG_COLOR
            }
        }
    }
);

export default createAppContainer(TabNavigation);