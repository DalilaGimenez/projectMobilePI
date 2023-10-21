import { styles } from '../styles/Styles';
import React from 'react';
import {Image, View, Text} from 'react-native';

export const Images = {
    IconHospedagem: require('../resources/images/iconHospedagem.png'),
    IconCreche: require('../resources/images/iconCreche.png'),
    IconPetSitter: require('../resources/images/iconPetSitter.png'),
    IconPasseios: require('../resources/images/iconPasseios.png'),
};


interface CardProps {
    title: string;
    description: string;
    image: string;
    backgroundColor: string;
  }

const CardsServices: React.FunctionComponent<CardProps> = ({ title, description, image, backgroundColor }) => {

    const CustomImage = () => {
        return <Image source={Images[image]} style={{ width: 50, height: 50, marginRight: 8 }} />;
    };

  return (
    
      <View style={[styles.cardServices, { backgroundColor }]}>
        
        <CustomImage />

        <View>
        <Text style={styles.txtCardServices}>
          {title}
        </Text>
        <Text style={styles.txtCardServicesN}>
          {description}
        </Text>
        </View>

      </View>
 
  );
}

export default CardsServices;