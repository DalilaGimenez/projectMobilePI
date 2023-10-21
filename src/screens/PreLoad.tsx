import React, { useEffect } from 'react';
import {View, ActivityIndicator, Button} from 'react-native';

import { styles } from '../styles/Styles';

import Title from '../components/Title';
import CustomButton from '../components/CustomButton ';
import ImgLogo from '../components/ImgLogo';

export default function PreLoad({navigation}) {

  const logar = () => {
    navigation.navigate('SignIn');
  };

    return(
      <View style={styles.container}>
        <ImgLogo style='imgLogo' />
        <Title title={"Pet's Hostes"} txtStyle="txtTitle"/>
        <ActivityIndicator style={styles.loadingIcon}/>

        <CustomButton title="COMEÇAR" onPress={logar} />     
        </View>
    );
}
