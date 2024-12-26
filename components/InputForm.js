import { View, Text, KeyboardAvoidingView, TextInput, Pressable, Platform, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../redux/slices/todoSlice';

const InputForm = (props) => {

  const [currentValue, setCurrentValue] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = () => {
    // console.log(currentValue)
    if (currentValue !== ''){
      dispatch(addTodo(currentValue));
      setCurrentValue('');
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.addFormContainer}
    >
      <TextInput 
        style={styles.inputField}
        placeholder="할 일을 작성해 주세요"
        value={currentValue}
        onChangeText={setCurrentValue}
        onSubmitEditing={handleSubmit}
      />

      <Pressable style={styles.addButton} onPress={handleSubmit}
        hitSlop={10} 
        pressRetentionOffset={50}
      >
        {/* {({pressed}) => <Text style={styles.addButtonText} >{pressed ? '-' : '+'}</Text>} */}
        <Text style={styles.addButtonText} >+</Text>
      </Pressable>
    </KeyboardAvoidingView>
  )
}
export default InputForm

const styles = StyleSheet.create({
  addFormContainer: {
    flexDirection: 'row',
    marginTop: 'auto',
    marginBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: '#f7f8fa',
  },
  inputField: {
    flex: 1,
    height: 42,
    borderRadius: 4,
    padding: 5,
    marginRight: 25,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    color: '#000',
    fontSize: 15,
    textAlignVertical: 'center',
  },
  addButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 42,
    height: 42,
    borderRadius: 4,
    backgroundColor: 'rgba(0,0,0,0.7)',
    shadowColor: '#000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
  },
  addButtonText: {
    color: 'white',
    fontSize: 25,
  },
})