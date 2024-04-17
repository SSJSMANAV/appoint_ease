import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  ScrollView,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

const BecomeDoctor = () => {
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [speciality, setSpeciality] = useState("");
  const [workingAt, setWorkingAt] = useState("");
  const [experience, setExperience] = useState("");
  const [education, setEducation] = useState([]);
  const [institution, setInstitution] = useState("");
  const [degree, setDegree] = useState("");

  const handleAddEducation = () => {
    if (institution && degree) {
      setEducation([...education, { institution, degree }]);
      setInstitution("");
      setDegree("");
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Apply</Text>
      <TextInput
        placeholder="Age"
        value={age}
        onChangeText={setAge}
        keyboardType="numeric"
        style={styles.input}
      />
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={gender}
          onValueChange={(itemValue) => setGender(itemValue)}
          // No need to set fontFamily here
        >
          <Picker.Item label="Select Gender" value="" />
          <Picker.Item label="Male" value="male" style={styles.pickerItem} />
          <Picker.Item
            label="Female"
            value="female"
            style={styles.pickerItem}
          />
        </Picker>
      </View>

      <TextInput
        placeholder="Speciality"
        value={speciality}
        onChangeText={setSpeciality}
        style={styles.input}
      />
      <TextInput
        placeholder="Currently Working at"
        value={workingAt}
        onChangeText={setWorkingAt}
        style={styles.input}
      />
      <TextInput
        placeholder="Experience (in years)"
        value={experience}
        onChangeText={setExperience}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button
        title="Proceed"
        onPress={() => {
          // Handle form submission here
          console.log("Form submitted");
        }}
        style={styles.button}
      />
      <Text style={styles.subtitle}>Add Education</Text>
      <TextInput
        placeholder="Institution"
        value={institution}
        onChangeText={setInstitution}
        style={styles.input}
      />
      <TextInput
        placeholder="Degree"
        value={degree}
        onChangeText={setDegree}
        style={styles.input}
      />
      <Button title="Add" onPress={handleAddEducation} style={styles.button} />
      <Text style={styles.subtitle}>Education:</Text>
      {education.map((item, index) => (
        <Text key={index}>{`${item.institution} - ${item.degree}`}</Text>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
    fontFamily: "Poppins-Regular",
  },
  subtitle: {
    fontSize: 18,
    marginBottom: 10,
    fontFamily: "Poppins-Regular",
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    marginBottom: 10,
    borderRadius: 8, // Add border radius for rounded corners
    fontFamily: "Poppins-Regular",
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    borderRadius: 8, // Add border radius for rounded corners
  },
  pickerItem: {
    fontFamily: "Poppins-Regular",
  },
  button: {
    marginBottom: 20,
  },
});

export default BecomeDoctor;
