import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, {useState } from 'react'
import ListIcon from '../assets/list.svg' 

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View
      style={styles.container}
    >
      <ListIcon />
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.input}
          placeholder='이메일'
          value={email}
          onChangeText={value => setEmail(value)}
        />
        <TextInput 
          style={styles.input}
          placeholder='비밀번호'
          value={password}
          onChangeText={value => setPassword(value)}
          secureTextEntry={true}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={styles.button}
        >
          <Text style={styles.buttonText}>로그인</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, styles.buttonOutline]}
        >
          <Text style={styles.buttonOutlineText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    width: '80%',
    marginTop: 15,
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  button: {
    backgroundColor: 'black',
    width: '100%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '500'
  },
  buttonOutline: {
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 1,
    marginTop: 5,
  },
  buttonOutlineText: {
    color: 'black',
    fontSize: 16,
    fontWeight: '500'
  }
})