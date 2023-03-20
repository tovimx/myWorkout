import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Pressable, TextInput, Switch } from 'react-native';


export default function App() {
  const [modalVisible, setModalVisible] = useState(false);
  const [excercises, onChangeExcercises] = React.useState('');
  const [rest, onChangeRest] = React.useState('');
  const [sets, onChangeSets] = React.useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.fieldSet}>
              <Text>Number of excercises</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeExcercises}
                value={excercises}
                keyboardType="numeric"
              />
            </View>
            <View style={styles.fieldSet}>
              <Text>Rest Time Per Set</Text>
              <TextInput
                style={styles.input}
                onChangeText={onChangeRest}
                value={rest}
                keyboardType="numeric"
                placeholder='seconds'
              />
            </View>
            <View style={styles.fieldSet}>
              <Text style={[styles.formLabel, isEnabled && styles.dimmed]}>Number of sets</Text>
              <TextInput
                style={[styles.input, isEnabled && styles.dimmed]}
                onChangeText={onChangeSets}
                value={sets}
                keyboardType="numeric"
                editable={!isEnabled}
              />
            </View>
            <View style={{ alignSelf: 'flex-end', marginRight: 52 }}>
              <Text>To Failure</Text>
              <Switch
                trackColor={{ false: '#767577', true: 'green' }}
                thumbColor={isEnabled ? 'white' : 'white'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
                style={{ marginLeft: 5 }}
              />
            </View>
            <View style={styles.actions}>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Ready</Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      <Pressable onPress={() => setModalVisible(true)}>
        <Text>Start a workout</Text>

      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  fieldSet: {
    width: 280,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dimmed: {
    color: 'gray',
    borderColor: 'gray'
  },
  setsLayout: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  sets: {
    flexDirection: 'column'
  },
  actions: {
    flexDirection: 'row',
    marginTop: 20
  },
  input: {
    width: 100,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    borderColor: 'black',
    borderWidth: 1,
    margin: 5,
    width: 100,
    alignItems: 'center'
  },
  formLabel: {
    alignSelf: 'center',
    textAlign: 'right'
  }
});

