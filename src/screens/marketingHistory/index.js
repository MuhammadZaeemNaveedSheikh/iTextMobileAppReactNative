import React, { useEffect, useState } from 'react'
import { Header } from '../../components'
import { styles } from "../../styles"
import { Bg, Bgt, Check, Cross, Title } from "../../imageSource"
import { Dimensions, Text, View } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { history, } from '../../config/arrays'
import { TouchableOpacity } from 'react-native'
import { ScrollViewIndicator } from '@fanchenbao/react-native-scroll-indicator'
import { LinearGradient } from 'expo-linear-gradient'

const Index = () => {
    const [isTablet, setIsTablet] = useState(false);
    useEffect(() => {
        const windowWidth = Dimensions.get('window').width;
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
            }}>
                <Title />
                <Header name={"Marketing History"} />
                <TouchableOpacity style={styles.mHistory2}>
                    <Text style={[styles.hlabel, {
                        color: "#FFFFFF99",
                        marginRight: 15,
                    }]}>Date:</Text>
                    <Text style={[styles.hlabel, { color: "#FFFFFF" }]}>
                        28-July-2023</Text>
                </TouchableOpacity>
                <View style={{
                    width: "90%",
                }}>
                    <ScrollViewIndicator indStyle={{ backgroundColor: '#F6851F' }}>
                        {/* <FlatList
                        data={history}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => ( */}
                        {history.map((item, index) => (
                            <TouchableOpacity key={index} style={styles.mHistory}>
                                <Text style={[styles.hlabel, {
                                    // color: "#00000099",
                                    color: "#FFFFFF99",
                                    marginRight: 15,
                                }]}>{item.lablel}</Text>
                                {index === 4 ?
                                    <Check />
                                    : index === 5 ? <Cross /> : <Text style={[styles.hlabel, { color: "#fff" }]}>{item.name}</Text>}
                            </TouchableOpacity>
                        ))}
                        {/* /> */}
                    </ScrollViewIndicator>
                </View>
            </View>

            {isTablet ?
                <LinearGradient
                    style={{ width: '100%', flex: 1, position: "relative", zIndex: -1, justifyContent: "flex-end", alignItems: "center" }}
                    // style={{ width: '100%', flex: 1, justifyContent: "center", alignItems: "center" }}
                    colors={['#FFFFFF', '#008080']}
                    start={{ x: 1, y: 0.6 }}
                    end={{ x: 1, y: 1 }}>
                    <View alignItems="center">
                        <Bgt style={{ bottom: 20, maxWidth: '90%', height: "90%" }} />
                    </View>
                </LinearGradient>
                : null
            }
        </View >
    )
}
export default Index