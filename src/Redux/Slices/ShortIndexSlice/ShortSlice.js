import { createSlice } from "@reduxjs/toolkit";
const initialState={
    shortIndex:null,
    homeVideoIndex:0,
    isSpeechShow:false,
    isSlide:true,
    isVideoSlide:false,
    channelCategory:'channelHome',
    isUpload:false,
    isUploadPage:false,
    loginStatus:false,
    
};
console.log(initialState,'initial')
const shortIndexSlice=createSlice({
    name:'shortIndex',
    initialState,
    reducers:{
        handleShortIndex(state,action){
            state.shortIndex=action.payload
        },
        handleHomevideoIndex(state,action){
            state.homeVideoIndex=action.payload
        },
        handleSpeech(state,action){
            state.isSpeechShow=action.payload
        },
        handleIsSlide(state,action){
            state.isSlide=action.payload
        },
        handleIsVideoSlide(state){
            state.isVideoSlide=!state.isVideoSlide
        },
        handleChannelCategory(state,action){
           state.channelCategory=action.payload
        },
        handleIsUpload(state){
            state.isUploade=!state.isUploade
        },
        handleIsUploadPage(state){
            state.isUploadPage=!state.isUploadPage
        },
        handleLoginStatus(state,action){
            state.loginStatus=action.payload
            
        }
      
    }
})
export default shortIndexSlice.reducer
export const {
    handleShortIndex,
    handleHomevideoIndex,
    handleSpeech,
    handleIsSlide,
    handleIsVideoSlide,
    handleChannelCategory,
    handleIsUpload,
    handleIsUploadPage,
    handleLoginStatus
}=shortIndexSlice.actions