import React, { useEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { View, Text } from "react-native";
import { Menus } from "../../imageSource";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Menu } from "..";
import { Dimensions } from "react-native";

export const Index = ({ name }) => {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);

  const openMenu = () => {
    setModalVisible(true);
  };

  // const openDrawer = () => {
  //   navigation.toggleDrawer()
  // }

  const styles = createStyles();
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];


  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };
    const [isTablet, setIsTablet] = useState(false);
    useEffect(() => {
        const windowWidth = Dimensions.get('window').width;
        if (windowWidth >= 500) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
        }
    }, []);
  return (
    // <>
    //   <View 
    //     // onPress={toggleMenu}
    //   >
    //     <Menu options={options} menuVisible={menuVisible} toggleMenu={toggleMenu} />
    //   </View>
    //   <View style={styles.container}>

    //     <View>
    //       {name ? (
    //         <Text style={styles.des}> {name}</Text>
    //       ) :
    //         null}
    //     </View>

    //     <TouchableOpacity
    //       onPress={toggleMenu}
    //     // onPress={openDrawer}
    //     >
    //       <View alignItems="flex-end" width="75%" onPress={openMenu}>
    //         <Menus />
    //       </View>
    //     </TouchableOpacity>
    //   </View >
    // </>
    <View style={styles.container}>
      <View>
        {name ? <Text style={isTablet? styles.des2: styles.des}>{name}</Text> : null}
      </View>
      <TouchableOpacity onPress={toggleMenu} style={styles.menuContainer}>
        {/* <View alignItems="flex-end" width="75%" onPress={toggleMenu}>
          <Menus />
        </View> */}
        {/* <View style={styles.menuContainer}> */}
        <Menu menuVisible={menuVisible} toggleMenu={toggleMenu} />
        {/* </View> */}
      </TouchableOpacity>
    </View>


  );
};

const createStyles = () =>
  StyleSheet.create({
    container: {
      width: "90%",
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
    },
    img: {
      width: 142,
      height: 22,
    },
    menuContainer: {
      position: 'absolute',
      top: 0,
      // left: 0,
      // width: "90%",
      right: 0,
      // left: 0,
      // zIndex: 2,
    },
    des: {
      color: "#084A5B",
      fontSize: 20,
      textTransform: "uppercase",
      fontFamily: "Poppins-SemiBold",
      textAlign: "center",
      lineHeight: 30,
    },
    des2: {
      color: "#084A5B",
      fontSize: 50,
      textTransform: "uppercase",
      fontFamily: "Poppins-SemiBold",
      textAlign: "center",
      lineHeight: 75,
    },
  });
export default Index;