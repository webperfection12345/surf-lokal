import React, {useState, useEffect, useRef} from 'react';
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
} from 'react-native';
import axios from 'axios';
import {postAPI} from '../../config/apiMethod';
import AsyncStorage from '@react-native-community/async-storage';
import 'react-native-gesture-handler';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
// import Orientation from 'react-native-orientation-locker';
import Styles from './Styles';
import {Swipeable} from 'react-native-gesture-handler';
import AppIntroSlider from 'react-native-app-intro-slider';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getPoperties} from '../../modules/getPoperties';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
import {create} from 'apisauce';

const fontSizeRatio = screenHeight / 1000;
const viewSizeRatio = screenHeight / 1000;
const imageSizeRation = screenHeight / 1000;

const images = [
  {
    uri: Images.test,
    title: 'Image 1',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test1,
    title: 'Image 2',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test2,
    title: 'Image 3',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test,
    title: 'Image 4',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test1,
    title: 'Image 5',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test2,
    title: 'Image 6',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test,
    title: 'Image 1',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test1,
    title: 'Image 2',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test2,
    title: 'Image 3',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test,
    title: 'Image 4',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test1,
    title: 'Image 5',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test2,
    title: 'Image 6',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test,
    title: 'Image 1',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test1,
    title: 'Image 2',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test2,
    title: 'Image 3',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test,
    title: 'Image 4',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test1,
    title: 'Image 5',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
  {
    uri: Images.test2,
    title: 'Image 6',
    price: '$ 200,000',
    rendered: '3286  Arcara Way   407 | Lake Worth Beach',
    bed: '2 Beds',
    bath: '2 Baths',
    size: '1,050 ft',
    details: 'Osprey Preserve',
    hoa: '$184',
  },
];

const filterData = [
  {id: 1, name: 'Filter', image: Images.address},
  {id: 2, name: 'Filter', image: Images.appLogo},
  {id: 3, name: 'Filter', image: Images.apple},
  {id: 4, name: 'Filter', image: Images.bath},
  {id: 5, name: 'New Construction', image: Images.bed},
  {id: 6, name: 'Filter', image: Images.chat},
  {id: 7, name: 'Filter', image: Images.email},
  {id: 8, name: 'Filter', image: Images.facebook},
  {id: 9, name: 'Filter', image: Images.fav},
  {id: 10, name: 'Filter', image: Images.google},
  {id: 11, name: 'Filter', image: Images.gps},
  {id: 12, name: 'Filter', image: Images.hoa},
  {id: 13, name: 'Filter', image: Images.inbox},
  {id: 14, name: 'Filter', image: Images.lokal},
];

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [adress, setAddres] = useState('');
  const [index, setIndex] = useState(0);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const flatListRef = useRef(null);
  const [homeData, setHomeData] = useState([]);
  // useEffect(() => {
  //   Orientation.lockToPortrait();
  //   return () => {
  //     Orientation.unlockAllOrientations();
  //   };
  // }, []);
  useEffect(() => {
    getPopertiesApiCall();
  }, []);

  const getPopertiesApiCall = () => {
    dispatch(getPoperties()).then(response => {
      console.log('res', response.payload);
      setHomeData(response.payload.data);
    });
  };
  const handleSlideChange = event => {
    const slideWidth = event.nativeEvent.layoutMeasurement.width;
    const offset = event.nativeEvent.contentOffset.x;
    const index = Math.floor(offset / slideWidth);
    setCurrentSlide(index);
  };

  const scrollToIndex = index => {
    setIndex(index);
    flatListRef.current.scrollToIndex({index});
  };
  const [data, setData] = useState(images);

  const handleSwipeFromLeft = id => {
    //Vibration.vibrate(100);
    setData(prevData => prevData.filter(item => item.id !== id));
  };

  const handleSwipeFromRight = id => {
    //Vibration.vibrate(100);
    setData(prevData =>
      prevData.map(item => {
        if (item.id === id) {
          return {...item, liked: true};
        }
        return item;
      }),
    );
  };

  // const saveFile = () => {
  //   const api = create({
  //     baseURL: '',
  //     headers: {},
  //   });
  //   let data = new FormData();
  //   data.append('userID', userID);
  //   data.append('post_id', post_id);

  //   api
  //     .post(
  //       ' https://surf.topsearchrealty.com/webapi/v1/favorites/addremovefavorite.php',
  //       data,
  //       {},
  //     )
  //     .then(res => {
  //       console.log('success data---->>>', res);
  //       console.log('success response', res.data.status);
  //     })
  //     .catch(error => console.log(error));
  // };

  const onDone = () => {
    navigation.navigate('Tabs', {screen: 'Home'});
  };

  const renderFillterItem = ({item}) => (
    <View style={{height: 80, justifyContent: 'center'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginLeft: 20,
          marginRight: 20,
        }}>
        <Image
          source={item.image}
          style={{height: 20, width: 20, resizeMode: 'contain'}}
        />
        <Text
          style={{fontSize: 12, color: Colors.textColorLight, marginTop: 5}}>
          {item.name}
        </Text>
      </View>
    </View>
  );
  const renderHomeData = ({item}) => (
    <View style={{height: '100%', width: screenWidth}}>
      <TouchableOpacity
        style={{
          width: screenWidth,
          height: '40%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('ViewPropertiy')}>
        <Image source={Images.test} style={styles.slide}></Image>
        {/* <AppIntroSlider
          renderItem={({item}) => (
            <View>
              <Image source={Images.test} style={styles.slide}></Image>
            </View>
          )}
          showNextButton={true}
          renderNextButton={renderNextButton}
          renderPrevButton={renderPrevButton}
          showPrevButton={true}
          data={item.property_gallery}
          dotStyle={Colors.white}
          showDoneButton={false}
          activeDotStyle={Colors.white}
          // onDone={onDone}
          //scrollEnabled={false}
        /> */}
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          alignSelf: 'flex-end',
          width: '20%',
          height: '10%',
          marginRight: 20,
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <TouchableOpacity>
          <Image
            source={Images.star}
            style={{height: 20, width: 20, resizeMode: 'contain'}}></Image>
        </TouchableOpacity>
        <Text style={{fontSize: 14, color: Colors.black, textAlign: 'center'}}>
          4.2
        </Text>
        <TouchableOpacity>
          <Image
            source={Images.send}
            style={{height: 20, width: 20, resizeMode: 'contain'}}></Image>
        </TouchableOpacity>
      </View>

      <View
        style={{
          height: '10%',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity
          style={{alignSelf: 'center'}}
          onPress={() => navigation.navigate('ViewPropertiy')}>
          <Text
            style={{
              fontSize: 18,
              color: Colors.primaryBlue,
              fontWeight: '500',
            }}>
            {'$'} {item.originallistprice}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('ViewPropertiy')}
          style={{width: '98%', alignSelf: 'center', justifyContent: 'center'}}>
          <Text
            style={{fontSize: 16, color: Colors.black, textAlign: 'center'}}>
            {item.title}
          </Text>
        </TouchableOpacity>
      </View>

      {/* <Text style={{fontSize: 18, color: Colors.black}}>{item.details}</Text> */}

      {/* <Text
          style={{
            fontSize: 12,
            color: Colors.black,
            width: '95%',
          }}>
          Google's service, offered free of charge, instantly translates words,
          phrases, and web pages between English and over 100 other languages.
        </Text>
        <View style={{position: 'absolute', bottom: 0, right: 20, zIndex: 99}}>
          <TouchableOpacity onPress={() => Alert.alert('View More')}>
            <Text
              style={{
                fontSize: 12,
                color: Colors.PrimaryColor,
              }}>
              {'more->'}
            </Text>
          </TouchableOpacity>
        </View> */}

      <View
        style={{
          flexDirection: 'row',
          width: '90%',
          height: '20%',
          alignSelf: 'center',
          justifyContent: 'space-between',
        }}>
        {item.property_bedrooms != '' ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.bed}
              style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
            <Text
              style={{
                fontSize: 12,
                color: Colors.black,
                textAlign: 'center',
              }}>
              {item.property_bedrooms}
            </Text>
          </View>
        ) : null}
        {item.bathroomsfull != '' ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.bath}
              style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
            <Text
              style={{
                fontSize: 12,
                color: Colors.black,
                textAlign: 'center',
              }}>
              {item.bathroomsfull}
            </Text>
          </View>
        ) : null}
        {item.property_size != '' ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.measuring}
              style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
            <Text
              style={{
                fontSize: 12,
                color: Colors.black,
                textAlign: 'center',
              }}>
              {item.property_size} {'ft'}
            </Text>
          </View>
        ) : null}
        {item.associationfee != '' ? (
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: 100,
            }}>
            <Image
              source={Images.hoa}
              style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
            <Text
              style={{
                fontSize: 12,
                color: Colors.black,
                textAlign: 'center',
              }}>
              {'$'} {item.associationfee == null ? 0 : item.associationfee}
            </Text>
          </View>
        ) : null}
      </View>

      <View
        style={{
          width: '90%',
          backgroundColor: 'red',
          position: 'absolute',
          bottom: 0,
          justifyContent: 'space-between',
          alignSelf: 'center',
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity onPress={() => trashfile(item.ID)}>
          <Image
            source={Images.dislike}
            style={{height: 40, width: 40}}></Image>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => saveFile(item.ID)}>
          <Image source={Images.like} style={{height: 40, width: 40}}></Image>
        </TouchableOpacity>
      </View>
    </View>
  );

  const handleScroll = event => {
    const {contentOffset} = event.nativeEvent;
    const index = Math.round(contentOffset.x / screenWidth);
    flatListRef.current.scrollToIndex({index: index + 1});
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          height: 70,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
        }}>
        <View
          style={{
            height: 40,
            width: '75%',
            borderRadius: 18,
            borderWidth: 1,
            borderColor: Colors.BorderColor,
            flexDirection: 'row',
          }}>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={Images.search}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
                marginLeft: 10,
              }}></Image>
          </TouchableOpacity>
          <View style={Styles.phoneInputView}>
            <TextInput
              allowFontScaling={false}
              style={Styles.inputStyle}
              placeholderTextColor={Colors.textColorLight}
              placeholder={'Surf by address community....'}
              returnKeyType="done"
              onChangeText={text => setAddres(text)}
            />
          </View>
          <TouchableOpacity
            style={{
              height: 40,
              width: 40,
              justifyContent: 'center',
              alignItems: 'center',
              borderLeftWidth: 1,
              borderLeftColor: Colors.BorderColor,
            }}>
            <Image
              source={Images.address}
              style={{
                height: 20,
                width: 20,
                resizeMode: 'contain',
              }}></Image>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={{
            height: 40,
            width: 40,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image
            source={Images.gps}
            style={{
              height: 20,
              width: 20,
              resizeMode: 'contain',
            }}></Image>
        </TouchableOpacity>
      </View>
      <View style={{width: '95%', alignSelf: 'center'}}>
        <FlatList
          data={filterData}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          onScroll={handleSlideChange}
          onMomentumScrollEnd={handleSlideChange}
          renderItem={renderFillterItem}
        />
      </View>

      <FlatList
        renderItem={renderHomeData}
        horizontal
        keyExtractor={item => item.id}
        ref={flatListRef}
        data={homeData}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        // showNextButton={false}
        // showPrevButton={false}
        // showDoneButton={false}

        // pagingEnabled={true}
        // bottomButton={false}
        // activeDotStyle={{position: 'absolute', zIndex: 99}}
        // dotStyle={{position: 'absolute', zIndex: 99}}
        //dotStyle={Colors.white}
        //activeDotStyle={Colors.white}
        // onDone={onDone}
        //scrollEnabled={false}
      />
    </SafeAreaView>
  );
};
const renderNextButton = () => {
  return (
    <View
      style={{
        position: 'absolute',
        top: -50,
        right: -150,
        zIndex: 99,
      }}>
      <Image
        style={{
          height: 20,
          width: 20,
          resizeMode: 'contain',
          tintColor: Colors.white,
          transform: [{rotate: '-90deg'}],
        }}
        source={Images.downArrow}></Image>
    </View>
  );
};

const renderPrevButton = () => {
  return (
    <View
      style={{
        justifyContent: 'center',
        position: 'absolute',
        top: -50,
        left: -180,
        zIndex: 99,
      }}>
      <Image
        style={{
          height: 20,
          width: 20,
          resizeMode: 'contain',
          tintColor: Colors.white,
          transform: [{rotate: '90deg'}],
        }}
        source={Images.downArrow}></Image>
    </View>
  );
};

const saveFile = async post_id => {
  const userID = await AsyncStorage.getItem('userId');
  const headers = {
    'Content-Type': 'application/json',
  };
  let data = new FormData();
  data.append('userID', userID);
  data.append('post_id', post_id);
  try {
    var res = await axios.post(
      'https://surf.topsearchrealty.com/webapi/v1/favorites/addremovefavorite.php',
      data,
    );

    // console.log('--ppp', res);
    // console.log('--ppp', typeof res.status);

    if (res.status == 200) {
      Alert.alert(res.data.message);
    } else {
      Alert.alert('something went wrong!.');
    }
  } catch (err) {
    console.log('err', err);
  }
};

const trashfile = async post_id => {
  const userID = await AsyncStorage.getItem('userId');
  const headers = {
    'Content-Type': 'application/json',
  };
  let data = new FormData();
  data.append('userID', userID);
  data.append('post_id', post_id);
  try {
    var res = await axios.post(
      'https://surf.topsearchrealty.com/webapi/v1/trashlist/addremovetrash.php',
      data,
    );

    console.log('--ppp', res.data);

    if (res.status == 200) {
      console.log('--ppp', res.data);
      Alert.alert(res.data.message);
    } else {
      Alert.alert('something went wrong!.');
    }
  } catch (err) {
    console.log('err', err);
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  slideOuter: {
    width: screenWidth,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    width: screenWidth - 20,
    height: 200,
    borderRadius: 18,
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

export default Home;
