import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
  Platform,
  FlatList,
  ImageBackground,
  Animated,
  Vibration,
  Orientation
} from 'react-native';
import 'react-native-gesture-handler';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontSizeRatio = screenHeight / 1000;
const viewSizeRatio = screenHeight / 1000;
const imageSizeRation = screenHeight / 1000;
const filterData = [
  { id: 1, name: 'Filter', image: Images.test },
  { id: 2, name: 'Filter', image: Images.test1 },
  { id: 3, name: 'Filter', image: Images.test },
  { id: 4, name: 'Filter', image: Images.test1 },
  { id: 5, name: 'New Construction', image: Images.test },
  { id: 6, name: 'Filter', image: Images.test2 },
  { id: 7, name: 'Filter', image: Images.test },
  { id: 8, name: 'Filter', image: Images.test1 },
  { id: 9, name: 'Filter', image: Images.test },
  { id: 10, name: 'Filter', image: Images.test1 },
  { id: 11, name: 'Filter', image: Images.test2 },
  { id: 12, name: 'Filter', image: Images.test },
  { id: 13, name: 'Filter', image: Images.test2 },
  { id: 14, name: 'Filter', image: Images.test },
];
const ViewPropertiyImage = props => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [adress, setAddres] = useState('');
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);
  const data = props.route.params
  console.log(data.data);
  // useEffect(() => {
  //   Orientation.lockToPortrait();
  //   return () => {
  //     Orientation.unlockAllOrientations();
  //   };
  // }, []);
  const navigation = useNavigation();
  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() => navigation.navigate('ViewImage', { data: data })}
        style={styles.slideOuter}>
        <Image source={{ uri: item.guid }} style={styles.slide}></Image>
      </TouchableOpacity>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ height: '88%', width: '100%' }}>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            alignSelf: 'center',
            justifyContent: 'space-between',
            alignItems: 'center',
            overflow: 'visible',
            zIndex: 99,
            position: 'absolute',
            top: 10,
          }}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              height: 30,
              width: 30,
              borderRadius: 15,
              backgroundColor: Colors.gray,
            }}>
            <Image
              source={Images.close}
              style={{
                height: 15,
                width: 15,
                resizeMode: 'contain',
                tintColor: Colors.black,
                transform: [{ rotate: '90deg' }],
              }}></Image>
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          height: 70,
          marginTop: 10,
          justifyContent: 'center',
          borderTopWidth: 1,
          borderTopColor: Colors.textColorLight,
          alignItems: 'center',
          alignContent: 'center',
        }}>
        <View
          style={{
            justifyContent: 'space-evenly',
            alignItems: 'center',
            alignContent: 'center',
            width: '50%',
            flexDirection: 'row',
          }}>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              alignContent: 'center',
            }}>
            <Image
              source={Images.reviews}
              style={{ height: 25, width: 25, resizeMode: 'contain' }}></Image>
            <Text
              style={{
                fontSize: 14,
                color: Colors.black,
                textAlign: 'center',
                marginLeft: 5,
              }}>
              Rate Property
            </Text>
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.contactUs}
              style={{ height: 25, width: 25, resizeMode: 'contain' }}></Image>
            <Text
              style={{
                fontSize: 14,
                color: Colors.black,
                textAlign: 'center',
                marginLeft: 5,
              }}>
              Call us
            </Text>
          </View>
        </View>
        <View
          style={{
            //justifyContent: 'center',
            //alignItems: 'center',
            width: '50%',
          }}>
          <TouchableOpacity
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row',
              backgroundColor: Colors.primaryBlue,
              borderRadius: 14,
              height: 40,
              width: '80%',
            }}>
            <Image
              source={Images.bookTour}
              style={{ height: 20, width: 20, resizeMode: 'contain' }}></Image>
            <Text
              style={{
                fontSize: 16,
                color: Colors.white,
                textAlign: 'center',
                marginLeft: 5,
              }}>
              Book a tour
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: Colors.white,
  },
  slideOuter: {
    width: screenWidth,
    justifyContent: 'center',

    alignItems: 'center',
    marginTop: 5,
  },
  slide: {
    width: screenWidth,
    height: screenHeight / 4,
    borderRadius: 8,
    alignSelf: 'center',
    justifyContent: 'space-between',
    alignItems: 'center',
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

export default ViewPropertiyImage;
