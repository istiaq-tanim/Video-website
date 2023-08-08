import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getVideo } from "./vidoeApi"

const initialState={
      isLoading:false,
      video:{},
      isError:false,
      error:""
}
export const fetchVideo=createAsyncThunk("video/fetchVideo",async(id)=>{
     const response=await getVideo(id)
     return response
})

const videoSlice=createSlice({
      name:"video",
      initialState,
      extraReducers:(builder)=>
      {
        builder.addCase(fetchVideo.pending,(state)=>{
            state.isLoading=true
            state.isError=false
        }).addCase(fetchVideo.fulfilled,(state,action)=>{
            state.isLoading=false
            state.video=action.payload
        }).addCase(fetchVideo.rejected,(state,action)=>{
            state.isLoading=false
            state.video={}
            state.isError=true
            state.error=action.error?.message
        })
      }

})
export default videoSlice.reducer