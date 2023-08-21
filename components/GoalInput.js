import {useState} from 'react'
import { StyleSheet, View, Button, TextInput, Modal, Image } from 'react-native';

function GoalInput (props) {
    const [enteredGoalText, setEnteredGoalText] = useState('')

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText)
    }

    function addGoalHandler() {
        props.onAddGoal(enteredGoalText)
        setEnteredGoalText('')
    }

    return (
        <Modal visible={props.showModal} animationType='slide'>
            <View style={styles.inputContainer}>
            <Image 
                style={styles.image}
                source={require('../assets/goal.png')}/>
            <TextInput
                style={styles.textInput}
                placeholder='BE AMBITIOUS!'
                onChangeText={goalInputHandler}
                value={enteredGoalText}
            />
            <View style={styles.buttonContainer}>

            <View style={styles.button}>
                <Button
                    title="Let's do this!"
                    onPress={addGoalHandler}
                    color='palegreen'
                />
            </View>
            <View style={styles.button}>
                <Button
                    title='Actually, no.'
                    onPress={props.onCancel}
                    color='tomato'
                />
                </View>
            </View>

            </View>
        </Modal>
    )
}

export default GoalInput

const styles = StyleSheet.create({  
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: 'powderblue'
    },
    image: {
        width: 100,
        height: 100,
        margin: 20,
    },
    textInput: {
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 6,
        width: '100%',
        padding: 12,
    },
    buttonContainer: {
        flexDirection: 'row',
        marginTop: 16,
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
})