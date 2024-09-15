import React from 'react';
import {Text, View, Image} from 'react-native';
import estilos from './estilos';
import imgpasseio01 from '../../assets/passeios/passeio01.png';
import imgpasseio02 from '../../assets/passeios/passeio02.png';
import imgpasseio03 from '../../assets/passeios/passeio03.png';

export default function TelaPasseios(){
  return (
    <View style={estilos.container}>
    <Text style={estilos.titulo}>Passeios em Paraty</Text>
    <Text style={estilos.descricao}>O município de Paraty está quase inteiro em área de parques e de preservação ambiental. Muitas são as opções de passeios para quem curte a natureza: passeios de jeep, de bike, caminhadas por trilhas entre outros. Veja os exemplos:</Text>
    <View style={estilos.boxcard}>
    <Text style={estilos.titulocard}>Tirolesa</Text>
    <Image style={estilos.imgcard} source={imgpasseio01}></Image>
    </View>
    <View style={estilos.boxcard}>
    <Text style={estilos.titulocard}>Rafting</Text>
    <Image style={estilos.imgcard} source={imgpasseio02}></Image>
    </View>
    <View style={estilos.boxcard}>
    <Text style={estilos.titulocard}>Canoagem no mangue</Text>
    <Image style={estilos.imgcard} source={imgpasseio03}></Image>
    </View>
    </View>
  );
}