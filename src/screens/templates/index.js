import React, { useEffect, useState } from 'react'
import { Button, Header } from '../../components'
import { styles } from "../../styles"
import { Bgb, Bgt, Go, Title } from "../../imageSource"
import { Dimensions, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList } from 'react-native-gesture-handler'
import { MarketNamesUrl, } from '../../config/arrays'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScrollViewIndicator } from '@fanchenbao/react-native-scroll-indicator'
import { ScrollView } from 'react-native'

const Index = () => {
    const navigation = useNavigation()
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
        <View style={[styles.container, { paddingTop: 30 }]}>
            <View style={{
                paddingTop: 46,
                height: "100%",
                alignItems: "center",
                position: "absolute",
                zIndex: 1,
                width: "100%"
            }}>
                <Title />
                <Header name={"Templates"} />
                <ScrollView style={{
                    maxHeight: isTablet ? 600 : 400,
                    width: "90%",
                    marginTop: 10,
                }}  >
                    {/* <ScrollViewIndicator indStyle={{
                        backgroundColor: '#F6851F'
                    }}> */}
                        {MarketNamesUrl.map((item, index) => (
                            <TouchableOpacity key={index}>
                                <View style={styles.tempDiv3}>
                                    <Text style={[styles.tempName, { color: "#fff" }]}>{item}</Text>
                                    <Go />
                                </View>
                            </TouchableOpacity>
                        ))}
                    {/* <FlatList
                        data={MarketNamesUrl}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity key={index}                      >
                                <View style={styles.tempDiv3}>
                                    <Text style={styles.tempName}>{item}</Text>
                                    <Go />
                                </View>
                            </TouchableOpacity>

                        )}
                    /> */}
                    {/* </ScrollViewIndicator> */}
                </ScrollView>
                <Button lable={"New Template"} onPress={() => navigation.navigate("onlineMarketing")} width={175} height={40} marginTop={82}  />
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
                        :
                        <Bgb style={{ bottom: 10, }} />
                        // <Bgb />
                    }
                </View>
            </LinearGradient>
        </View >

    )
}
export default Index