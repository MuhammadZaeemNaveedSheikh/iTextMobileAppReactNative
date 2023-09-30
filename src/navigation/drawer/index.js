import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { BusinessName, Campaign, CustomerName, Login, MarketingHistory, OnlineMarketing, SmsStatus, Templates, profile } from '../../screens';

const Drawer = createDrawerNavigator();

const Index = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
        }} >
            <Drawer.Screen name="home" component={Login} />
            <Drawer.Screen name="campaign" component={Campaign} />
            <Drawer.Screen name="businessName" component={BusinessName} />
            <Drawer.Screen name="customerName" component={CustomerName} />
            <Drawer.Screen name="marketingHistory" component={MarketingHistory} />
            <Drawer.Screen name="onlineMarketing" component={OnlineMarketing} />
            <Drawer.Screen name="templates" component={Templates} />
            <Drawer.Screen name="profile" component={profile} />
            <Drawer.Screen name="smsStatus" component={SmsStatus} />
        </Drawer.Navigator>
    );
}

export default Index;