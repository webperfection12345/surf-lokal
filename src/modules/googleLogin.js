import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import {postAPI} from '../config/apiMethod';
import {url} from '../config/url';
import AsyncStorage from '@react-native-community/async-storage';

export const googleUser = createAsyncThunk('googleUser', async dispatch => {
  return await postAPI(
    'https://surf.topsearchrealty.com/webapi/v1/login/emaillogin.php',
    // 'https://surf.topsearchrealty.com/' + 'wp-json/custom-plugin/login/',
    dispatch,
  )
    .then(async response => {
      const {data} = response;
      console.log('------...', data);
      if (data.success) {
        const ids = data.data[0].userID;
        await AsyncStorage.setItem('userId', ids + '');
        await AsyncStorage.setItem('userDetails', JSON.stringify(data.data));

        return data;
      } else {
        return data;
      }
    })
    .catch(e => {
      console.log(e);
      if (e.response) {
        console.log('api issue', e.response);
      } else if (e.request) {
        console.log('api issue', e.response);
      } else {
        console.log('api issue', e.response);
      }
    });
});

const googleUserSlice = createSlice({
  name: 'google',
  initialState: {
    loginData: [],
    status: null,
  },
  extraReducers: {
    [googleUser.pending]: (state, action) => {
      state.status = 'loading';
    },
    [googleUser.fulfilled]: (state, action) => {
      state.status = 'success';
      state.loginData = action.payload;
    },
    [googleUser.rejected]: (state, action) => {
      state.status = 'failed';
    },
  },
});

export default googleUserSlice.reducer;
