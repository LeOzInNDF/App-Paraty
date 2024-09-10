import React from 'react';
import { View, Text, Image, Button} from 'react-native';
import Capa from '../../assets/01.png';
import estilo from './estilos'

export default function TelaInicial ( props ){
  return (
    <View style={estilo.container}>
      <View style={estilo.card}>
      <Text style={estilo.titulo}>Paraty</Text>
      <Text style={estilo.paragrafo}>Saiba o quer visitar em Paraty</Text>
      <Image style={estilo.imgCapa} source={Capa}></Image>
      
      <View style={estilo.boxBotao}>
      <Button 
        title="Ver Restaurantes" 
        onPress = { () =>  props.navigation.navigate("Restaurantes")} 
        color="#372d00"
        />
      </View>

      <View style={estilo.boxBotao}>
      <Button 
       title="Ver Passeios" 
       onPress = { () =>  props.navigation.navigate("Passeios")} 
       color="#372d00"
       />
      </View>
      
      <View style={estilo.boxBotao}>
      <Button 
      title="Ver Hospedagem" 
      onPress = { () =>  props.navigation.navigate("Hospedagem")} 
      color="#372d00"
       />
       </View>
      
    </View>
    </View>
  );
}