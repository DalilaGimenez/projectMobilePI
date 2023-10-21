import React from 'react';
import {View, Text} from 'react-native';
import { Header } from '@rneui/themed';

import { styles } from '../styles/Styles';
import IconLogo from './ImgLogo';
import Title from './Title';

interface HeaderProps {
    subTitle: string;
  }

const CustomHeader: React.FunctionComponent<HeaderProps> = ({ subTitle }) => {
    return (
    
    <View style={styles.header}>
      <View style={{marginRight: 5}} >
      <IconLogo style={"iconLogo"} />
      </View>
      <Title txtStyle='txtHeader' title={subTitle}></Title>
    </View>
  
 );
}
export default CustomHeader;