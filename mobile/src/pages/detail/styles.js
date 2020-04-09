import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
    Container: {
        flex: 1,
        paddingHorizontal: 24,
        paddingTop: Constants.statusBarHeight + 20
    },

    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 48
    },

    incident: {
        padding: 24,
        borderRadius: 15,
        backgroundColor: '#FFF',
        marginBottom: 20,
        marginTop: 45
    },

    incidetProperty: {
        fontSize: 14,
        color: '#41414D',
        fontWeight: 'bold',
        marginTop: 24
    },

    incidetValue: {
        marginTop: 8,
        fontSize: 15,
        color: '#737380'
    },

    contactBox: {
        padding: 24,
        borderRadius: 8,
        backgroundColor: '#FFF',
        marginBottom: 20
    },

    heroTitle: {
        fontWeight: 'bold',
        color: '#13131A',
        lineHeight: 30,
        fontSize: 20
    },

    heroDescription: {
        fontSize: 15,
        color: '#737380',
        marginTop: 16
    },

    actions: {
        marginTop: 16,
        flexDirection: 'row',
        justifyContent: 'space-around',

    },

    action: {
        backgroundColor: '#E02041',
        borderRadius: 8,
        height: 50,
        width: '48%',
        justifyContent: 'center',
        alignItems: 'center'
    },

    actionText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#FFF'
    }
});