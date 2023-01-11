import React,{useState} from "react"
import {StyleSheet,
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard,
    FlatList
} from "react-native"
import ResultIMC from "./result";
import styles from "./style";

export default function Form(){
    const [altura, setAltura] = useState(null);
    const [peso, setPeso] = useState(null);
    const [messageimc, setMessageimc] = useState("preecha o Peso e Altura");
    const [imc, setIMC] = useState(null);
    const [textbutton, setTextButton] = useState("Calcular");
    const [errorMens, setErrorMens] = useState(null);
    const [imcList, setImcList] = useState([]);

    function ImcCalculator(){
        let alturaFormat= altura.replace(",",".")
        let totalImc= setIMC((peso/(alturaFormat*alturaFormat)).toFixed(2))
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
        setIMC(totalImc);
    }
    
    function VerificationImc(){
        if(imc === null){
            Vibration.vibrate();
            setErrorMens('Campo Obrigatrio*')
        }
    }

    function validationIMC(){
        if(peso != null && altura !=null){
            ImcCalculator()
            setAltura(null)
            setPeso(null)
            setTextButton("Calcular Novamente")
            setMessageimc("Seu IMC é igual a: ")
            setErrorMens(null)
        }else{
            VerificationImc()
            setIMC(null)
            setTextButton("Calcular")
            setMessageimc("Preecha o Peso e Altura")
        }
       
    }
    
    
    return(   
            <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                    <TextInput
                        style={styles.input} 
                        onChangeText={setAltura}
                        value={altura}
                        placeholder="Ex:0.00" 
                        keyboardType="numeric"/>
                        <Text style={styles.errorMensg}>{errorMens}</Text>                
                        <Text style={styles.formLabel}>Peso</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={setPeso}
                        value={peso}
                        placeholder="Ex:0.00" 
                        keyboardType="numeric"
                        />
                        <Text  style={styles.errorMensg}>{errorMens}</Text>
                <TouchableOpacity
                        style={styles.ButtonCalculator}
                        onPress={()=>validationIMC() }>
                    <Text 
                        style={styles.textbuttonCalculator}>
                        {textbutton}
                    </Text>
                </TouchableOpacity>
                </Pressable>
                    :
                <View style={styles.exibirImc}>
                    <ResultIMC 
                        messageResultIMC={messageimc} 
                        resultimc={imc}/>
                    <TouchableOpacity
                            style={styles.ButtonCalculator}
                            onPress={()=>validationIMC() }>
                        <Text 
                            style={styles.textbuttonCalculator}>
                            {textbutton}
                        </Text>
                    </TouchableOpacity>
                    
                </View>
                }
                <FlatList
                    style={styles.listImcs}
                    data={imcList.reverse()}
                    renderItem={({ item }) => {
                    return (
                        <Text style={styles.resultImcItem}>
                        <Text style={styles.textResultItemList}>Resultado IMC =</Text>
                        {item.imc}
                        </Text>
                    );
                    }}
                    keyExtractor={(item) => {
                    item.id;
                    }}
                />
               
            </View>
    );
}

