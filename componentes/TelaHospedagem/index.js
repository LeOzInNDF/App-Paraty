import React from 'react';
import {Text, View, Image} from 'react-native';
import estilos from './estilos';
import imghospedagem01 from '../../assets/hospedagens/hospedagem01.png';
import imghospedagem02 from '../../assets/hospedagens/hospedagem02.png';
import imghospedagem03 from '../../assets/hospedagens/hospedagem03.png';

export default function TelaPasseios(){
  return (
    <View style={estilos.container}>
    <Text style={estilos.titulo}>Pousadas e Hotéis em Paraty</Text>
    <Text style={estilos.descricao}>Paraty conta com excelentes hoteis e pousadas cujos preços podem variar de R$200,00 à R$1500,00. Veja algumas pousadas abaixo.</Text>
    <View style={estilos.boxcard}>
    <Image style={estilos.imgcard} source={imghospedagem01}></Image>
    <Text style={estilos.titulocard}>Pousada Missanga</Text>
    <Text style={estilos.boxdescricao}>Valor médio: R$ 350,00
    Localização: Próx. à Av. Roberto Silveira</Text>
    </View>
    <View style={estilos.boxcard}>
    <Image style={estilos.imgcard} source={imghospedagem02}></Image>
    <Text style={estilos.titulocard}>Pousada Morro do Forte</Text>
    <Text style={estilos.boxdescricao}>Valor médio: R$ 450,00
    Localização: Próximo à Praia - Pontal</Text>
    </View>
    <View style={estilos.boxcard}>
    <Image style={estilos.imgcard} source={imghospedagem03}></Image>
    <Text style={estilos.titulocard}>Pousada Porto Imperial</Text>
    <Text style={estilos.boxdescricao}>Valor médio: R$ 550,00
    Localização: Centro Histórico</Text>
    </View>
    </View>
  );
}

