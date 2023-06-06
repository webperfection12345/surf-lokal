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
import 'react-native-gesture-handler';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useNavigation} from '@react-navigation/native';
import {useSelector, useDispatch} from 'react-redux';
import {getTrash} from '../../modules/getTrash';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
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
    details: 'RX-10101010',
    hoa: '$184',
  },
];

const RecycleBin = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setHomeData] = useState([]);
  const [index, setIndex] = useState(0);
  const [readmore, setreadmore] = useState('');
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  useEffect(() => {
    getTrashApiCall();
  }, []);

  const getTrashApiCall = () => {
    dispatch(getTrash()).then(response => {
      console.log('res--', response.payload.data);
      setHomeData(response.payload.data);
    });
  };

  // const [data, setData] = useState(images);

  const renderItemImage = ({item, index}) => (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => navigation.navigate('ViewPropertiy')}
      style={styles.slideOuter}>
      <Image source={item.uri} style={styles.slide}></Image>
    </TouchableOpacity>
  );

  const renderItem = ({item}) => (
    <View style={styles.slideOuter}>
      <Image source={{uri: item.featured_image_src}} style={styles.slide} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          width: '90%',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            flexDirection: 'row',
            width: '15%',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}></View>
        <TouchableOpacity onPress={() => navigation.navigate('ViewPropertiy')}>
          <Text
            style={{
              fontSize: 20,
              color: Colors.primaryBlue,
              fontWeight: '500',
            }}>
            $ {item.originallistprice}
          </Text>
        </TouchableOpacity>

        <View
          style={{
            flexDirection: 'row',
            width: '20%',
            alignSelf: 'flex-end',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}></View>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('ViewPropertiy')}
        style={{
          width: '95%',
          alignSelf: 'center',
          justifyContent: 'center',
          marginTop: 5,
        }}>
        <Text
          numberOfLines={item.ID == readmore ? 0 : 2}
          ellipsizeMode="tail"
          style={{fontSize: 16, color: Colors.black, textAlign: 'justify'}}>
          {item.content.rendered}
        </Text>
        <TouchableOpacity onPress={() => setreadmore(item.ID)}>
          <Text style={{color: 'crimson'}}>Read More</Text>
        </TouchableOpacity>
      </TouchableOpacity>

      <View
        style={{
          flexDirection: 'row',
          width: '90%',

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
              {item.property_bedrooms} {'Beds'}
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
              {item.bathroomsfull} {'Bath'}
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
              {item.property_size} {'sq ft'}
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
        <Text style={{fontSize: 20, color: Colors.black}}>Recycle Bin</Text>
      </View>
      <View style={{height: '100%', width: '100%'}}>
        <FlatList
          data={data}
          keyExtractor={item => item.id}
          renderItem={renderItem}
          contentContainerStyle={{paddingBottom: 50}}
        />
      </View>
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
    borderRadius: 18,
  },
  slide: {
    width: screenWidth - 40,
    height: screenHeight / 4,
    borderRadius: 18,
    margin: 20,
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

export default RecycleBin;
