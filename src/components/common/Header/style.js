import { StyleSheet } from 'react-native';
import { config } from '../../../theme/config';

export const styles = StyleSheet.create({
	container:{
        flex:1,
        justifyContent:'center',
        paddingTop:20,
        paddingHorizontal:20,
    },
    formContainer: {
        justifyContent:'center',
        paddingHorizontal:20,
    },
    forgot:{
        marginBottom:40,
    },
    forgotText:{
        textAlign:'right',
        fontSize:config.fsRegular,
        fontFamily: config.latoBold,
        color:config.forgotColor,
        marginBottom:20,
    },
    Section_btm:{
        fontSize:14,
        color:config.colorDark,
    },
    button:{
        alignItems:'center',
        paddingBottom:24,
    },
    headerStyle:{
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center', 
        justifyContent: 'center',
        width:'100%',
        height:50,
        padding: 17,
        position:'relative',
        top: 0,
        zIndex: 9,
        shadowColor: '#000',
       shadowOffset: { width: 0, height: 2 },
       shadowOpacity: 0.8,
       shadowRadius: 2,
       elevation: 1,
    },
});