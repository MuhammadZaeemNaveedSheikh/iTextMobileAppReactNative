import React, { useEffect, useState } from 'react'
import { Button, Dropdown, Header, Input } from '../../components'
import { styles } from "../../styles"
import { Bg, Bgb, Bgt, Folder, Title } from "../../imageSource"
import { Dimensions, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList } from 'react-native-gesture-handler'
import { Buy, Stores, } from '../../config/arrays'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScrollViewIndicator } from '@fanchenbao/react-native-scroll-indicator'
import { Modal } from 'react-native'

const Index = () => {
    const navigation = useNavigation()
    const [modalOpen, setModalOpen] = useState(false)
    const [modalOpen1, setModalOpen1] = useState(false)
    const [modalOpen2, setModalOpen2] = useState(false)
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
                <Header name={"Profile"} />
                {modalOpen ? <View style={styles.backdrop}></View>
                    : modalOpen1 === true ? <View style={styles.backdrop}></View> :
                        modalOpen2 === true ?
                            <View style={styles.backdrop}></View>
                            : null
                }
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalOpen2}>
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView, { paddingHorizontal: -25 }]}>
                            <View style={[styles.rowDiv2, { marginTop: -40 }]}>
                                <Button lable={"Available credits:  2122.00"}
                                    backgroundColor={"#fff"} fontFamily={"Poppins-Regular"} color={"#084A5B"} fontSize={18} width={260} height={50}
                                />
                                <Button lable={"BUY"} backgroundColor={"#ffec00"} color={"#084A5B"} width={64} height={36} />
                            </View>
                            <View style={styles.rowDiv2}>
                                <Button lable={"Add New User"} onPress={() => setModalOpen(true)} width={152} height={40} marginTop={12} />
                                <Button lable={"Add New Store"} onPress={() => setModalOpen1(true)} width={152} height={40} marginTop={12} />
                            </View>
                            <Button lable={"Store Names"} marginTop={12} elevation={0} backgroundColor={"#084A5B"} fontSize={18} fontWeight={"400"} width={"90%"} height={50} />

                            <View style={styles.storeList2}>
                                {/* <FlatList
                                data={Buy}
                                keyExtractor={(item, key) => item.id}
                                renderItem={({ item }) => ( */}
                                {Buy.map((item, index) => (
                                    <TouchableOpacity key={index} style={styles.tempDiv2}>
                                        <View style={[styles.rowDiv, { flexDirection: "row" }]}>
                                            <View style={styles.storedot}>
                                            </View>
                                            <Text style={styles.nameC}>{item}</Text>
                                        </View>
                                    </TouchableOpacity>
                                ))}
                                {/* /> */}
                            </View>
                            <Button lable={"Add"} onPress={() => setModalOpen2(false)} width={152} height={40} marginTop={10} />
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalOpen1}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.newUser} width={"100%"} >
                                <Text style={[styles.newUText]}>
                                    New Store
                                </Text>
                            </View>
                            <Input placeholderTextColor={"#084A5B"} backgroundColor={"#DEDEDE"} placeholder={'Business Name'} width={'100%'} marginTop={-5} />
                            <Input placeholderTextColor={"#084A5B"} backgroundColor={"#DEDEDE"} placeholder={'Sender ID'} width={'100%'} marginTop={-5} />
                            <Input placeholderTextColor={"#084A5B"} backgroundColor={"#DEDEDE"} placeholder={'Sender ID'} width={'100%'} marginTop={-5} />
                            <View style={[styles.newUser2]}>
                                <Text style={[styles.nameC, { color: "#084A5B" }]}>DTI</Text>
                                <Folder />
                            </View>
                            <Button lable={"Add"} onPress={() => {
                                setModalOpen1(false)
                            }
                            } width={120} height={40} marginTop={20} />
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalOpen}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={styles.newUser} width={"100%"} >
                                <Text style={styles.newUText}>
                                    New User Registration                            </Text>
                            </View>
                            <Dropdown />
                            <Input backgroundColor={"#DEDEDE"} placeholder={'Name'} width={'100%'} marginTop={-5} />
                            <Input backgroundColor={"#DEDEDE"} placeholder={'+63 9 Number'} width={'100%'} marginTop={-5} />
                            <Dropdown />
                            <Button lable={"Register"} onPress={() => setModalOpen(false)} width={120} height={40} marginTop={20} />
                        </View>
                    </View>
                </Modal>
                <View style={[styles.rowDiv2, { width: isTablet ? "85%" : "90%", marginTop: -26 }]}>
                    <Button lable={"Available credits:  2122.00"} backgroundColor={"#084A5B"} fontWeight={"400"} fontSize={18} width={260} height={50} />
                    <Button lable={"BUY"} onPress={() => setModalOpen2(true)} backgroundColor={"#ffec00"} color={"#084A5B"} width={64} height={36} />
                </View>

                <View style={[styles.rowDiv2, { width: isTablet ? "85%" : "90%" }]} >
                    <Button lable={"Add New User"} onPress={() => setModalOpen(true)} width={152} height={40} marginTop={12} />
                    <Button lable={"Add New Store"} onPress={() => setModalOpen1(true)} width={152} height={40} marginTop={12} />
                </View>
                <Button lable={"Store Names"} backgroundColor={"#084A5B"} fontSize={18} fontWeight={"400"} width={isTablet ? "85%" : "90%"} height={50} marginTop={12} />
                <View style={[styles.storeList]}>
                    {/* <ScrollViewIndicator indStyle={{ backgroundColor: '#F6851F' }}> */}
                    {/* <FlatList
                    data={Stores}
                    keyExtractor={(item, key) => item.id}
                    renderItem={({ item }) => ( */}
                    {Stores.map((item, index) => (
                        <TouchableOpacity key={index} style={styles.tempDiv} onPress={() => setModalOpen2(true)}>
                            <View style={[styles.rowDiv, { flexDirection: "row" }]}>
                                <View style={styles.storedot}>
                                </View>
                                <Text style={styles.nameC}>Store Name</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                    {/* /> */}
                    {/* </ScrollViewIndicator> */}
                </View>
                <Button lable={modalOpen ? "Add New User" : modalOpen1 || modalOpen2 ? "Add New Store" : "Logout"} onPress={() => navigation.navigate("home")} marginTop={10} width={modalOpen || modalOpen1 || modalOpen2 ? 152 : 120} height={40} />

            </View>
            <View style={{ flex: 1, width: "100%", justifyContent: 'center', alignItems: 'center' }}>
                {/* <LinearGradient
                    style={{ position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center" }}
                    colors={['#FFFFFF', '#008080']}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 1, y: 1 }}
                />
                <View alignItems="center" >
                    {isTablet ?
                        <Bgt />
                        : <Bgb />
                    }
                </View> */}
                <LinearGradient
                    style={{ width: '100%', flex: 1, position: "relative", zIndex: -1, justifyContent: "flex-end", alignItems: "center" }}
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
            </View>
        </View >
    )
}
export default Index