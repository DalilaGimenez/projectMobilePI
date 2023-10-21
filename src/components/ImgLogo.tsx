import React from 'react';
import { Image, View } from 'react-native';
import { styles } from '../styles/Styles';


interface LogoProps {
  style: string;
}

const ImgLogo: React.FunctionComponent<LogoProps> = ({ style }) => {
    return (
      <View>
          <Image
          source={require('../resources/images/imgLogo.png')}
          style={styles[style]}
          />
      </View>      
    );
 };
 export default ImgLogo;