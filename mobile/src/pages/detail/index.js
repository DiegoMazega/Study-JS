import React from 'react';
import { Text, TouchableOpacity, View, Image, Linking } from 'react-native';
import { Feather } from '@expo/vector-icons'
import styles from './styles.js';
import logoImg from '../../assets/logo.png'
import { useNavigation, useRoute } from '@react-navigation/native'
import * as MailComposer from 'expo-mail-composer';


export default function Detail() {
    const route = useRoute();
    const navigation = useNavigation();
    const incident = route.params.incident;
    const message = `Ola ${incident.name}, gostaria de ajudar no caso "${incident.title}" 
    com o valor de ${Intl.NumberFormat('pt-br', {
        style: 'currency',
        currency: 'BRL'}).format(incident.value)}`;

    function Back() {
        navigation.goBack();
    }

    function sendMail() {
        MailComposer.composeAsync({
            subject: `Heroi do caso: ${incident.title}`,
            recipients: [`${incident.email}`],
            body: message
        })
    }
    function sendWhatsapp() {
        Linking.openURL(`whatsapp://send?phone=55${incident.whatsapp}&text=${message}`);
    }

    return (
        <View style={styles.Container}>
            <View style={styles.header}>
                <Image source={logoImg} />
                <TouchableOpacity onPress={Back}>
                    <Feather name='arrow-left' size={28} color='#E02048' />
                </TouchableOpacity>
            </View>

            <View style={styles.incident}>
                <Text style={[styles.incidetProperty, { marginTop: 0 }]}>ONG:</Text>
    <Text style={styles.incidetValue}>{incident.name} de {incident.city}/{incident.uf}</Text>

                <Text style={styles.incidetProperty}>Caso:</Text>
                <Text style={styles.incidetValue}>{incident.title}</Text>

                <Text style={styles.incidetProperty}>Valor:</Text>
                <Text style={styles.incidetValue}>{Intl.NumberFormat('pt-br', {
                    style: 'currency',
                    currency: 'BRL'
                })
                    .format(incident.value)}</Text>
            </View>

            <View style={styles.contactBox}>
                <Text style={styles.heroTitle}>Salve o Dia</Text>
                <Text style={styles.heroTitle}>Seja o Herói Desse Caso</Text>

                <Text style={styles.heroDescription}>Entre em Contato</Text>

                <View style={styles.actions}>
                    <TouchableOpacity style={styles.action} onPress={sendWhatsapp}>
                        <Text style={styles.actionText}>Whatsapp</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.action} onPress={sendMail}>
                        <Text style={styles.actionText}>E-mail</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
}