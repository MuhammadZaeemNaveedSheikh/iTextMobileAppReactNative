import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { SelectList, SearchList } from "react-native-dropdown-select-list";
import Icon from 'react-native-vector-icons/MaterialIcons';

const Index = ({
  data,
  notFoundText,
  searchPlaceholder,
  placeholder,
  pcolor,
  fontSize,
  marginTop,
  backgroundColor,
}) => {
  const [searchText, setSearchText] = useState("");
  const [selected, setSelected] = useState("");
  const prop = { backgroundColor, marginTop, pcolor, fontSize }
  const styles = createStyles(prop);
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
  ];

  const handleSelect = (value) => {
    setSelected(value);
    setSearchText(value);
  };

  return (
    <>
      <View style={styles.container}>
        <SelectList
          onSelect={handleSelect}
          setSelected={(text) => setSelected(text)}
          data={data ? data : options}
          defaultOption={"selected"}
          save="value"
          boxStyles={styles.boxStyles}
          inputStyles={styles.inputStyles}
          dropdownStyles={styles.dropdownStyles}
          dropdownItemStyles={styles.dropdownItemStyles}
          dropdownTextStyles={styles.dropdownTextStyles}
          searchPlaceholder={searchPlaceholder}
          notFoundText={notFoundText}
          placeholder={placeholder}
          // placeholderTextColor={pcolor ? pcolor : "red"}
          // searchIcon={
          //   <Phone />
          // }
          arrowicon={
            <View style={styles.down}>
              <Icon name="keyboard-arrow-down" size={20} color="#084A5B" />
            </View>
          }
        >
      
        </SelectList>
      </View>
    </>
  );
};

const createStyles = (prop) =>
  StyleSheet.create({
    container: {
      marginTop: prop.marginTop ? prop.marginTop : 16,
      width: "100%",
    },
    boxStyles: {
      backgroundColor: prop.backgroundColor ? prop.backgroundColor : "#DEDEDE",
      height: 50,
      borderTopLeftRadius: 5,
      borderBottomEndRadius: 5,

    },
    inputStyles: {
      height: 25,
      fontFamily: "Poppins-Regular",
      fontSize: prop.fontSize ? prop.fontSize : 18,
      color: prop.pcolor ? prop.pcolor : "#084A5B",

    },
    dropdownStyles: {
      maxHeight: 200,
      backgroundColor: "#DEDEDE",
    },
    dropdownItemStyles: {
      color: "red",

    },
    dropdownTextStyles: {
      color: "#084A5B",
    },
    down: {
      backgroundColor: "#ffd92e",
      borderRadius: 100,
      height: 20,
      width: 20,
      justifyContent: "center",
      alignItems: "center"

    }
  });

export default Index;
