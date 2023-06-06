import React, {useState, useEffect, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
  FlatList,
  TextInput,
  ScrollView,
} from 'react-native';
import 'react-native-gesture-handler';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
// import Orientation from 'react-native-orientation-locker';
import Styles from './Styles';
import {useNavigation} from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontSizeRatio = screenHeight / 1000;
const viewSizeRatio = screenHeight / 1000;
const imageSizeRation = screenHeight / 1000;

const images = [
  {
    image: Images.favroites,
    title: '',
    navigation: 'ContactMyAgent',
  },
  {
    image: Images.savedSearch,
    title: 'Saved Searches',
    navigation: 'SavedSearches',
  },
  {
    image: Images.inbox,
    title: 'Conversations',
    navigation: 'Conversations',
  },
  {
    image: Images.contactAgent,
    title: 'Contact My Agent',
    navigation: 'ContactMyAgent',
  },
  {
    image: Images.makeOffer,
    title: 'Make An Offer',
    navigation: 'MakeAnOffer',
  },
  {
    image: Images.reward,
    title: 'My Rewards',
    navigation: 'MyRewards',
  },
  {
    image: Images.recycleBin,
    title: 'Recycle Bin',
    navigation: 'RecycleBin',
  },
];

const ContactMyAgent = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [adress, setAddres] = useState('');
  const [index, setIndex] = useState(true);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  // useEffect(() => {
  //   Orientation.lockToPortrait();
  //   return () => {
  //     Orientation.unlockAllOrientations();
  //   };
  // }, []);

  const renderItem = ({item}) => (
    <View style={styles.slideOuter}>
      <TouchableOpacity
        onPress={() => navigation.navigate(item.navigation)}
        style={{
          width: '100%',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            height: 60,
            alignItems: 'center',
          }}>
          <Image
            source={item.image}
            style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
          <Text
            style={{
              fontSize: 20,
              color: Colors.textColorLight,
              marginLeft: 20,
            }}>
            {item.title}
          </Text>
        </View>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: Colors.BorderColor,
          }}></View>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '80%',
          height: 60,
          justifyContent: 'center',
          alignSelf: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 20, color: Colors.black}}>
          Contact My Agent
        </Text>
      </View>
      <View
        style={{
          height: 70,
          width: '70%',
          alignSelf: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          {!index ? (
            <Image
              source={Images.search}
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
              }}></Image>
          ) : (
            <View
              style={{
                height: 40,
                width: 40,
                borderRadius: 20,
                backgroundColor: Colors.primaryBlue,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 22, color: Colors.white}}>JD</Text>
            </View>
          )}
        </TouchableOpacity>

        <Text style={{fontSize: 24, color: Colors.black, marginLeft: 10}}>
          Jhon Doe
        </Text>
      </View>
      <ScrollView style={{height: '100%', width: '100%'}}>
        <View style={styles.slideOuter}>
          <TouchableOpacity
            //onPress={() => navigation.navigate(item.navigation)}
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                height: 60,
                alignItems: 'center',
              }}>
              <Image
                source={Images.call}
                style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>

              <Text
                style={{
                  fontSize: 18,
                  color: Colors.textColorLight,
                  marginLeft: 20,
                }}>
                9845217030
              </Text>
            </View>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: Colors.BorderColor,
              }}></View>
          </TouchableOpacity>
        </View>

        <View style={styles.slideOuter}>
          <TouchableOpacity
            //onPress={() => navigation.navigate(item.navigation)}
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                height: 60,
                alignItems: 'center',
              }}>
              <Image
                source={Images.agentTel}
                style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>

              <Text
                style={{
                  fontSize: 18,
                  color: Colors.textColorLight,
                  marginLeft: 20,
                }}>
                jhondoe@surfloakl.com
              </Text>
            </View>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: Colors.BorderColor,
              }}></View>
          </TouchableOpacity>
        </View>

        <View style={styles.slideOuter}>
          <TouchableOpacity
            //onPress={() => navigation.navigate(item.navigation)}
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                height: 60,
                alignItems: 'center',
              }}>
              <Image
                source={Images.agentInsta}
                style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>

              <Text
                style={{
                  fontSize: 18,
                  color: Colors.textColorLight,
                  marginLeft: 20,
                }}>
                @jhondoeeditor
              </Text>
            </View>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: Colors.BorderColor,
              }}></View>
          </TouchableOpacity>
        </View>

        <View style={styles.slideOuter}>
          <TouchableOpacity
            //onPress={() => navigation.navigate(item.navigation)}
            style={{
              width: '100%',
              alignItems: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                width: '80%',
                height: 60,
                alignItems: 'center',
              }}>
              <Image
                source={Images.agentVideo}
                style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>

              <Text
                style={{
                  fontSize: 18,
                  color: Colors.textColorLight,
                  marginLeft: 20,
                }}>
                jhon.smith@icloud.com
              </Text>
            </View>
            <View
              style={{
                height: 1,
                width: '100%',
                backgroundColor: Colors.BorderColor,
              }}></View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            marginTop: 10,
            alignItems: 'center',
            alignSelf: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.textColorLight,
            }}>
            Quick Inquiry
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            marginTop: 10,
            height: 35,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black, fontSize: 12}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Propertity Address'}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => console.log(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '80%',
            marginTop: 20,
            height: 150,
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
            alignItems: 'flex-start',
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black, fontSize: 12}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Message'}
            keyboardType="default"
            returnKeyType="done"
            multiline={true}
            onChangeText={text => console.log(text)}
          />
        </View>
        <TouchableOpacity
          style={{
            height: 30,
            borderRadius: 8,
            width: 100,
            marginTop: 10,
            marginRight: '10%',
            backgroundColor: Colors.primaryBlue,
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'flex-end',
            flexDirection: 'row',
          }}>
          <Image
            source={Images.lokal}
            resizeMode="contain"
            style={{height: 15, width: 15, tintColor: Colors.white}}></Image>
          <Text style={{fontSize: 16, fontWeight: '400', color: Colors.white}}>
            Send
          </Text>
        </TouchableOpacity>
        <View style={{height: 50}}></View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  slideOuter: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors,
    borderRadius: 18,
  },
  slide: {
    width: screenWidth - 40,
    height: screenHeight / 3,
    borderRadius: 18,
    margin: 20,
    justifyContent: 'space-between',
    alignItems: 'center',
    resizeMode: 'contain',
    flexDirection: 'row',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    padding: 10,
    backgroundColor: 'blue',
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  pagination: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    flexDirection: 'row',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'gray',
    marginHorizontal: 5,
  },
  paginationDotActive: {
    backgroundColor: 'blue',
  },
  //fliter
  filter: {
    height: 60,
  },
});

export default ContactMyAgent;
