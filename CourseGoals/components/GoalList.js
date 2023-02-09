import GoalItem from './GoalItem';
import { StyleSheet, View, FlatList } from 'react-native';

const GoalList = (props) => {
  return (
    <View style={styles.goalContainer}>
      <FlatList data={props.goals} renderItem={(itemData) => <GoalItem itemData={itemData} deleteGoalHandler={props.deleteGoalHandler} />} alwaysBounceVertical={false} />
    </View>
  );
};

const styles = StyleSheet.create({
  goalContainer: {
    flex: 6,
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    marginTop: 16,
  },
});

export default GoalList;
