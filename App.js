import React, { useState } from 'react'
import { StyleSheet, Text, View, Modal, Pressable, TextInput, Switch } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RutineScreen from './screens/RutineScreen';

function Home({ navigation, rutine, setRutine }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [excercises, onChangeExcercises] = React.useState('');
  const [rest, onChangeRest] = React.useState('');
  const [sets, onChangeSets] = React.useState('');
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (
    <View style={styles.centeredView}>
      <TextInput
        style={[styles.input, isEnabled && styles.dimmed]}
        onChangeText={setRutine}
        value={rutine}
        placeholder='Name of the rutine ex(Leg day, Monday)'
      />
      <Pressable onPress={() => navigation.navigate('Rutine')}>
        <Text>+ Create Rutine</Text>
      </Pressable>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [rutine, setRutine] = React.useState({ name: '' });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          options={{ title: 'Home' }}
        >
          {(props) => <Home {...props} rutine={rutine} setRutine={setRutine} />}
        </Stack.Screen>
        <Stack.Screen name="Rutine" options={{ title: rutine }}>
          {(props) => <RutineScreen {...props} rutine={rutine} setRutine={setRutine} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};



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
    width: 300,
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

export default App;