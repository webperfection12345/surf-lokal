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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontSizeRatio = screenHeight / 1000;
const viewSizeRatio = screenHeight / 1000;
const imageSizeRation = screenHeight / 1000;

const images = [
  {
    image: Images.favroites,
    title: '',
    navigation: 'MakeAnOffer',
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
    navigation: 'MakeAnOffer',
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

const MakeAnOffer = () => {
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
        <Text style={{fontSize: 20, color: Colors.black}}>Make An Offer</Text>
      </View>

      <KeyboardAwareScrollView style={{height: '100%', width: '100%'}}>
        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            marginTop: 20,
            alignItems: 'center',

            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              color: Colors.textColorLight,
              textAlign: 'center',
            }}>
            All fields below are required
          </Text>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 30,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
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
            width: '90%',
            marginTop: 20,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Propertity Price Offer'}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => console.log(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Cash or Conventional Loan'}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => console.log(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Preferred Closing Date'}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => console.log(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Full Legal Name'}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => console.log(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Current Address'}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => console.log(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Email'}
            keyboardType="default"
            returnKeyType="done"
            onChangeText={text => console.log(text)}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            marginTop: 20,
            height: 40,
            alignItems: 'center',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: Colors.BorderColor,
          }}>
          <TextInput
            allowFontScaling={false}
            style={{marginLeft: 5, color: Colors.black}}
            placeholderTextColor={Colors.textColorLight}
            placeholder={'Phone'}
            keyboardType="default"
            returnKeyType="done"
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
          <Text style={{fontSize: 16, fontWeight: '400', color: Colors.white}}>
            Submit
          </Text>
        </TouchableOpacity>
        <View style={{height: 100}}></View>
      </KeyboardAwareScrollView>
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

export default MakeAnOffer;
