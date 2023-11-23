import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const UnitConverterApp = () => {
  const [km, setKm] = useState('');
  const [miles, setMiles] = useState('');
  const [kg, setKg] = useState('');
  const [pounds, setPounds] = useState('');

  const convertKmToMiles = () => {
    const milesValue = parseFloat(km) * 0.621371;
    setMiles(milesValue.toFixed(2));
  };

  const convertKgToPounds = () => {
    const poundsValue = parseFloat(kg) * 2.20462;
    setPounds(poundsValue.toFixed(2));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Unit Converter</Text>

      <View style={styles.converterContainer}>
        <Text style={styles.label}>Kilometers to Miles</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter kilometers"
          keyboardType="numeric"
          value={km}
          onChangeText={(text) => setKm(text)}
        />
        <Button title="Convert" onPress={convertKmToMiles} />
        <Text style={styles.result}>{miles} miles</Text>
      </View>

      <View style={styles.converterContainer}>
        <Text style={styles.label}>Kilograms to Pounds</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter kilograms"
          keyboardType="numeric"
          value={kg}
          onChangeText={(text) => setKg(text)}
        />
        <Button title="Convert" onPress={convertKgToPounds} />
        <Text style={styles.result}>{pounds} pounds</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  converterContainer: {
    marginBottom: 20,
    width: '80%',
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  result: {
    marginTop: 10,
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default UnitConverterApp;
