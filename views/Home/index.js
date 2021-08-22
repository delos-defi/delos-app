import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import axios from 'axios'
import Web3 from 'web3'

import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Home( {navigation} ) {
  const url_base = "https://deep-index.moralis.io/api/v2/erc20/0x747fD09ae18ba055978B5dA7a5cef572171C847C/price?chain=bsc"
  const [value, setValue] = useState('0');
  const [valor, setValor] = useState(0.00)
  const [wallet, setWallet] = useState()
  const [quantToken, setQuantToken] = useState()


  const getBalanceToken = async () => {
    const web3 = new Web3('https://bsc-dataseed1.binance.org:443');
    const BN = web3.utils.BN

    const abi = JSON.parse(
      '[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"minTokensBeforeSwap","type":"uint256"}],"name":"MinTokensBeforeSwapUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokensSwapped","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ethReceived","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokensIntoLiqudity","type":"uint256"}],"name":"SwapAndLiquify","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bool","name":"enabled","type":"bool"}],"name":"SwapAndLiquifyEnabledUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"_liquidityFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_maxTxAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_taxFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"}],"name":"deliver","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"excludeFromReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"geUnlockTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"includeInReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromFee","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"isExcludedFromReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"time","type":"uint256"}],"name":"lock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tAmount","type":"uint256"},{"internalType":"bool","name":"deductTransferFee","type":"bool"}],"name":"reflectionFromToken","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"liquidityFee","type":"uint256"}],"name":"setLiquidityFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"maxTxPercent","type":"uint256"}],"name":"setMaxTxPercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bool","name":"_enabled","type":"bool"}],"name":"setSwapAndLiquifyEnabled","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"taxFee","type":"uint256"}],"name":"setTaxFeePercent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"swapAndLiquifyEnabled","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"rAmount","type":"uint256"}],"name":"tokenFromReflection","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalFees","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"sender","type":"address"},{"internalType":"address","name":"recipient","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"uniswapV2Pair","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"uniswapV2Router","outputs":[{"internalType":"contract IUniswapV2Router02","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"unlock","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]'
    );

    const delosContract = new web3.eth.Contract(abi,'0x747fD09ae18ba055978B5dA7a5cef572171C847C');

    const bscQuant = await delosContract.methods.balanceOf('0xD9A200c275d344C14e18B58abCf711fC0A4874f9').call();
    
    return bscQuant.toString().replace(bscQuant.toString().substr(-18), '');
  }

  const getValue = async () =>{
    try {
      const res = await axios.get(url_base, {
        headers: {
          'X-API-Key' : 'kW0zFldELtVhkYplVd91AKKhd6tLWKYqRHUJUYDVDkPB3JOxXlfXQKytDRanlf5l'
        }
      })


      let price = res.data.usdPrice
      setValue(price.toString())

      try{
        const token = await AsyncStorage.getItem("token_quant")
        const bsc = await AsyncStorage.getItem("token_wallet")
        setWallet(bsc)
        
        if (token && bsc){
          if (token === 0){
            setValor('0')
          }
          else{
            const quantidade = await getBalanceToken()
            setQuantToken(quantidade)
            setValor(quantidade * value)
          }
        }

        else if (token !== null){
          setValor(token * value)
          setQuantToken(token)
        }
        else if (bsc !== null){
          if (token === 0){
            setValor(0)
            setQuantToken(0)
          }
          else{
            setValor(token * value)
            setQuantToken(token)
          }
        }
      }catch{
       
      }
    } catch (error){
      console.log(error)
    }
  }

  useEffect(() =>{
    getValue()
  })
  
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
      <View style={styles.myDelos}>
        <Text style={styles.myDelos__text}>
          Your Balance
        </Text>
        <Text style={styles.myDelos__textPrice}>
          {valor.toFixed(2)} $
        </Text>
      </View>

      <View style={styles.myDelosPrice}>
        <Text>
          Delos Price
        </Text>
        <Text>
          1 DELOS = {value}$
        </Text>
      </View>

      <View style={styles.yourDelos}>
        <Text style={styles.textDelos, {paddingVertical: 15}}>
          DELOS
        </Text>
        <Text style={styles.textDelos}>
          {quantToken}
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate('Add Delos')} style={{backgroundColor: 'black', padding: 3, borderRadius: 12}}>
          <Text style={styles.textDelos, {color: 'white'}}>
            +
          </Text>
        </TouchableOpacity>
      </View>

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
    alignItems: 'center',
  },
  myDelos:{
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    borderRadius: 7,
    padding: '5%',
    margin: '5%'
  },

  myDelos__text: {
    fontSize: 18
  },

  myDelos__textPrice:{
    fontSize: 22
  },

  myDelosPrice:{
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    alignSelf: 'center',
    width: '90%',
    alignItems: 'center',
    borderRadius: 8,
    padding: '3%',
    marginTop: '5%'
  },
  yourDelos:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: '15%',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
    borderRadius: 7,
  },
  textDelos:{
    fontSize: 16
  }
  
  
});
