import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

import { styles } from '../styles/Styles';
import { useNavigation } from '@react-navigation/native';

export const Images = {
  IconSearch: require('../resources/images/seacherIcon.png'),
  IconFavorites: require('../resources/images/favoritesIcon.png'),
  IconAppointment: require('../resources/images/appointmentIcon.png'),
  IconMenu: require('../resources/images/menuIcon.png'),
};


const CustomFooter: React.FC = () => {

  return (
    <View style={styles.footerContainer}>
      <TouchableOpacity style={styles.iconContainer} >
        <Image source={Images.IconSearch} style={{ width: 40, height: 40 }} />
        <Text style={styles.iconText}>Buscar</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} >
        <Image source={Images.IconAppointment} style={{ width: 40, height: 40 }} />
        <Text style={styles.iconText}>Favoritos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} >
        <Image source={Images.IconSearch} style={{ width: 40, height: 40 }} />
        <Text style={styles.iconText}>Pedidos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.iconContainer} >
        <Image source={Images.IconMenu} style={{ width: 40, height: 40 }} />
        <Text style={styles.iconText}>Menu</Text>
      </TouchableOpacity>

    </View>
  );
};

export default CustomFooter;
