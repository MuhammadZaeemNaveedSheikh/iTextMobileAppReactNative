import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Navigation } from './src/components';
import { loadFonts } from "././src/config/fonts"
import { useEffect, useState } from 'react';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Text } from 'react-native';
import { styles } from './src/styles';
import { Title } from './src/imageSource';
import { LinearGradient } from 'expo-linear-gradient';
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  useEffect(() => {
    const loadAsyncData = async () => {
      await loadFonts();
      setFontsLoaded(true);
    };

    loadAsyncData();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  const CustomDrawerContent = ({ state, navigation }) => {
    return (
      <>
        <View style={{ flex: 1, paddingTop: 60, paddingLeft: 30 }}
        >
          <View alignItems="center">
            <Title />
          </View>
          {state.routeNames.map((routeName, index) => (
            <TouchableOpacity
              style={[styles.navDiv]}
              key={index}
              onPress={() => navigation.navigate(routeName)}
            >
              <Text style={[styles.nav]}>{getDrawerLabel(routeName)}</Text>

            </TouchableOpacity>
          ))}
        </View>
        <LinearGradient
          style={{ width: "100%", flex: 0.5, }}
          colors={['#FFFFFF', '#008080']}
          start={{ x: 1, y: 0 }}
          end={{ x: 1, y: 1 }}
        >
          <View alignItems="center">
            {/* <Bg /> */}
          </View>
        </LinearGradient>
      </>
    );
  };
  const getDrawerLabel = (routeName) => {
    switch (routeName) {
      case 'Home':
        return 'Home';
      case 'profile':
        return 'Profile';
      case 'campaign':
        return 'Campaign';
      case 'businessName':
        return 'Business Name';
      case 'customerName':
        return 'Customer Name';
      case 'marketingHistory':
        return 'Marketing History';
      case 'templates':
        return 'Templates';
      case 'onlineMarketing':
        return 'Online Marketing';

      default:
        return routeName;
    }
  };
  return (
    <NavigationContainer>
      <Navigation />
      {/* <Drawer.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}
        drawerContent={(props) => <CustomDrawerContent {...props} />}
      >
        <Drawer.Screen name="Home" component={Login} />
        <Drawer.Screen name="campaign" component={Campaign} />
        <Drawer.Screen name="onlineMarketing" component={OnlineMarketing} />
        <Drawer.Screen name="customerName" component={CustomerName} />
        <Drawer.Screen name="businessName" component={BusinessName} />
        <Drawer.Screen name="marketingHistory" component={MarketingHistory} />
        <Drawer.Screen name="templates" component={Templates} />
        <Drawer.Screen name="profile" component={profile} />
        
      </Drawer.Navigator> */}
    </NavigationContainer>
  );
}
