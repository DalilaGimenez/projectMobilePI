import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, ViewBase, SafeAreaView } from 'react-native';
import CardsServices from '../components/CardServices';
import { styles } from '../styles/Styles';
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import SearchLocation from '../components/SearchLocation';

export default function Services() {
    return (

        <View style={styles.containerWhite}>
            <StatusBar backgroundColor="#00C9CC" barStyle="light-content" />
            <CustomHeader subTitle='Solicitar Serviço' />

            <View style={styles.margin}>
                <SearchLocation />
            </View>

            <ScrollView style={styles.margin}>
                <Text style={styles.txtBold}>Do que você precisa?</Text>
                <TouchableOpacity>
                    <CardsServices
                        title={"Hospedagem"}
                        description={"Passar a noite na casa do anfitrião."}
                        image={"IconHospedagem"}
                        backgroundColor={'#B256B9'} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <CardsServices
                        title={"Creche"}
                        description={"Passar o dia na casa do anfitrião.."}
                        image={"IconCreche"}
                        backgroundColor={'#FF9800'} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <CardsServices
                        title={"Pet Sitter"}
                        description={"O anfitrião vai até a sua casa."}
                        image={"IconPetSitter"}
                        backgroundColor={'#00C9CC'} />
                </TouchableOpacity>

                <TouchableOpacity>
                    <CardsServices
                        title={"Passeios"}
                        description={"O anfitrião leva seu pet para passear."}
                        image={"IconPasseios"}
                        backgroundColor={'#009846'} />
                </TouchableOpacity>

            </ScrollView>
            <CustomFooter />
        </View>
    );
};