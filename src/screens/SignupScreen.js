import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';

export default function SignupScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("Signup Successful!");
        navigation.replace("Events"); // go to Event List
      })
      .catch((error) => alert(error.message));
  };

return (
  <View style={styles.container}>
    <View style={styles.box}>
      <Text style={styles.header}>Sign up</Text>

      <TextInput 
        placeholder="Email" 
        value={email} 
        onChangeText={setEmail} 
        style={styles.input}
      />

      <TextInput 
        placeholder="Password" 
        secureTextEntry 
        value={password} 
        onChangeText={setPassword} 
        style={styles.input}
      />

      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText} onPress={handleSignup}>Signup</Text>
      </View>

      <Text onPress={() => navigation.navigate("Login")} style={styles.link}>
        Alerady have an account? Login
      </Text>
    </View>
  </View>
);
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center',
    backgroundColor: "#4A90E2", // background color
  },
  box: {
    width: "85%",   
    maxWidth: 400,  // smaller width than full screen
    backgroundColor: '#ffffffff',
    borderRadius: 15,
  
    padding: 25,
    alignItems: 'center',
    elevation: 6, // shadow for Android
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 6,
  },
  header: { 
    fontSize: 30, // bigger size
    fontWeight: 'bold', 
    marginBottom: 25, 
    color: '#333',
    textAlign: 'center'
  },
  input: { 
    width: '90%', // shorter inputs
    borderWidth: 1, 
    borderColor: '#ccc', 
    padding: 12, 
    marginBottom: 15, 
    borderRadius: 8, 
    backgroundColor: '#f9f9f9'
  },
  buttonContainer: {
    width: '90%',
    backgroundColor: '#007BFF',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  },
  link: { 
    marginTop: 15, 
    color: "#007BFF", 
    textAlign: "center",
    fontWeight: "500"
  }
});

