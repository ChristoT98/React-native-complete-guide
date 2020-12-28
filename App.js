import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View>
      <View style={{padding: 50}}>
          <TextInput placeholder="Add course goal" style={{ borderColor: 'black', borderWidth: 1}} />
          <Button title="ADD" />
      </View>
      <View>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({ });
