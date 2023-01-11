import React from "react"
import {View,
        Text,
        TouchableOpacity,
        Share
    } from "react-native"
import styles from "./style"


export default function ResultIMC(props){
    const onShare = async ()=> {
        const result = await Share.share({
            message:"Meu imc hoje é: " + props.resultimc,
        })
    }
    
    return(
        <View style={styles.ResultImc}>
            <Text style={styles.information}>{props.messageResultIMC}</Text>
            <Text style={styles.numberImc}>{props.resultimc}</Text>
            <View style={styles.boxsharebttn}> 
                    <TouchableOpacity
                    onPress={onShare}
                    style={styles.shared}>
                    <Text style={styles.textshared}>Compartilhar</Text>
                </TouchableOpacity> 
            </View>
        </View>
    );
}