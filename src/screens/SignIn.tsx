import React, { useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput, Button, TouchableOpacity, ScrollView, SafeAreaView } from 'react-native';
import * as SecureStore from 'expo-secure-store'
import AsyncStorage from '@react-native-async-storage/async-storage'

import { styles }  from '../styles/Styles';

import ImgLogo from '../components/ImgLogo';
import Title from '../components/Title';
import CustomButton from '../components/CustomButton ';

export default function SignIn({navigation}) {
  const [result, setResult] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const logar = () => {
    if(login == '' && password == ''){
      return(setResult('Digite seu e-mail e sua senha!!!'))
    }

    if(login == 'admin' && password == '1234'){
      SecureStore.setItemAsync('token','123456')
      AsyncStorage.setItem('user','Administrador')
      
      setResult('Login com sucesso!')
      navigation.navigate('Services')
    } else {
      setResult('Login ou senha inválidos!')
    }
  }

  useEffect(() => {
    SecureStore.getItemAsync('token')
    .then((token) => {
      if(token != null){
        navigation.navigate('Services')
        token = null
      }
    })
  },[])
    
      const handleMessageButtonClick = () => {
        navigation.reset({
          routes: [{name: 'SignUp'}]
        });
      }

    return (
    <View style={styles.containerWhite}>
      <View style={{padding: 10}}> 
        <ImgLogo style="imgLogo" />
        <Title title={"Pet's Hostes"} txtStyle="txtSubTitle"/>
        </View>

      <View style={{padding: 5}}> 

      <SafeAreaView>
      <TextInput style={styles.input} placeholder="Digite seu e-mail" onChangeText={setLogin} />
      <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={setPassword}
      secureTextEntry={true} />
      </SafeAreaView>

      <Text style={styles.underlineTextStyle}
        onPress={handleMessageButtonClick}
        >Esqueci minha senha!</Text>
      </View>
      <Text style={styles.alert}>{result}</Text>
      <CustomButton title="ENTRAR" onPress={logar} />

      <View style={styles.separator} />

      <TouchableOpacity style={styles.signMessageButton} onPress={handleMessageButtonClick}>
      <Text style={styles.txt}
        >Ainda não possui uma conta?</Text>
      <Text style={styles.underlineTextStyle}
        >Cadastre-se</Text>
      </TouchableOpacity>         
  </View>
      
    );
}