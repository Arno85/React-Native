import { View, TextInput, Button, StyleSheet, Modal, Image } from 'react-native';
import { useState } from 'react';

const GoalInput = (props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (text) => {
    setEnteredGoalText(text);
  };

  const addGoalPressedHandler = () => {
    if (enteredGoalText) {
      props.addGoalHandler(enteredGoalText);
      setEnteredGoalText('');
      props.endAddGoalHandler();
    }
  };

  return (
    <Modal visible={props.addNewGoalModalIsVisible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image source={require('../assets/goal.png')} style={styles.image} />
        <TextInput style={styles.textInput} placeholder="Your course goal!" onChangeText={goalInputHandler} value={enteredGoalText} />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={props.endAddGoalHandler} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalPressedHandler} color="#b180f0" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
    backgroundColor: '#311B6B',
  },
  image: {
    width: 100,
    height: 100,
    margin: 16,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    borderRadius: 6,
    backgroundColor: '#e4d0ff',
    padding: 16,
    width: '100%',
    color: '#120438',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
  },
});

export default GoalInput;
