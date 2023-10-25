import React from 'react';
import { Text, View, ScrollView, TouchableOpacity, StatusBar, ViewBase, SafeAreaView } from 'react-native';
import CardsServices from '../components/CardServices';
import { styles } from '../styles/Styles';
import CustomHeader from '../components/CustomHeader';
import CustomFooter from '../components/CustomFooter';
import SearchLocation from '../components/SearchLocation';

export const Images = {
    IconHospedagem: require('../resources/images/iconHospedagem.png'),
    IconCreche: require('../resources/images/iconCreche.png'),
    IconPetSitter: require('../resources/images/iconPetSitter.png'),
    IconPasseios: require('../resources/images/iconPasseios.png'),
};

interface ServiceDetailsScreenProps {
    route: any; // Importe o tipo correto para a rota

}

const Search: React.FC<{ ServiceDetailsScreenProps }> = ({ route }) => {
    const { service } = route.params;

    const renderServiceCard = () => {
        if (service === 'Hospedagem') {
            return (
                <View style={{ ...styles.cardServices, backgroundColor: '#B256B9' }}>
                    <Images.IconHospedagem style={{ width: 50, height: 50, marginRight: 8 }} />

                    <View>
                        <Text style={styles.txtCardServicesN}>
                            Serviço:
                        </Text>
                        <Text style={styles.txtCardServices}>
                            Hospedagem
                        </Text>

                    </View>
                    {/* Coloque os detalhes específicos para o serviço de hotel aqui */}
                </View>
            );
        } else if (service === 'Creche') {
            return (
                <View style={{ ...styles.cardServices, backgroundColor: '#FF9800' }}>
                    <Images.IconCreche style={{ width: 50, height: 50, marginRight: 8 }} />

                    <View>
                        <Text style={styles.txtCardServicesN}>
                            Serviço:
                        </Text>
                        <Text style={styles.txtCardServices}>
                            Creche
                        </Text>

                    </View>
                    {/* Coloque os detalhes específicos para o serviço de hotel aqui */}
                </View>
            );
        } else if (service === 'Pet Sitter') {
            return (
                <View style={{ ...styles.cardServices, backgroundColor: '#00C9CC' }}>
                    <Images.IconCreche style={{ width: 50, height: 50, marginRight: 8 }} />

                    <View>
                        <Text style={styles.txtCardServicesN}>
                            Serviço:
                        </Text>
                        <Text style={styles.txtCardServices}>
                            Pet Sitter
                        </Text>

                    </View>
                    {/* Coloque os detalhes específicos para o serviço de hotel aqui */}
                </View>
            );
        } else if (service === 'Passeios') {
            return (
                <View style={{ ...styles.cardServices, backgroundColor: '#009846' }}>
                    <Images.IconCreche style={{ width: 50, height: 50, marginRight: 8 }} />

                    <View>
                        <Text style={styles.txtCardServicesN}>
                            Serviço:
                        </Text>
                        <Text style={styles.txtCardServices}>
                            Passeios
                        </Text>

                    </View>
                    {/* Coloque os detalhes específicos para o serviço de hotel aqui */}
                </View>
            );
        };

        return (

            <View style={styles.containerWhite}>
                <StatusBar backgroundColor="#00C9CC" barStyle="light-content" />
                <CustomHeader subTitle="Encontre seu Pet's Hosts" />

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

                </ScrollView>
                <CustomFooter />
            </View>
        );
    };

    export default Search;