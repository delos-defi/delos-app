import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import {Keyboard, StyleSheet, Text, TextInput, TouchableOpacity, View, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Home() {
    const [token, setToken] = useState()
    const [bsc, setBsc] = useState()

    const gravarToken = () => {
        try{
            AsyncStorage.setItem("token_quant", token)
            Keyboard.dismiss()
            Alert.alert('Sucesso', 'Salvo com sucesso!')

        }catch{

        }
    }
    const gravarWallet = async () => {
        try{
            await AsyncStorage.setItem("token_wallet", bsc)
            Keyboard.dismiss()
            Alert.alert('Sucesso', 'Salvo com sucesso!')
        }catch{

        }
    }

    return (
        <View style={styles.container}>
            <StatusBar style="auto" />
            <View style={styles.shadow}>
                <Text style={styles.text, {fontSize: 18, fontWeight: 'bold'}}>
                    Addition Manual
                </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setToken}
                    value={token}
                    placeholder={'Enter your DELOS quantity here.'}
                />

                <TouchableOpacity style={styles.btn} onPress={gravarToken}>
                <Text style={{color: 'white', fontWeight:'bold', alignSelf: 'center'}}>
                        Done!
                    </Text>
                </TouchableOpacity>
            </View>

            <View style={styles.shadow}>
                <Text style={styles.text, {fontSize: 18, fontWeight: 'bold'}}>
                    By Wallet Address
                </Text>

                <TextInput
                    style={styles.input}
                    onChangeText={setBsc}
                    value={bsc}
                    placeholder={'Enter your bsc wallet here.'}
                />

                <TouchableOpacity style={styles.btn} onPress={gravarWallet}>
                    <Text style={{color: 'white', fontWeight:'bold', alignSelf: 'center'}}>
                        Done!
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f2f2'
  },
  content:{
    justifyContent: 'center',
    alignItems: 'center'
  },
  shadow:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    justifyContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    width: '90%',
    borderRadius: 7,
    padding: '5%',
    marginVertical: '5%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
      alignSelf: 'center'
  },
  input:{
      margin: '5%',
      width: '95%',
      alignSelf: 'center',
      borderWidth: 1,
      height: '80%',
      padding: 8,
  },
  btn:{
      backgroundColor: 'black',
      width: '90%',
      padding: 5,
      borderRadius: 6
  }
});
