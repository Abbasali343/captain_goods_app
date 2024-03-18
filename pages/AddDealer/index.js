import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import axios from "axios";

export default function AddDealer() {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    companyName: "",
    officeNumber: "",
    mobileNumber: "",
    officeAddress: "",
    city: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let valid = true;
    let newErrors = {};

    // Example validations
    if (!formData.id.trim()) {
      newErrors.id = "Id is required";
      valid = false;
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company Name is required";
      valid = false;
    }
    if (!formData.city.trim()) {
      newErrors.city = "City is required";
      valid = false;
    }
    if (!formData.officeAddress.trim()) {
      newErrors.officeAddress = "Office Address is required";
      valid = false;
    }
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }

    // Add more validations as needed

    // Example phone number validation
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(formData.officeNumber)) {
      newErrors.officeNumber = "Invalid office number";
      valid = false;
    }
    if (!phoneRegex.test(formData.mobileNumber)) {
      newErrors.mobileNumber = "Invalid mobile number";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleInputChange = (name, value) => {
    setFormData({
      ...formData,
      [name]: value,
    });

    if (errors[name]) {
      setErrors({ ...errors, [name]: null });
    }
  };

  const handleSubmit = () => {
    // Here you would typically handle the form submission, like sending the data to a server
    if (validateForm()) {
      // Here you would typically handle the form submission, like sending the data to a server
      const response = axios.post("http://localhost:3000/v1/dealer/addDealer", {
        formData,
      });
      console.log(response.data)
    } else {
      console.log("Validation errors:", errors);
    }
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Id"
        value={formData.id}
        onChangeText={(text) => handleInputChange("id", text)}
      />
      {errors.id && <Text style={styles.errorText}>{errors.id}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={formData.name}
        onChangeText={(text) => handleInputChange("name", text)}
      />
      {errors.name && <Text style={styles.errorText}>{errors.name}</Text>}
      <TextInput
        style={styles.input}
        placeholder="Company Name"
        value={formData.companyName}
        onChangeText={(text) => handleInputChange("companyName", text)}
      />
      {errors.companyName && (
        <Text style={styles.errorText}>{errors.companyName}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Office Number"
        value={formData.officeNumber}
        onChangeText={(text) => handleInputChange("officeNumber", text)}
      />
      {errors.officeNumber && (
        <Text style={styles.errorText}>{errors.officeNumber}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Mobile Number"
        value={formData.mobileNumber}
        onChangeText={(text) => handleInputChange("mobileNumber", text)}
      />
      {errors.mobileNumber && (
        <Text style={styles.errorText}>{errors.mobileNumber}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="Office Address"
        value={formData.officeAddress}
        onChangeText={(text) => handleInputChange("officeAddress", text)}
      />
      {errors.officeAddress && (
        <Text style={styles.errorText}>{errors.officeAddress}</Text>
      )}
      <TextInput
        style={styles.input}
        placeholder="City"
        value={formData.city}
        onChangeText={(text) => handleInputChange("city", text)}
      />
      {errors.city && <Text style={styles.errorText}>{errors.city}</Text>}
      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  errorText: {
    color: "red",
    alignSelf: "flex-start", // Align to the start of the container
  },
});
