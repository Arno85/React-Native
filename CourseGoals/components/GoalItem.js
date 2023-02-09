import { StyleSheet, View, Text, Pressable } from 'react-native';

const GoalItem = (props) => {
  const goalItemPressedHandler = () => {
    props.deleteGoalHandler(props.itemData.index);
  };

  return (
    <View key={props.itemData.index} style={styles.goalItem}>
      <Pressable android_ripple={{ color: '#3b1074' }} style={({ pressed }) => pressed && styles.goalTextPressed} onPress={goalItemPressedHandler}>
        <Text style={styles.goalText}>{props.itemData.item}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    color: '#ffffff',
    padding: 16,
  },
  goalTextPressed: {
    opacity: 0.5,
  },
});

export default GoalItem;
