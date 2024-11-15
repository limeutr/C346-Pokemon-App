import React from 'react';
import { Image, Text, View, SectionList, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

const styles = StyleSheet.create({
    opacityStyle: {
        padding: 10,

    },
    textContainer: {
        flex: 1,  // Ensures the container takes up available space
        justifyContent: 'center',  // Centers vertically
        alignItems: 'center',  // Centers horizontally
    },
    textStyle: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    headerText: {
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    imageContainer: {
        flex: 1, // Ensures the container takes up available space
        justifyContent: 'center', // Centers the image vertically
        alignItems: 'center', // Centers the image horizontally
    },
    img: {
        width: 200, // Set desired width
        height: 200, // Set desired height
        resizeMode: 'contain', // Ensures the image scales proportionally
    },

    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        backgroundColor:'#dedede',
        paddingTop:40,
        paddingBottom:40,
        borderWidth:1
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15,
        paddingHorizontal: 20,
        backgroundColor: '#66aede'
    },
});

const datasource = [
    {
        data: [
            { key: 'Clefairy', img: require('./img/SV3pt5_EN_35.png') },
            { key: 'Clefable', img: require('./img/SV3pt5_EN_36.png') },
        ],
        title: '🧚Fairy', textcolor: '#ad5783',
        bgColor: 'pink',
    },
    {
        data: [
            { key: 'Vulpix', img: require('./img/SV3pt5_EN_37.png') },
            { key: 'Ninetales', img: require('./img/SV3pt5_EN_38.png') },
        ],
        title: '🔥Fire', textcolor: '#ed5151',
        bgColor: 'orange',
    },
    {
        data: [
            { key: 'Oddish', img: require('./img/SV3pt5_EN_43.png') },
            { key: 'Gloom', img: require('./img/SV3pt5_EN_44.png') },
        ],
        title: '🍀Leaf', textcolor:'#93d687',
        bgColor: 'green',
    },

];
const renderItem = ({ item }) => (
    <View style={[styles.item]}>
        {/* Text Section */}
        <View style={styles.textContainer}>
            <TouchableOpacity style={styles.opacityStyle}>
                <Text style={styles.textStyle}>{item.key}</Text>
            </TouchableOpacity>
        </View>

        {/* Image Section */}
        <View style={styles.imageContainer}>
            <Image source={item.img} style={styles.img} />
        </View>
    </View>
);



const renderSectionHeader = ({ section: { title, bgColor, textcolor } }) => (
    <View style={{ borderWidth:1,backgroundColor: bgColor }}>
        <Text style={[styles.headerText, {color:textcolor}]}>{title}</Text>
    </View>
);

const App = () => (
    <View style={{flex:1, paddingBottom:60, paddingLeft:20, paddingRight:20}}>
        <StatusBar hidden={true} />
        <TouchableOpacity style={styles.button}>
            <Text style={{color:'white'}}> ADD POKEMON</Text>
        </TouchableOpacity>
        <SectionList
            sections={datasource}
            renderItem={renderItem}
            renderSectionHeader={renderSectionHeader}
            keyExtractor={(item, index) => item.key + index}
        />
    </View>
);

export default App;
