import React, {useState} from "react";
import NumericInput from "react-native-numeric-input";
import {StyleSheet, View} from "react-native";
import {Button} from "react-native-paper";

const Seat = ({navigation}) => {
    const [seatValue, setSeatValue] = useState(1);
    return (
        <View style={styles.container}>
            <NumericInput
                value={seatValue}
                onChange={value => setSeatValue(value)}
                onLimitReached={(isMax,msg) => console.log(isMax,msg)}
                totalWidth={400}
                totalHeight={50}
                iconSize={25}
                step={1}
                valueType='integer'
                minValue={1}
                maxValue={10}
                rounded
                editable={false}
                textColor='rgb(5, 71, 82)'
                iconStyle={{ color: 'white' }}
                rightButtonBackgroundColor='rgb(0, 175, 245)'
                leftButtonBackgroundColor='rgb(0, 175, 245)'/>
            <Button style={styles.button} mode="contained" onPress={() => navigation.navigate('home',{seat:seatValue})}>
                Continuer
            </Button>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center',
        alignItems:'center'
    },
    button:{
        marginTop:15,
        padding:10
    }
})
export default Seat
