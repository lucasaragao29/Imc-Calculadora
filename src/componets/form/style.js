import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"rgb(800,50,100)",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        paddingTop:15,
        marginTop:30,
    },
    form:{
        width:"100%",
        height:"auto",
        marginTop:30,
        padding: 10,   
    },
    formLabel:{
        color:"black",
        fontSize:18,
        paddingLeft:20,
    },
    input:{
        width:"90%",
        height:40,
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        margin:12,
        paddingLeft:10,
    },
    ButtonCalculator:{
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"blue",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        marginTop:30,

    },
    textbuttonCalculator:{
        fontSize:20,
        color:"#ffffff"
    },
    errorMensg:{
        fontSize:12,
        color:"black",
        fontWeight:"bold",
        paddingLeft:20,
    },
    exibirImc:{
        width:"100%",
        height:"50%",
    },
    listImcs:{
   marginTop: 20,
    },
    resultImcItem:{
    fontSize:28,
    color:"black",
    height:50,
    width:"100%",
    paddingRight:20
    },
    textResultItemList:{
    color:"black",
    fontSize:16,
    }

    })

export default styles
