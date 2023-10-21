import React, { useEffect, useState} from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { styles }  from '../styles/Styles';

import ImgLogo from '../components/ImgLogo';
import Title from '../components/Title';
import CustomButton from '../components/CustomButton ';

export default function SignUp({navigation}) {
  const [result, setResult] = useState('')
  const [user, setUser] = useState('')
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const logar = () => {
    if(user == '' && login == '' && password == '' && confirmPassword == ''){
      return(setResult('Digite seus dados!!!'))
    }

    if(password == confirmPassword ){
      SecureStore.setItemAsync('token','123456')
      AsyncStorage.setItem('user','Administrador')
      
      setResult('Cadastro realizado com sucesso!')

      setTimeout(() => {
        navigation.navigate('Services');
      }, 5000);
      
    } else {
      setResult('As senhas são diferentes, tente novamente!')
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
          routes: [{name: 'SignIn'}]
        });
      }

    return (
        <View style={styles.containerWhite}>
        <View style={{padding: 20}}> 
            <ImgLogo style="imgLogo"/>
            <Title title={"Pet's Hostes"} txtStyle="txtSubTitle"/>
            </View>

        <View style={{padding: 5}} />

            <TouchableOpacity style={styles.signMessageButton} onPress={handleMessageButtonClick}>
                <Text style={styles.txt}
                >Já possui uma conta?</Text>
                <Text style={styles.underlineTextStyle}
                >Entre Aqui!</Text>
            </TouchableOpacity>

            <SafeAreaView>
            <TextInput style={styles.input} placeholder="Qual seu Nome e Sobrenome?" onChangeText={setUser} />
            <TextInput style={styles.input} placeholder="Digite seu e-mail" onChangeText={setLogin} />
            <TextInput style={styles.input} placeholder="Digite sua senha" onChangeText={setPassword}
                secureTextEntry={true} />
            <TextInput style={styles.input} placeholder="Confirme sua senha" onChangeText={setConfirmPassword}
                secureTextEntry={true} />
            </SafeAreaView>

            <Text style={styles.alert}>{result} </Text>
            <View style={styles.separator} />

            <CustomButton title="ENTRAR" onPress={logar} />
            </View>
    );
};