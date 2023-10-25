import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, SafeAreaView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../api/firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigation } from '@react-navigation/native';
import { styles } from '../styles/Styles';

import ImgLogo from '../components/ImgLogo';
import Title from '../components/Title';
import CustomButton from '../components/CustomButton ';

export default function SignIn() {
  const [result, setResult] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();
  const auth = getAuth();


  const signInWithEmailAndPassword = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((response) => {
        console.log(response.user);
        navigation.reset({
          index: 0,
          routes: [{ name: 'Services' }]
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleMessageButtonClick = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'SignUp' }]
    });
  };

  return (
    <View style={styles.containerWhite}>
      <View style={{ padding: 10 }}>
        <ImgLogo style="imgLogo" />
        <Title title={"Pet's Hostes"} txtStyle="txtSubTitle" />
      </View>

      <View style={{ padding: 5 }}>

        <SafeAreaView>
          <TextInput
            style={styles.input}
            placeholder="Digite seu e-mail"
            onChangeText={setEmail} />
          <TextInput
            style={styles.input}
            placeholder="Digite sua senha"
            onChangeText={setPassword}
            secureTextEntry={true} />
        </SafeAreaView>

        <Text
          style={styles.underlineTextStyle}
          onPress={handleMessageButtonClick}
        >Esqueci minha senha!</Text>
      </View>
      <Text style={styles.alert}>{result}</Text>
      <CustomButton title="ENTRAR" onPress={signInWithEmailAndPassword} />

      <View style={styles.separator} />

      <TouchableOpacity style={styles.signMessageButton} onPress={handleMessageButtonClick}>
        <Text style={styles.txtNormal}
        >Ainda não possui uma conta?</Text>
        <Text style={styles.underlineTextStyle}
        >Cadastre-se</Text>
      </TouchableOpacity>
    </View>

  );
}