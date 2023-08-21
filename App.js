import { StatusBar } from 'expo-status-bar';
import {useState} from 'react'
import { StyleSheet, View, FlatList, Button, Image } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [goals, setGoals] = useState([])
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function modalVisibleHandler() {
    setModalIsVisible(true)
  }

  function modalHideHandler() {
    setModalIsVisible(false)
  }

  function addGoalHandler(enteredGoalText) {
    setGoals(currentGoals => [...currentGoals, {text: enteredGoalText, id: Math.random().toString()}])
    modalHideHandler()
  }

  function deleteGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== id) 
    })
  }

  return (
    <>
      <StatusBar style='auto'/>
      <View style={styles.appContainer}>
        <Button title='Add a new goal' color='mediumpurple' onPress={modalVisibleHandler}/>
        <GoalInput
          onAddGoal={addGoalHandler}
          onCancel={modalHideHandler}
          showModal={modalIsVisible}
        />

        <View style={styles.goalsContainer}>
          <FlatList 
            data={goals} 
            renderItem={(itemData) => {
              return <GoalItem 
                text={itemData.item.text} 
                id={itemData.item.id}
                onDeleteItem={deleteGoalHandler}/>
          }} alwaysBounceVertical={false}
          />
        </View>

      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: 'powderblue'
  },
  goalsContainer: {
    flex: 5
  },
});
