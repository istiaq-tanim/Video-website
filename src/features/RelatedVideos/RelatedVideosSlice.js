import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getRelatedVideos } from "./RelatedVideosApI"

const initialState={
      isLoading:false,
      isError:false,
      error:"",
      relatedVideos:[]
}
export const fetchRelatedVideos=createAsyncThunk("relatedVideos/fetchRelatedVideos",async({tags,id})=>{
   const response=await getRelatedVideos({tags,id})
   return response
})
const relatedVideosSlice=createSlice({
      name:"relatedVideos",
      initialState,
      extraReducers:(builder)=>{
        builder.addCase(fetchRelatedVideos.pending,(state)=>{
            state.isLoading=true
            state.isError=false
        }).addCase(fetchRelatedVideos.fulfilled,(state,action)=>{
            state.isLoading=false
            state.relatedVideos=action.payload
        }).addCase(fetchRelatedVideos.rejected,(state,action)=>{
            state.isLoading=false
            state.isError=true
            state.error=action.error.message
            state.relatedVideos=[]
        })
      }
})

export default relatedVideosSlice.reducer