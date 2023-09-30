import React, { useEffect, useState } from 'react';
import { Button, Dropdown, Header, Input } from '../../components';
import { styles } from '../../styles';
import { Bg, Bgb, Bgt, Title } from '../../imageSource';
import { View, Text, TouchableOpacity, Modal, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { MarketNamesUrl } from '../../config/arrays';
import Icon from 'react-native-vector-icons/FontAwesome';
import { ScrollViewIndicator } from '@fanchenbao/react-native-scroll-indicator';


const Index = () => {
    const navigation = useNavigation();
    const [modalOpen, setModalOpen] = useState(false);
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;
    const [isTablet, setIsTablet] = useState(false);
    const responsiveStyles = {
        container: {
            // paddingTop: windowHeight * 0.03,
        },
        modalView: {
            height: 426,
            paddingHorizontal: -windowWidth * 0.1,
        },
        sendDiv: {
            width: windowWidth * 0.90,
        },
        button: {
            width: windowWidth * 0.3,
            height: windowHeight * 0.06,
        },

    };
    useEffect(() => {
        const windowWidth = Dimensions.get('window').width;
        if (windowWidth >= 500) {
            setIsTablet(true);
        } else {
            setIsTablet(false);
        }
    }, []);
    return (
        <View style={[styles.container]}>
            <View style={{
                paddingTop: 30,
                height: "100%",
                alignItems: "center",
                position: "absolute",
                zIndex: 1,
                width: "100%"
            }}>
                <Title />
                {modalOpen ? <View style={styles.backdrop}></View> : null}
                <Modal animationType="slide" transparent={true} visible={modalOpen}>
                    <View style={styles.centeredView}>
                        <View style={[styles.modalView, responsiveStyles.modalView]}>
                            <Button
                                lable={'Confirm'}
                                onPress={() => setModalOpen(!modalOpen)}
                                style={[styles.button, responsiveStyles.button]}
                            />
                        </View>
                    </View>
                </Modal>
                <Header name={'Campaign'} />
                <View style={[styles.customer, { marginTop: 5 }]}>
                    <Text style={styles.customerName}>Title</Text>
                </View>
                <Input
                    placeholder="Hello David, We are launching our new product called “Isaw ng Manok” and we would like to invited you to join us in our launching day with free entrance! See out poster @ https://testing.com/page"
                    backgroundColor={'#D9D9D9'}
                    // multiline={true}
                    borderTopStartRadius={35}
                    borderBottomEndRadius={35}
                    numberOfLines={20}
                    fontSize={18}
                    marginBottom={-10}
                    marginTop={-10}
                    height={'33%'}
                    width={'90%'}
                />
                <TouchableOpacity
                    onPress={() => navigation.navigate('customerName')}
                    style={[styles.customer, styles.sendDiv, ]}
                >
                    <Text style={[styles.customerName]}>Select Customer</Text>
                    <View style={styles.sendName}>
                        {/* <Send /> */}
                        <Icon
                            name="send"
                            size={20}
                            color="#1e8ffe"
                        />

                    </View>
                </TouchableOpacity>
                <View width="90%">
                    <Dropdown
                        marginTop={10}
                        backgroundColor="#084A5B"
                        placeholder={'Select Template'}
                        pcolor={'#fff'}
                        
                        data={MarketNamesUrl}
                    />
                </View>
            <Button
                lable={'Send'}
                onPress={() => setModalOpen(!modalOpen)}
                style={{ marginTop: -20}} 
                />
            </View>
            <LinearGradient
                style={{ width: '100%', flex: 1, position: "relative", zIndex: -1, justifyContent: "flex-end", alignItems: "center" }}
                colors={['#FFFFFF', '#008080']}
                start={{ x: 1, y: 0.6}}
                end={{ x: 1, y: 1 }}
            >
                <View alignItems="center">
                    {isTablet ?
                        <Bgt style={[styles.bgImage, { bottom: 20, maxWidth: '90%', height: "90%" }]} />
                        :
                        <Bgb style={[styles.bgImage, { bottom: 10, }]} />
                    }
                </View>
            </LinearGradient>
        </View >

    );
};

export default Index;
