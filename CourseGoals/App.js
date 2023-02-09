import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalList from './components/GoalList';

const App = () => {
  const [goals, setGoals] = useState([]);
  const [addNewGoalModalIsVisible, setAddNewGoalModalIsVisible] = useState(false);

  const addGoalHandler = (enteredGoaltext) => {
    setGoals((currentGoals) => [...currentGoals, enteredGoaltext]);
  };

  const deleteGoalHandler = (goalIndex) => {
    const newGoals = [...goals];
    newGoals.splice(goalIndex, 1);

    setGoals(newGoals);
  };

  const startAddGoalHandler = () => {
    setAddNewGoalModalIsVisible(true);
  };

  const endAddGoalHandler = () => {
    setAddNewGoalModalIsVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button title="Add New Goal" color="#b180f0" onPress={startAddGoalHandler} />
        <GoalInput addGoalHandler={addGoalHandler} addNewGoalModalIsVisible={addNewGoalModalIsVisible} endAddGoalHandler={endAddGoalHandler} />
        <GoalList goals={goals} deleteGoalHandler={deleteGoalHandler} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 65,
    paddingHorizontal: 16,
    flex: 1,
  },
});

export default App;
