import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { getVideos } from './videosAPI';
const initialState={

      isLoading:false,
      videos:[],
      isError:false,
      error:""
}

export const fetchVideos=createAsyncThunk("videos/fetchVideos",async()=>{
    const response=await getVideos()
    return response
})

const videoSlice = createSlice({
     name:"videos" ,
     initialState,
     extraReducers:(builder)=>{
       builder.addCase(fetchVideos.pending,(state)=>{
            state.isLoading=true;
            state.isError=false
       })
       .addCase(fetchVideos.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.videos=action.payload;
          
       })
       .addCase(fetchVideos.rejected,(state,action)=>{
            state.isLoading=false;
            state.videos=[]
            state.isError=true
            state.error=action.error.message
       })
     }
})

export default videoSlice.reducer