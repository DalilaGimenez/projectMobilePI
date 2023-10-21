import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#00C9CC',
      alignItems: 'center',
      justifyContent: 'center',
    },
    containerWhite: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imgLogo: {
      width: 200,
      height: 200,
      flexShrink: 0,
      alignItems: 'center',
      borderRadius: 100,
    },
    iconLogo: {
      width: 50,
      height: 50,
      flexShrink: 0,
      alignItems: 'center',
      borderRadius: 100,
    },
    txtTitle: {
      color: "#fff",
      fontFamily: "IrishGrover",
      fontSize: 40,
      alignItems: 'center',
    },
    txtSubTitle: {
        color: "#000000",
        fontFamily: "IrishGrover",
        fontSize: 30,
        alignItems: 'center',
      },
    txtHeader: {
        color: "#fff",
        fontFamily: "IrishGrover",
        fontSize: 18,
        alignItems: 'center',
      },
    underlineTextStyle: {
      fontSize: 16,
      color: '#0f3e8d',
      fontWeight: 'bold',
      fontStyle: 'italic',
      textDecorationLine: 'underline',
      lineHeight: 50, // Altura da linha igual à altura da caixa
      marginLeft: 5,
    },
    txt: {
      fontSize: 16, // Tamanho da fonte
      fontWeight:  'normal', // Normal
      color: '#000000', // Cor do texto preta
      lineHeight: 50, // Altura da linha igual à altura da caixa
      marginLeft: 5,
    },
    txtBold: {
      fontSize: 16,
      color: '#0000FF',
      fontWeight: 'bold', // Negrito
      marginLeft: 5,
      lineHeight: 50, // Altura da linha igual à altura da caixa

    },
    input: {
      width: 320,
      height: 60,
      borderColor: '#ccc',
      borderWidth: 1,
      borderRadius: 10,
      backgroundColor: '#FFF',
      marginVertical: 10,
      padding: 10,
    },
    separator: {
      width: '100%',
      height: 2,
      marginVertical: 5,
      borderBottomColor: '#000',
      backgroundColor: '#ccc',
    },
    header: {
      width: '100%',
      height: 60,
      flexShrink: 0,
      backgroundColor: '#00C9CC',
      position: 'absolute',
      top: 0,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: 25,
      paddingVertical: 'auto',
   },
    button: {
      width: 150,
      height: 50,
      backgroundColor: '#2196F3',
      flexDirection: 'row',
      justifyContent: 'center',
      paddingHorizontal: 5,
      paddingVertical: 5,
      borderRadius: 5,
      alignItems: 'center',
   },
   buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      alignItems: 'center',
   },
   root: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
    flexDirection: 'column',
 },
    cardServices: {
      width: '100%', // Largura de 300 pixels
      height: 80, // Altura de 50 pixels
      borderRadius: 10, // Bordas arredondadas com raio de 10 pixels
      flexShrink: 0,
      paddingHorizontal: 5,
      paddingVertical: 5,
      alignItems: 'center',
      flexDirection: 'row',
      marginBottom: 10,
    },
    txtCardServices: {
      flexDirection: 'column',
      marginBottom: 6,
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
      alignItems: 'center',
    },
    txtCardServicesN: {
      flexDirection: 'column',
      marginBottom: 6,
      color: '#fff',
      fontSize: 12,
      fontWeight: 'normal',
      alignItems: 'center',
    },
    iconServices: {
      width: 30,
      height: 30,
      marginRight: 10,
    },
    loadingIcon: {
      justifyContent: 'space-around',
      marginTop: 50,
      flexDirection: 'row',
      padding: 10,
    },
      alert: {
        marginTop: 20,
        fontWeight: 'bold',
        color: '#ff0000',
    },
    signMessageButton: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginTop: 5,
    },
    LocationArea: {
      backgroundColor: '#4EADBE',
      height: 60,
      borderRadius: 30,
      flexDirection: 'row',
      alignItems: 'center',
      paddingLeft: 20,
      paddingRight: 20,
      marginTop: 30,
    },
  });