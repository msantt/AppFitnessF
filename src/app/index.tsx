import { title } from 'process'
import {View, Text, StyleSheet} from 'react-native'

export default function Index(){
    return(
        <View style = {styles.conteiner}>
            <Text style = {styles.tittle}>
               Informação text, em breve, um front fechado e bem desenvolvido
            </Text>
        </View>


    )
}

const styles = StyleSheet.create({
    conteiner:{
        flex: 1,
        padding: 32,
        justifyContent: "center"
    },
    tittle:{
        color: "blue",
        fontSize: 24,
        fontWeight: "bold"
    }
})