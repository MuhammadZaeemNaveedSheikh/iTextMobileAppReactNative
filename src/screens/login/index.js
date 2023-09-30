import React, { useEffect, useState } from 'react'
import { Button, Input } from '../../components'
import { styles } from "../../styles"
import { Bg, Bgt, ItextKita } from "../../imageSource"
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native'

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
        <View
            style={[styles.container,]}>
            <View style={{ paddingTop: 90, alignItems: "center", position: "absolute", zIndex: 1, width: landScape >= "1000" ? "45%" : "100%" }}>
                <ItextKita />
                <Input user placeholder={"User Name"} width={"75%"} />
                <Input keys keyboardType={"numeric"} secureTextEntry placeholder={"Password"} width={"75%"} />
                <View width="75%">
                    <TouchableOpacity>
                        <Text style={styles.resetP}>
                            Reset Password
                        </Text>
                    </TouchableOpacity>
                </View>
                <Button lable={"Login"} onPress={() => navigation.navigate("campaign")} width={100} height={40} marginTop={44} />
                <Text style={styles.account}>I Don’t Have Account ? <Text style={{ color: "#084A5B" }}>Register</Text>
                </Text>
            </View>
            <LinearGradient
                style={{ width: '100%', flex: 1, position: "relative", zIndex: -1, justifyContent: "flex-end", alignItems: "center" }}
                colors={['#FFFFFF', '#008080']}
                start={{ x: 1, y: 0.6 }}
                end={{ x: 1, y: 1 }}
            >
                {isTablet ?
                    <Bgt style={{ maxWidth: '90%', height: "90%" }} />
                    : <Bg />
                }
                <Text style={[styles.c, { marginTop: isTablet ? 10 : 34, marginBottom: 30, }]}>ⓒ & 2023 NTech Crop.</Text>
            </LinearGradient>
        </View >
    )
}

export default Index

// import React, { useEffect, useState } from 'react'
// import { Button, Input } from '../../components'
// import { styles } from "../../styles"
// import { Bg, Bgt, ItextKita } from "../../imageSource"
// import { View, Text, TouchableOpacity, Dimensions, ImageBackground } from 'react-native'
// import { LinearGradient } from 'expo-linear-gradient';
// import { useNavigation } from '@react-navigation/native'
// import { SvgUri } from 'react-native-svg'

// const Index = () => {
//     const navigation = useNavigation()
//     const [isTablet, setIsTablet] = useState(false);

//     useEffect(() => {
//         const windowWidth = Dimensions.get('window').width;
//         if (windowWidth >= 600) {
//             setIsTablet(true);
//         } else {
//             setIsTablet(false);
//         }
//     }, []);

//     return (
//         <LinearGradient
//             style={[styles.container, { justifyContent: "flex-end", zIndex: 1, paddingTop: 90 }]}
//             colors={['#FFFFFF', '#008080']}
//             start={{ x: 1, y: 0.7 }}
//             end={{ x: 1, y: 1 }}>
//             <View style={[styles.container, { position: "absolute" }]} >
//                 <ItextKita />
//                 <Input user placeholder={"User Name"} width={"75%"} />
//                 <Input keys keyboardType={"numeric"} secureTextEntry placeholder={"Password"} width={"75%"} />
//                 <View width="75%">
//                     <TouchableOpacity>
//                         <Text style={styles.resetP}>
//                             Reset Password
//                         </Text>
//                     </TouchableOpacity>
//                 </View>
//                 <Button lable={"Login"} onPress={() => navigation.navigate("campaign")} width={100} height={40} marginTop={44} />
//                 <Text style={styles.account}>I Don’t Have Account ? <Text style={{ color: "#084A5B" }}>Register</Text>
//                 </Text>
//                 <Text style={styles.c}>ⓒ & 2023 NTech Crop.</Text>
//             </View>
//             <View style={{ position: 'relative', bottom: 0, right: 0, alignItems: "flex-end", backgroundColor: "red", zIndex: 2 }}>
//                 <Bg />
//             </View>

//         </LinearGradient>
//     )
// }

// export default Index
