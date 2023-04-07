/* Could be used for managing the application form State*/

import { createSlice } from '@reduxjs/toolkit'

const initialState =  {iconUrl : "", androidUrl : "", iosUrl : "",
images : [{order : '0', url : ""}]};

const appformSlice = createSlice({
  name: 'applicationfiles',
  initialState,
  reducers: {
    updateIconUrl: (state,action) => {
      console.log(action);
      if(action.payload.item === "iconurl"){
      return {...state, iconUrl : action.payload.Url}
      }
      else if(action.payload.item === "androidurl"){
        return {...state, androidUrl : action.payload.Url}
      }
      else if(action.payload.item === "iosurl"){
          return {...state, iosUrl : action.payload.Url}
      }
      else if(action.payload.item === "images"){

        let imageObj = action.payload.UrlObj;
        let existinglist = [...state.images];
        console.log(existinglist);
        let index = existinglist.findIndex((item) => item.order === imageObj.order);
      
        if(index !== -1){
          console.log('index found')
          let newarr = [...state.images];
          newarr[index] = imageObj;
          return {...state, images : newarr};
        }
        else{
          let images = [...state.images, imageObj]
         return {...state, images}
        }

      }

  }


  }
})

export const { updateIconUrl } = appformSlice.actions
export default appformSlice.reducer




