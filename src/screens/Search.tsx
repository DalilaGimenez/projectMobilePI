import React from 'react';
import { Text, View, ScrollView, TouchableOpacity } from 'react-native';
import CardsServices from '../components/CardServices';
import { styles } from '../styles/Styles';

export default function Search() {
    return (
    <View style={styles.containerWhite}>
        <ScrollView style={{ marginBottom: 10 }}>

                <Text>Serviços</Text>
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
    </View>
    
            
        
    );
};