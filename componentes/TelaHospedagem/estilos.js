import { StyleSheet } from'react-native';


const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4fbc3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  titulo:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  descricao: {
    textAlign: 'center',
    marginBottom: 20,
  },
  boxcard: {
    backgroundColor:'#fff',
    width: 320,
    marginBottom: 5,
    padding: 10,
    borderRadius: 5,
    borderColor: '#979797',
    borderWidth: 1,
    
  },
  imgcard:{
    width: 300,
    height: 80,
    marginBottom: 5,
  },
  titulocard: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    textAlign: 'center'
  },

});

export default estilos