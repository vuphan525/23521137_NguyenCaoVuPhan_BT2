import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './Home'
import ScheduleScreen from './Home1';
import DetailSchedule from './Home2';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Login">
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Schedule" component={ScheduleScreen} />
                <Stack.Screen name="Detail" component={DetailSchedule} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}