import { createStackNavigator } from '@react-navigation/stack'
import { BusinessName, Campaign, CustomerName, Login, MarketingHistory, OnlineMarketing, SMSStatus, SmsStatus, Templates, profile } from '../screens';

const Stack = createStackNavigator()
const Index = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}
            initialRouteName="home">
            <Stack.Screen name="home" component={Login} />
            <Stack.Screen name="campaign" component={Campaign} />
            <Stack.Screen name="businessName" component={BusinessName} />
            <Stack.Screen name="customerName" component={CustomerName} />
            <Stack.Screen name="onlineMarketing" component={OnlineMarketing} />
            <Stack.Screen name="marketingHistory" component={MarketingHistory} />
            <Stack.Screen name="templates" component={Templates} />
            <Stack.Screen name="profile" component={profile} />
            <Stack.Screen name="SmsStatus" component={SMSStatus} />

        </Stack.Navigator>
    )
}
export default Index