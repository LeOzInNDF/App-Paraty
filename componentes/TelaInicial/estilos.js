import { StyleSheet, Text, View } from'react-native';


const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1e3e4',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgCapa: {
    width: 300,
    height: 200,
    marginBottom: 20,
    
  },
  card: {
    width: 320,
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    borderColor: '#979797',
    borderWidth: 1,
    
  },
  titulo: {
    textAlign:'center',
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  paragrafo: {
    textAlign: "center",
    marginBottom: 20,
  },
  boxBotao: {
    marginBottom: 10,
  }
});

export default estilo