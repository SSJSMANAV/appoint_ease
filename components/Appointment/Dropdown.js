// @flow
import React, { useState } from "react";
import { View, Text } from "react-native";
import { Dropdown as DropdownElement } from "react-native-element-dropdown";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet } from "react-native";

const data = [
  { label: "All", value: "All" },
  { label: "Pending", value: "Pending" },
  { label: "Completed", value: "completed" },
];

const Dropdown = (props) => {
  const [value, setValue] = useState("All");
  const [isFocus, setIsFocus] = useState(false);

  const handleChange = (item) => {
    setValue(item.value);
    setIsFocus(false);

    if (item.value === "All") {
      props.changeStatus(null);
      console.log(item.value); // Pass null to fetch all appointments
    } else {
      props.changeStatus(item.value);
      console.log(item.value); // Pass the selected status to filter appointments
    }
  };

  return (
    <View>
      <DropdownElement
        style={[styles.dropdown, isFocus && { borderColor: "blue" }]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? "Select item" : "..."}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={handleChange}
        renderLeftIcon={() => (
          <AntDesign
            style={styles.icon}
            color={isFocus ? "blue" : "black"}
            name="Safety"
            size={20}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "40%",
    backgroundColor: "white",
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 0.5,
    borderRadius: 8,
    paddingHorizontal: 8,
  },
  icon: {
    marginRight: 5,
  },
  label: {
    position: "absolute",
    backgroundColor: "white",
    left: 22,
    top: 8,
    zIndex: 999,
    paddingHorizontal: 8,
    fontSize: 14,
  },
  placeholderStyle: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  selectedTextStyle: {
    fontSize: 16,
    fontFamily: "Poppins-Regular",
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});

export default Dropdown;
