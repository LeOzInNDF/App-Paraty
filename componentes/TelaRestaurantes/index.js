import React from 'react';
import {Text, View, Image, ScrollView} from 'react-native';
import estilos from './estilos';
import imgrestaurante01 from '../../assets/restaurantes/restaurante01.png'
import imgrestaurante02 from '../../assets/restaurantes/restaurante02.png'
import imgrestaurante03 from '../../assets/restaurantes/restaurante03.png'

export default function TelaRestaurantes(){
  return (
    <ScrollView>
    <View style={estilos.container}>
    <Text style={estilos.titulo}>Bares e Restaurantes</Text>
    <Text style={estilos.descricao}>O prazer da boa comida você encontra em Paraty. Com inúmeras opções de restaurantes, a cidade oferece o melhor da culinária internacional, juntamente à saborosa cozinha caiçara. Confira alguns bares e restaurantes famosos.</Text>
    <View style={estilos.boxcard}>
    <Image style={estilos.imgcard} source={imgrestaurante01}></Image>
    <Text style={estilos.titulocard}>Armazén Mar</Text>
    <Text style={estilos.descricaocard}>Localização: Rod Rio-Santos</Text>
    </View>
    <View style={estilos.boxcard}>
    <Image style={estilos.imgcard} source={imgrestaurante02}></Image>
    <Text style={estilos.titulocard}>Bendita's Restaurante</Text>
    <Text style={estilos.descricaocard}>Localização: Centro Histórico</Text>
    </View>
    <View style={estilos.boxcard}>
    <Image style={estilos.imgcard} source={imgrestaurante03}></Image>   
    <Text style={estilos.titulocard}>SEREIA DO MAR PIZZA-BAR</Text>
    <Text style={estilos.descricaocard}>Localização: Praia do Jabaquara</Text>
    </View>
    </View>
    </ScrollView>
    

    
  );
}