import React, { useEffect, useState } from 'react'
import { Header } from '../../components'
import { styles } from "../../styles"
import { Bgt, Down, Sms, Thumb, Title } from "../../imageSource"
import { Dimensions, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { smsHistory, } from '../../config/arrays'
import { TouchableOpacity } from 'react-native'
import { ScrollView } from 'react-native'
import { ScrollViewIndicator } from '@fanchenbao/react-native-scroll-indicator'
import { LinearGradient } from 'expo-linear-gradient'
const Index = () => {
    const [open, setOpen] = useState(false)
    const [isTablet, setIsTablet] = useState(false);
    const [landScape, setlandScape] = useState("");


    useEffect(() => {
        const windowWidth = Dimensions.get('window').width;
        setlandScape(windowWidth)
        if (windowWidth >= 500) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
        }
    }, []);
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
            }}><Title />
                <Header name={"RECENT SMS STATUS"} />
                <View marginTop={20}>
                    <Sms />
                </View>
                <View style={[styles.smsDiv, {
                    height: landScape >= "1000px" ? "40%" : "100%",
                    width: isTablet ? "80%" : "100%",
                    backgroundColor: isTablet ? "transparent" : "#D9D9D9",  }]}>
                    <ScrollViewIndicator indStyle={{ backgroundColor: '#F6851F' }}>
                        {/* <FlatList
                        data={smsHistory}
                        keyExtractor={(item, key) => item.id}
                        renderItem={({ item, index }) => ( */}
                        {smsHistory.map((item, index) => (
                            <TouchableOpacity key={index} style={{ width: "100%", justifyContent: "center", alignItems: "center" }}>
                                <View style={[styles.smsHistory]}>
                                    <Text style={[styles.nameC, { color: "#fff" }]}>{item}</Text>
                                    <View flexDirection="row" alignItems="center" >
                                        <Thumb style={{ marginRight: 10, }} />
                                        <Down onPress={() => setOpen(!open)} />
                                    </View>
                                </View>
                                {open ?
                                    <View style={{
                                        backgroundColor: !isTablet ? "transparent" : "#D9D9D9",
                                        width: "90%", alignItems: "center", justifyContent: "center"
                                    }}>
                                        <View width={"70%"} >
                                            <Text style={[styles.tempName, { textAlign: "center", color: "#000000" }]}>  Saturday, August 05 2006
                                                Use Messages for web to send SMS, MMS.</Text>
                                        </View>
                                    </View>
                                    : null
                                }
                            </TouchableOpacity>
                        ))}
                        {/* /> */}
                    </ScrollViewIndicator>
                </View>
            </View>

            {
                isTablet ?

                    <LinearGradient
                        style={{ width: '100%', flex: 1, position: "relative", zIndex: -1, justifyContent: "flex-end", alignItems: "center" }}
                        // style={{ width: '100%', flex: 1, justifyContent: "center", alignItems: "center" }}
                        colors={['#FFFFFF', '#008080']}
                        start={{ x: 1, y: 0.6 }}
                        end={{ x: 1, y: 1 }}>
                        <Bgt style={{ bottom: 20, maxWidth: '90%', height: "90%" }} />
                    </LinearGradient>
                    : null
            }
        </View >
    )
}
export default Index