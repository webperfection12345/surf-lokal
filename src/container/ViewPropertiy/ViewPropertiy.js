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
  SafeAreaView,
  Vibration,
  StatusBar,
  Modal,
} from 'react-native';
import 'react-native-gesture-handler';
import Images from '../../utils/Images';
import Colors from '../../utils/Colors';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import {Rating, AirbnbRating} from 'react-native-ratings';
import {getPopertiesDetails} from '../../modules/getPopertiesDetails';
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

const fontSizeRatio = screenHeight / 1000;
const viewSizeRatio = screenHeight / 1000;
const imageSizeRation = screenHeight / 1000;
const filterData = [
  {id: 1, name: 'Details', image: Images.detail},
  {id: 2, name: 'Features', image: Images.features},
  {id: 3, name: 'Address', image: Images.address},
  {id: 4, name: 'What Nearby', image: Images.nearBy},
  {id: 5, name: 'Walk Score', image: Images.walkScrore},
];
const bedData = [
  {id: 1, name: '4 Beds', image: Images.bed},
  {id: 2, name: '4 Baths', image: Images.bath},
  {id: 3, name: '1492 sqft', image: Images.measuring},
  {id: 4, name: '5200 HOA', image: Images.hoa},
  {id: 5, name: 'Walk Score', image: Images.walkScrore},
];
const ViewPropertiy = props => {
  const dispatch = useDispatch();
  const [currentSlide, setCurrentSlide] = useState(0);
  const [data, setData] = useState([]);
  const [index, setIndex] = useState(0);
  const flatListRef = useRef(null);
  const navigation = useNavigation();
  const [readmore, setreadmore] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const postID = props.route.params
  console.log(postID.data.featured_image_src)

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };
  const [rating, setRating] = useState(0);
  const handleRating = rating => {
    setRating(rating);
  };
  useEffect(() => {
    getPopertiesDetailsApiCall();
  }, []);
  const getPopertiesDetailsApiCall = () => {
    dispatch(getPopertiesDetails(postID)).then(response => {
      console.log('res', response.payload.data);
      setData(response.payload.data);
    });
  };
  const renderItem = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          padding: 10,
          // alignSelf:'center'
        }}>
          <TouchableOpacity onPress={()=>{}}
          style={{justifyContent:'center',alignItems:'center'}}>
        <Image
          source={item.image}
          style={{height: 20, width: 20, resizeMode: 'contain',marginBottom:5}}></Image>
        <Text
          style={{
            fontSize: 10,
            color: Colors.black,
            textAlign: 'center',
            marginLeft: 5,
          }}>
          {item.name}
        </Text>
        </TouchableOpacity>
      </View>
    );
  };
  const renderBedItem = ({item}) => {
    return (
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'row',
          paddingHorizontal: 8,
        }}>
        <Image
          source={item.image}
          style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
        <Text
          style={{
            fontSize: 12,
            color: Colors.black,
            textAlign: 'center',
            marginLeft: 5,
          }}>
          {item.name}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <StatusBar barStyle="light-content" hidden={false} translucent={true} /> */}
      <View style={styles.slideOuter}>
        <Image
          source={{uri:postID?.data?.featured_image_src}}
          style={styles.slide}/>
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
              source={Images.downArrow}
              style={{
                height: 15,
                width: 15,
                resizeMode: 'contain',
                tintColor: Colors.black,
                transform: [{rotate: '90deg'}],
              }}></Image>
          </TouchableOpacity>

          <TouchableOpacity
          //onPress={() => navigation.navigate('ViewPropertiyImage')}
          >
            <Image
              source={Images.address}
              style={{
                height: 30,
                width: 25,
                resizeMode: 'contain',
                tintColor: Colors.white,
              }}></Image>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            width: '90%',
            position: 'absolute',
            bottom: 5,
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {/* <Image
              source={Images.star}
              style={{height: 20, width: 20, resizeMode: 'contain'}}></Image> */}
          </View>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ViewPropertiyImage', {
                data: data,
              })
            }>
            <Image
              source={Images.imageView}
              style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.slideOuter}>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginTop: 20,
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Images.star}
                style={{height: 20, width: 20, resizeMode: 'contain'}}></Image>
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.black,
                  textAlign: 'center',
                  marginLeft: 5,
                }}>
                4.2
              </Text>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 18,
                color: Colors.primaryBlue,
                fontWeight: '500',
              }}>
              $ {data.property_price}
            </Text>
            <TouchableOpacity>
              <Image
                source={Images.send}
                style={{height: 20, width: 20, resizeMode: 'contain'}}></Image>
            </TouchableOpacity>
          </View>

          <View
            style={{
              width: '80%',
              alignSelf: 'center',
              justifyContent: 'center',
              marginTop: 5,
            }}>
            <Text
              style={{fontSize: 16, color: Colors.black, textAlign: 'center'}}>
              {data.title}
            </Text>
          </View>
          {/* <Text style={{fontSize: 18, color: Colors.black}}>{item.details}</Text> */}

          {/* <View
            style={{
              flexDirection: 'row',
              width: '95%',
              marginTop: 10,
            }}>
            <FlatList
              data={bedData}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={renderBedItem}
            />
          </View> */}

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginTop: 10,
              justifyContent: 'space-between',
            }}>
            {data.property_bedrooms != '' ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={Images.bed}
                  style={{
                    height: 25,
                    width: 25,
                    resizeMode: 'contain',
                  }}></Image>
                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.black,
                    textAlign: 'center',
                    marginLeft: 5,
                  }}>
                  {data.property_bedrooms} {'Beds'}
                </Text>
              </View>
            ) : null}
            {data.bathroomsfull != '' ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={Images.bath}
                  style={{
                    height: 25,
                    width: 25,
                    resizeMode: 'contain',
                  }}></Image>
                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.black,
                    textAlign: 'center',
                    marginLeft: 5,
                  }}>
                  {data.bathroomsfull} {'Bath'}
                </Text>
              </View>
            ) : null}
            {data.property_size != '' ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={Images.measuring}
                  style={{
                    height: 25,
                    width: 25,
                    resizeMode: 'contain',
                  }}></Image>
                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.black,
                    textAlign: 'center',
                    marginLeft: 5,
                  }}>
                  {data.property_size} {'sq ft'}
                </Text>
              </View>
            ) : null}
            {data.associationfee != '' ? (
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'row',
                }}>
                <Image
                  source={Images.hoa}
                  style={{
                    height: 25,
                    width: 25,
                    resizeMode: 'contain',
                  }}></Image>
                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.black,
                    textAlign: 'center',
                    marginLeft: 5,
                  }}>
                  {'$'} {data.associationfee == null ? 0 : data.associationfee}
                </Text>
              </View>
            ) : null}
          </View>
          <View style={{width: '90%'}}>
            <Text
              numberOfLines={data.ID == readmore ? 0 : 2}
              style={{
                fontSize: 12,
                marginTop: 10,
                flexDirection: 'row',
                color: Colors.black,
                width: '100%',
              }}>
              {data.content}
            </Text>
            <Text
              onPress={() => setreadmore(data.ID)}
              style={{
                fontSize: 12,
                color: Colors.PrimaryColor,
              }}>
              {' more->'}
            </Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginTop: 20,
              borderTopWidth: 1,
              borderBottomWidth: 1,
              borderColor: Colors.gray,
            }}>
            <FlatList
              data={filterData}
              horizontal
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              renderItem={renderItem}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginTop: 20,
              justifyContent: 'center',
            }}>
            <View
              style={{
                //justifyContent: 'center',
                //alignItems: 'center',
                width: '50%',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.black,
                  fontWeight: '700',
                }}>
                Property Details
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,
                  marginTop: 5,
                }}>
                Price: $ {data.property_price}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                {/* Est. Taxes: $ 9379 */}
                Property Size: {data.property_size} sq ft
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                Bedrooms: {data.property_bedrooms}
              </Text>
            </View>
            <View
              style={{
                //justifyContent: 'center',
                //alignItems: 'center',
                width: '50%',
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: Colors.black,

                  fontWeight: '700',
                }}>
                Community Details
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,
                  marginTop: 5,
                }}>
                Community Name: Marlwood Estates, PGA Res
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                HOA Fee: $ {data.HOA_Fee}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                HOA Fee Frequency: {data.HOA_Fee_Frequency}
              </Text>
            </View>
          </View>

          {/* <View style={{width: '90%'}}>
            <Text
              style={{
                fontSize: 12,
                marginTop: 10,
                flexDirection: 'row',
                color: Colors.black,
                width: '100%',
              }}>
              Google's service, offered free of charge, instantly translates
              words, phrases, and web pages between English and over 100 other
              languages. Google's service, offered free of charge, instantly
              translates words, phrases, and web pages between English and over
              100 other languages.
              <Text
                onPress={() => alert('comming soon')}
                style={{
                  fontSize: 12,
                  color: Colors.PrimaryColor,
                }}>
                {' more->'}
              </Text>
            </Text>
          </View> */}

          <View
            style={{
              flexDirection: 'row',
              width: '90%',
              marginTop: 5,
              justifyContent: 'center',
            }}>
            <View
              style={{
                //justifyContent: 'center',
                //alignItems: 'center',
                width: '50%',
              }}>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,
                  marginTop: 5,
                }}>
                Year Built : {data.yearbuilt}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                Toatl Stories: {data.storiestotal}
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                Days on Market 0
              </Text>
            </View>
            <View
              style={{
                //justifyContent: 'center',
                //alignItems: 'center',
                width: '50%',
              }}>
              {/* <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,
                  marginTop: 5,
                }}>
                Community : Estates, PGA Res
              </Text>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                HOA Fee: $ 189
              </Text> */}
              {/* <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,

                  marginTop: 5,
                }}>
                HOA Fee Frequency: Monthly
              </Text> */}
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            width: '100%',
            height: 70,
            marginTop: 10,
            justifyContent: 'center',
            borderTopWidth: 1,
            borderTopColor: Colors.gray,
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
            <TouchableOpacity
              onPress={() => toggleModal()}
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Image
                source={Images.reviews}
                style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,
                  textAlign: 'center',
                  marginLeft: 5,
                }}>
                Rate Property
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={Images.contactUs}
                style={{height: 25, width: 25, resizeMode: 'contain'}}></Image>
              <Text
                style={{
                  fontSize: 12,
                  color: Colors.black,
                  textAlign: 'center',
                  marginLeft: 5,
                }}>
                Call us
              </Text>
            </TouchableOpacity>
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
                style={{height: 20, width: 20, resizeMode: 'contain'}}></Image>
              <Text
                style={{
                  fontSize: 14,
                  color: Colors.white,
                  textAlign: 'center',
                  marginLeft: 5,
                }}>
                Book a tour
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <Modal
          transparent={true}
          animationType="slide"
          visible={modalVisible}
          onRequestClose={toggleModal}>
          <View
            style={{
              height: '80%',
              width: '100%',
              alignItems: 'center',
              alignContent: 'center',
              backgroundColor: Colors.white,
              position: 'absolute',
              bottom: 0,
              borderTopLeftRadius: 20,
              borderTopRightRadius: 20,

              borderWidth: 1,
              borderColor: Colors.gray,
            }}>
            <View
              style={{
                height: '10%',
                width: '90%',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => navigation.goBack()}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginLeft: 10,
                }}>
                <Text style={{fontSize: 12, color: Colors.gray}}></Text>
              </TouchableOpacity>
              <View
                style={{
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginTop: 10,
                }}>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={{
                    height: 5,
                    width: 50,
                    borderRadius: 8,
                    backgroundColor: Colors.gray,
                  }}></TouchableOpacity>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: Colors.black,
                    marginTop: 10,
                  }}>
                  Write a Review
                </Text>
              </View>

              <TouchableOpacity
                onPress={() => setModalVisible(false)}
                style={{
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginRight: 10,
                }}>
                <Image
                  style={{
                    height: 20,
                    width: 20,
                    resizeMode: 'contain',
                    tintColor: Colors.black,
                    transform: [{rotate: '45deg'}],
                  }}
                  source={Images.plus}></Image>
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: '100%',
                height: 1,
                backgroundColor: Colors.gray,
                marginTop: 10,
                justifyContent: 'center',
              }}></View>
            <View style={{width: '95%', height: '70%'}}>
              <View style={{width: '95%', alignSelf: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginTop: 10,
                  }}>
                  <Text style={{fontSize: 12, color: Colors.black}}>
                    Photos Quality Rating :
                  </Text>
                  <Rating
                    type="custom"
                    ratingCount={5}
                    imageSize={25}
                    startingValue={rating}
                    ratingBackgroundColor="#c8c7c8"
                    onFinishRating={setRating}
                    style={styles.rating}
                    ratingColor="#ffbe0b"
                    //tintColor="#f1f3f4"
                  />
                </View>
              </View>

              <View style={{width: '95%', alignSelf: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 12, color: Colors.black}}>
                    Description & Details :
                  </Text>
                  <Rating
                    type="custom"
                    ratingCount={5}
                    imageSize={25}
                    startingValue={rating}
                    ratingBackgroundColor="#c8c7c8"
                    onFinishRating={setRating}
                    style={styles.rating}
                    ratingColor="#ffbe0b"
                    //tintColor="#f1f3f4"
                  />
                </View>
              </View>
              <View style={{width: '95%', alignSelf: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 12, color: Colors.black}}>
                    Price Of Property :
                  </Text>
                  <Rating
                    type="custom"
                    ratingCount={5}
                    imageSize={25}
                    startingValue={rating}
                    ratingBackgroundColor="#c8c7c8"
                    onFinishRating={setRating}
                    style={styles.rating}
                    ratingColor="#ffbe0b"
                    //tintColor="#f1f3f4"
                  />
                </View>
              </View>

              <View style={{width: '95%', alignSelf: 'center'}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 12, color: Colors.black}}>
                    General Interest in the property :
                  </Text>
                  <Rating
                    type="custom"
                    ratingCount={5}
                    imageSize={25}
                    startingValue={rating}
                    ratingBackgroundColor="#c8c7c8"
                    onFinishRating={setRating}
                    style={styles.rating}
                    ratingColor="#ffbe0b"
                    //tintColor="#f1f3f4"
                  />
                </View>
              </View>

              <View style={{width: '95%', alignSelf: 'center'}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.black,
                    marginTop: 12,
                  }}>
                  Review Title
                </Text>
                <View
                  style={{
                    width: '100%',
                    height: 50,
                    marginTop: 10,
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    allowFontScaling={false}
                    style={{
                      width: '100%',
                      borderRadius: 8,
                      height: '100%',
                      paddingHorizontal: 12,
                      color: Colors.black,
                      borderWidth: 1,
                      borderColor: Colors.gray,
                      fontSize: 14,
                      padding: 2,
                    }}
                    keyboardType="number-pad"
                    autoCorrect={false}
                    returnKeyType="done"
                    placeholderTextColor={Colors.black}
                    //onChangeText={text => setMobile(text)}
                  />
                </View>
              </View>
              <View style={{width: '95%', alignSelf: 'center'}}>
                <Text
                  style={{
                    fontSize: 12,
                    color: Colors.black,
                    marginTop: 12,
                  }}>
                  Review
                </Text>
                <View
                  style={{
                    width: '100%',
                    height: 100,
                    marginTop: 10,
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    allowFontScaling={false}
                    style={{
                      width: '100%',
                      borderRadius: 8,
                      height: '100%',
                      paddingHorizontal: 12,
                      color: Colors.black,
                      borderWidth: 1,
                      borderColor: Colors.gray,
                      fontSize: 14,
                      padding: 2,
                    }}
                    keyboardType="number-pad"
                    autoCorrect={false}
                    returnKeyType="done"
                    placeholderTextColor={Colors.black}
                    //onChangeText={text => setMobile(text)}
                  />
                </View>
              </View>

              <View style={{height: 20}}></View>
            </View>
            <View style={{height: '45%', width: '100%'}}>
              <View
                style={{
                  width: '100%',
                  height: 1,
                  backgroundColor: Colors.gray,
                  marginTop: 10,
                  justifyContent: 'center',
                }}></View>
              <View
                style={{
                  flexDirection: 'row',
                  width: '90%',
                  height: 60,
                  marginTop: 20,
                  alignSelf: 'center',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={{
                    height: 35,
                    width: '45%',
                    borderRadius: 5,
                    borderColor: Colors.gray,
                    borderWidth: 0.5,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{fontSize: 14, fontWeight: '700'}}>Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setModalVisible(false)}
                  style={{
                    height: 35,
                    width: '45%',
                    borderRadius: 5,
                    backgroundColor: Colors.PrimaryColor,

                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text
                    style={{
                      fontSize: 14,
                      fontWeight: '700',
                      color: Colors.white,
                    }}>
                    Submit
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slideOuter: {
    width: screenWidth,
    justifyContent: 'center',
    alignItems: 'center',
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

export default ViewPropertiy;
