import React,{useState, Fragment} from "react";
import SearchableDropDown from "react-native-searchable-dropdown";
const items =[
    {
        id: 1,
        name: 'JavaScript',
    },
    {
        id: 2,
        name: 'Java',
    },
    {
        id: 3,
        name: 'Ruby',
    },
    {
        id: 4,
        name: 'React Native',
    },
    {
        id: 5,
        name: 'PHP',
    },
    {
        id: 6,
        name: 'Python',
    },
    {
        id: 7,
        name: 'Go',
    },
    {
        id: 8,
        name: 'Swift',
    },
]
const Destination = ({navigation}) => {
    const [selectedItem, setSelectedItem] = useState({})
    return (
        <Fragment>
            <SearchableDropDown
                onItemSelect={(item) => {
                    setSelectedItem(item);
                    navigation.navigate('home',{to:item})
                }}
                containerStyle={{ padding: 5 }}
                itemStyle={{
                    padding: 10,
                    marginTop: 2,
                    backgroundColor: '#ddd',
                    borderColor: '#bbb',
                }}
                itemTextStyle={{ color: '#222' }}
                itemsContainerStyle={{ maxHeight: 140 }}
                items={items}
                resetValue={false}
                textInputProps={
                    {
                        placeholder: "Taper le lieu de destination...",
                        underlineColorAndroid: "transparent",
                        style: {
                            padding: 15,
                            borderWidth: 1,
                            borderColor: '#ccc',
                            borderRadius: 5
                        },
                        onTextChange: text => {}
                    }
                }
                listProps={
                    {
                        nestedScrollEnabled: true,
                    }
                }
            />
        </Fragment>
    )
}

export default Destination
