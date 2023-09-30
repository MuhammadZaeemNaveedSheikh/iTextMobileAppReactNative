import React, { useEffect, useState } from 'react'
import { Button, Header } from '../../components'
import { styles } from "../../styles"
import { Bgb, Bgt, Folder, Title } from "../../imageSource"
import { Dimensions, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList } from 'react-native-gesture-handler'
import { MarketNames, } from '../../config/arrays'
import { useNavigation } from '@react-navigation/native'
import { ScrollViewIndicator } from '@fanchenbao/react-native-scroll-indicator'

const Index = () => {
    const navigation = useNavigation()
    const [isTablet, setIsTablet] = useState(false);
    const [landScape, setlandScape] = useState("");

    useEffect(() => {
        const windowWidth = Dimensions.get('window').width;
        setlandScape(windowWidth)
        if (windowWidth >= 600) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
        }
    }, []);
    return (
        <View style={[styles.container]}>
            <View style={{
                paddingTop: 46,
                maxHeight: isTablet ? "86%" : "75%",
                alignItems: "center",
                position: "absolute",
                zIndex: 1,
                width: "100%"
            }}>
                <Title />
                <Header name={"Online Marketing"} />
                <View style={{
                    // maxHeight: isTablet ? null : 420,
                    width: "90%",
                    height: landScape >= "1000px" ? "50%" : "61%",
                    marginTop: 10,
                    backgroundColor: "#F2F0F0",
                    borderRadius: 10,
                    paddingHorizontal: 10,
                }} >
                    <ScrollViewIndicator indStyle={{ backgroundColor: '#F6851F' }}>
                        {/* <FlatList
                        data={MarketNames}
                        keyExtractor={(item, index) => index.toString()}
                        renderItem={({ item, index }) => ( */}
                        {MarketNames.map((item, index) => (
                            <View key={index} style={[styles.onlineDiv, { flexDirection: "row", justifyContent: "space-between", alignItems: "center" }]}>
                                <Text style={styles.onlineM}>{item}</Text>
                                {index === 0 ? <Folder />
                                    : null}
                            </View>
                        ))}
                    </ScrollViewIndicator>
                </View>
                <Button lable={"Save"} onPress={() => navigation.navigate("templates")} width={100} height={40} />
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