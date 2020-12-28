import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={{padding: 50}}>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
          <TextInput placeholder="Add course goal" style={{ width: '80%', borderColor: 'black', borderWidth: 1, borderRadius: 3, padding: 10}} />
          <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({ });
