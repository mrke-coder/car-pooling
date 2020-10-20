import React, {useState} from "react";
import {StyleSheet, View, Image, TouchableOpacity} from "react-native";
import {Card,Title, Button} from "react-native-paper";
import { Ionicons, FontAwesome } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from "moment";

const Home = ({navigation, route}) => {
  let depart = ''; let destination =''; let seat = "";
  let routeData = route.params;
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(null);
  if (typeof routeData == 'undefined') {
    depart = 'Départ';
    destination = 'Destination';
    seat = 'Passagers';
  }
  else {
    routeData.from ? depart = routeData.from.name : depart = 'Départ';
    routeData.to ? destination = routeData.to.name : destination = 'Destination';
    routeData.seat ? seat = routeData.seat+' Passager(s)' : seat = 'Passagers';
  }

    const show = () => {
        setVisible(true);
    };

    const hide = () => {
        setVisible(false);
    };

    const handleConfirm = (value) => {
       // console.warn('Une date a été choisie :', date)
        let now = moment(new Date()).format('DD/MM/YYYY');
        let _value = moment(value).format('DD/MM/YYYY');
        if ( now === _value){
            setDate('Aujourd\'hui');
        } else if (moment(new Date()).add(1,'days').format('DD/MM/YYYY') === _value){
            setDate('Demain')
        }else {
            setDate(moment(value).format('DD/MM/YYYY'))
        }
        hide();
    };

    const onSearch = ()=>{
        navigation.navigate('Search-List',{depart: depart,destination:destination,date:date,seat:seat})
    };

    return (
        <View>
            <View>
                <Image source={require('../../../assets/banner.png')} style={styles.banner} resizeMode="cover"/>
                <View style={{width:'90%',marginLeft: '5%',marginRight: '5%',marginTop: -270,}}>
                    <Title style={styles.title}>
                        Choisissez le voyage qui vous plaît
                    </Title>
                </View>
                <Card style={styles.card}>
                    <Card.Content>
                        <TouchableOpacity style={styles.textField} onPress={() => navigation.navigate('Depart')}>
                            <FontAwesome name="circle" size={20} color="rgb(112, 140, 145)" />
                            <Title style={styles.title2}>{depart}</Title>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.textField} onPress={() => navigation.navigate('Destination')}>
                            <FontAwesome name="circle" size={20} color="rgb(112, 140, 145)" />
                            <Title style={styles.title2}>{destination}</Title>
                        </TouchableOpacity>

                        <View style={styles.twoTextFields} disabled>
                            <TouchableOpacity onPress={show} style={[{width:'50%'},styles.textField]}>
                                <FontAwesome name="calendar" size={20} color="rgb(112, 140, 145)" />
                                <Title style={styles.title2}>{date ? date : 'Date'}</Title>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => navigation.navigate('Nombre-Place')} style={[{width:'50%',borderLeft:1, borderLeftWidth:1, borderColor:'lightgrey'},styles.textField]}>
                                <FontAwesome name="wheelchair" size={20} color="rgb(112, 140, 145)" />
                                <Title style={styles.title2}>{seat}</Title>
                            </TouchableOpacity>
                        </View>

                        <TouchableOpacity onPress={onSearch} style={styles.btnSearch}>
                            <FontAwesome name="search" size={24} color="black" style={{textAlign: 'center',color:'white'}} />
                        </TouchableOpacity>
                    </Card.Content>
                </Card>
            </View>
            <View>
                <DateTimePickerModal
                    isVisible={visible}
                    mode="date"
                    onConfirm={handleConfirm}
                    onCancel={hide}
                    locale="fr_FR"
                />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    banner: {
          width:"100%",
          height: 300
          },
    card: {
        width: '90%',
        height: 'auto',
        marginRight:'5%',
        marginLeft:'5%',
        marginTop: 100,
        backgroundColor: '#ffffff',
    },
    title:{
        textAlign: 'center',
        color:'white',
        fontSize:32,
        marginBottom: 15,
        fontWeight:'bold',
        lineHeight:32
    },
    twoTextFields:{
      flexDirection:'row',
      width:"100%",
    },
    textField:{
        flexDirection: 'row',
        backgroundColor:'#ffffff',
        paddingTop: 15,
        paddingBottom:15,
        paddingLeft:5,
    },
    title2:{
        fontSize: 20,
        color: 'rgb(5, 71, 82)',
        paddingLeft: 5
    },
    btnSearch:{
        marginTop: 10,
        paddingBottom: 10,
        paddingTop: 10,
        justifyContent:'center',
        backgroundColor:'rgb(0, 175, 245)',
        borderRadius: 30
    }
})

export default Home;
