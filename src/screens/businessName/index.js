import React, { useEffect, useState } from 'react'
import { Button, Header, Input } from '../../components'
import { styles } from "../../styles"
import { Bg2, Bg3, Man, Title, Want } from "../../imageSource"
import { View, } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Image } from 'react-native'
import { Dimensions } from 'react-native'

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
        <View style={[styles.container]}  >
            <View style={{
                paddingTop: 46,
                height: "100%",
                alignItems: "center",
                position: "absolute",
                zIndex: 1,
                width: "100%"
            }}>
                <Title />
                <Header name={"BUSINESS NAME"} />
                <View style={{
                    display: "flex",
                    justifyContent: "center",
                }}>

                    <View style={{
                        width: landScape >= "1000" ? "50%" : "100%", marginTop: landScape >= "1000" ? 0 : landScape >= "500" ? 200 : 0
                    }} >
                        <Input user placeholder={'Name'} width={'75%'} />
                        <Input phone placeholder={'+63 9 Number'} width={'75%'} marginTop={10} />
                    </View>
                </View>
                <Want style={{ marginTop: 21 }} />
                <View width="80%" alignItems={isTablet ? "center" : "flex-start"} >
                    <Button lable={'Subscribe'} onPress={() => navigation.navigate("marketingHistory")}
                        marginHorizontal={20} width={160} height={40} marginTop={21} />
                </View>
            </View>
            <View style={{ paddingTop: 40, flex: 1, width: "100%", justifyContent: 'flex-end' }}>
                {isTablet ? (
                    <View style={{ position: "relative", width: "100%", alignItems: 'flex-end', justifyContent: 'flex-end' }}>
                        <View style={{
                            width: "100%",
                            position: 'relative',
                            flexDirection: "row"
                        }}>
                            <Bg3 style={{ with: '100%' }} />
                            <Bg3 style={{ with: '100%' }} />

                        </View>
                        <View style={{
                            alignItems: "flex-end",
                            position: 'absolute',
                        }}>
                            <Man style={{ right: -10, top: -30, width: '100%', height: "100%", }} />
                        </View>
                    </View>
                ) : (
                    <Image source={Bg2} style={{ width: '100%', height: undefined, aspectRatio: 0.73 }} />
                )}
            </View>
        </View >
    );
};
export default Index