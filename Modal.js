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