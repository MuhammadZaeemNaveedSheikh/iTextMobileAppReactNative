import React, { useEffect, useState } from 'react'
import { Button, Header } from '../../components'
import { styles } from "../../styles"
import { Bg, Bgt, ItextKita } from "../../imageSource"
import { Dimensions, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList } from 'react-native-gesture-handler'
import { Names } from '../../config/arrays'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native'
import { ScrollViewIndicator } from '@fanchenbao/react-native-scroll-indicator'

const Index = () => {
    const navigation = useNavigation()
    const [selectedItemIndex, setSelectedItemIndex] = useState(null);
    const [applyBorderToAll, setApplyBorderToAll] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const windowWidth = Dimensions.get('window').width;
        if (windowWidth >= 500) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
        }
    }, []);
    // const renderItem = ({ item, index }) => {
    //     const isSelected = index === selectedItemIndex;
    //     return (
    //         <TouchableOpacity
    //             key={index}
    //             onPress={() => setSelectedItemIndex(index)}
    //             style={[
    //                 styles.nameList,
    //                 selectedItemIndex === index && {
    //                     backgroundColor: "#F6851F",
    //                     color: "#fff"
    //                 },
    //                 applyBorderToAll && {
    //                     backgroundColor: "#F6851F",
    //                     color: "#fff"
    //                     // borderRightWidth: 4,
    //                 },
    //             ]}
    //         >
    //             <Text style={[styles.nameC, selectedItemIndex === index && {
    //                 color: "#fff"
    //             },
    //             applyBorderToAll && {
    //                 color: "#fff"
    //             }]}>{item}</Text>
    //         </TouchableOpacity >
    //     );
    // };
    return (
        <View
            style={[styles.container]}>
            <View style={{
                paddingTop: 46,
                height: "100%",
                alignItems: "center",
                position: "absolute",
                zIndex: 1,
                width: "100%"
            }}>
                <ItextKita />
                <View style={{ marginTop: -50, width: "100%" ,backgroundColor:"red"}}>
                    <Header />
                </View>
                <View style={[styles.customer, { marginTop: 60 }]}>
                    <Text style={styles.customerName}>Customer Name</Text>
                </View>
                <View style={[styles.customerList]}>
                    <ScrollViewIndicator indStyle={{
                        backgroundColor: '#F6851F'
                    }}>{/* <FlatList
                    data={Names}
                    keyExtractor={(item, index) => index.toString()}
                renderItem={renderItem} */}
                        {Names.map((item, index) => (
                            <TouchableOpacity
                                key={index}
                                onPress={() => setSelectedItemIndex(index)}
                                style={[
                                    styles.nameList,
                                    selectedItemIndex === index && {
                                        backgroundColor: "#F6851F",
                                        color: "#fff"
                                    },
                                    applyBorderToAll && {
                                        backgroundColor: "#F6851F",
                                        color: "#fff"
                                        // borderRightWidth: 4,
                                    },
                                ]}
                            >
                                <Text style={[styles.nameC, selectedItemIndex === index && {
                                    color: "#fff"
                                },
                                applyBorderToAll && {
                                    color: "#fff"
                                }]}>{item}</Text>
                            </TouchableOpacity >
                        ))}
                        {/* /> */}
                    </ScrollViewIndicator>

                </View>
                <View style={styles.btnDiv}>
                    <Button lable={"Apply"} onPress={() => navigation.navigate("campaign")
                    } marginHorizontal={20} width={100} height={40} marginTop={44} />
                    <Button lable={"Reset"} onPress={() => {
                        setApplyBorderToAll(false)
                        setSelectedItemIndex(null)
                    }}
                        marginHorizontal={20} width={100} height={40} marginTop={44} />
                    <Button lable={"SelectAll"} onPress={() => setApplyBorderToAll(!applyBorderToAll)} width={132} height={40} marginTop={44} />
                </View>
            </View>
            <LinearGradient
                style={{ width: '100%', flex: 1, position: "relative", zIndex: -1, justifyContent: "flex-end", alignItems: "center" }}
                // style={{ width: '100%', flex: 1, justifyContent: "center", alignItems: "center" }}
                colors={['#FFFFFF', '#008080']}
                start={{ x: 1, y: 0.6 }}
                end={{ x: 1, y: 1 }}
            >
                <View alignItems="center">
                    {isTablet ?
                        <Bgt style={{ bottom: 20, maxWidth: '90%', height: "90%" }} />
                        // <Bgt />
                        :
                        <Bg style={{ bottom: 10, }} />
                    }
                </View>
            </LinearGradient>
        </View >
    )
}
export default Index