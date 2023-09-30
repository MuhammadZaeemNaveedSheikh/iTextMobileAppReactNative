import React from "react";
import { useState } from "react";
import { StyleSheet, Text } from "react-native";
import { View } from "react-native";
import { TextInput } from "react-native";
import { Key, Phone, User } from "../../imageSource";
const index = ({
  marginTop,
  height,
  secureTextEntry,
  marginBottom,
  icon,
  keys,
  phone,
  user,
  numberOfLines,
  borderTopStartRadius,
  borderBottomEndRadius,
  lable,
  backgroundColor,
  onChangeText,
  keyboardType,
  fontSize,
  fontFamily,
  value,
  fontWeight,
  lineHeight,
  placeholder,
  padding,
  paddingTop,
  paddingBottom,
  paddingHorizontal,
  placeholderTextColor,
  paddingLeft,
  paddingVertical,
  Width,
  width,
}) => {
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordChange = (text) => {
    setPassword(text);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // const { themeColor, setThemeColor } = usethemeContext();
  // const theme = useTheme();
  // const prop = {
  //   theme,
  //   themeColor,
  // };
  const styles = createStyles();
  return (
    <>
      <Text style={[styles.lable]}>{lable}</Text>
      <View
        style={{
          width: width ? width : "100%",
          display: "flex",
          marginBottom: marginBottom ? marginBottom : null,
          // borderColor: themeColor ? theme.colors.text : "#AFBACA",
          borderTopStartRadius: borderTopStartRadius ? borderTopStartRadius : 5,
          borderBottomEndRadius: borderBottomEndRadius ? borderBottomEndRadius : 5, flexDirection: "row",
          marginTop: marginTop ? marginTop : 19,
          alignItems: "center",
          height: height ? height : 45,
          backgroundColor: backgroundColor ? backgroundColor : '#084A5B',
          paddingHorizontal: paddingHorizontal ? paddingHorizontal : 14,
          // paddingVertical: paddingVertical ? paddingVertical : 11,
          // borderWidth: borderWidth ? borderWidth : 0.5,
        }}
      >
        {user ? (
          <User />
        ) :
          null
        }
        {keys ? (
          <Key />
        ) :
          null
        }
        {phone ? (
          <Phone />
        ) :
          null
        }
        <TextInput
          style={{
            borderLeftWidth: icon ? 0.5 : 0,
            borderLeftColor: "#D7DFE9",
            width: Width ? Width : "85%",
            fontSize: fontSize ? fontSize : 18,
            fontFamily: fontFamily ? fontFamily : "Poppins-Medium",
            // fontWeight: fontWeight ? fontWeight : "400",
            lineHeight: lineHeight ? lineHeight : 27,
            color: "#FFFFFF",
            padding: padding,
            marginLeft: 6,
            paddingTop: paddingTop,
            paddingBottom: paddingBottom,
            paddingLeft: paddingLeft,
          }}
          editable
          multiline
          numberOfLines={numberOfLines ? numberOfLines : 6}
          maxLength={40}
          onChangeText={onChangeText}
          value={value}
          placeholder={placeholder ? "  " + placeholder : "placeholder"}
          placeholderTextColor={placeholderTextColor ? placeholderTextColor : "#83a4ad"}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
        />
        {/* {lable === "Password" ||
        lable === "Current Password" ||
        lable === "Confirm Password" ? (
          <Icon
            name={showPassword ? "eye" : "eye-off"}
            size={20}
            color={themeColor ? theme.colors.text : "#5E718D"}
            type="ionicon"
            onPress={togglePasswordVisibility}
            style={styles.icon}
          />
        ) : null} */}
        {/* {edit ? <Edit /> : null} */}
      </View>
    </>
  );
};
const createStyles = () =>
  StyleSheet.create({
    lable: {
      // color: prop.themeColor
      //   ? prop.theme.colors.textWhite
      //   : prop.theme.colors.black2,
      // marginTop: 20,
      fontSize: 14,
      lineHeight: 27,
      // fontFamily: "Poppins-Medium",
    },
    icon: {
      marginLeft: 20,
    },
  });
export default index;
