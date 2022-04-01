import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Login from "../Ecrans/Login";
import Dashbord from "../Ecrans/Dashbord";

const screens={
    Home:{
        screen:Login
    },
    Dashbord:{
        screen:Dashbord
    }
}

const HomeStack=createStackNavigator(screens);

export default createAppContainer(HomeStack);