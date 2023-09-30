import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { styles } from '../../styles';
import { useNavigation } from '@react-navigation/native';
import { Menu, MenuItem, MenuDivider } from 'react-native-material-menu';
import { Menus } from '../../imageSource';

const CustomMenu = ({ menuVisible, toggleMenu }) => {
    const Name = [
        {
            name: "Home",
            url: "home",
        },
        {
            name: "profile",
            url: "profile",
        }, {
            name: "Campaign",
            url: "campaign",
        }, {
            name: "Business Name",
            url: "businessName",
        }, {
            name: "Customer Name",
            url: "customerName",
        },
        {
            name: "Marketing History",
            url: "marketingHistory",
        }, {
            name: "Templates",
            url: "templates",
        },
        {
            name: "Online Marketing",
            url: "onlineMarketing",
        },
        {
            name: "SMS Status",
            url: "SmsStatus",
        },


    ]
    const navigation = useNavigation()
    return (
        <View style={Rstyles.MainDiv}>
            <Menu
                visible={menuVisible}
                style={Rstyles.menu}
                anchor={<Menus />}
                onRequestClose={toggleMenu}
            >
                {Name.map((option, index) => (
                    <MenuItem style={styles.nav}
                        key={index} onPress={() => {
                            toggleMenu()
                            navigation.navigate(option.url)
                        }}>{option.name}</MenuItem>
                ))}
            </Menu>
            {/* {menuVisible && (
                    <View style={Rstyles.menu}>
                        {Name.map((option, index) => (
                            <TouchableOpacity
                                style={styles.navDiv}
                                key={index}
                                onPress={() => {
                                    navigation.navigate(option.url)
                                    toggleMenu();
                                }}
                            >
                                <Text style={styles.nav}>{option.name}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                )} */}
        </View>
    );
};

const Rstyles = StyleSheet.create({
    MainDiv: {
        // alignItems: 'center',
        justifyContent: 'center',
        height: "100%",
    },
    menu: {
        // backgroundColor: 'rgba(255, 255, 255, 0.92)',
        borderRadius: 8,
        paddingVertical: 5,
        paddingHorizontal: 10,
        width: "auto",
        // height: "100%",
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // marginTop: 30,
        borderWidth: 0.5,
        // borderColor: '#ccc',
    },
});
export default CustomMenu;
