import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { getTags } from "./tagsApi"

const initialState={
      isLoading:false,
      tags:[],
      isError:false,
      error:""
}

export const fetchTags=createAsyncThunk("tags/fetchTags",async()=>{
   const response=await getTags()
   return response
})


const tagSlice=createSlice({
      name:"tags",
      initialState,
      extraReducers:(builder)=>
      {
         builder.addCase(fetchTags.pending,(state)=>{
             state.isLoading=true
             state.isError=false
         }).addCase(fetchTags.fulfilled,(state,action)=>{
             state.isLoading=false
             state.tags=action.payload
         }).addCase(fetchTags.rejected,(state,action)=>{
               state.isLoading=false
               state.tags=[]
               state.isError=true
               state.error=action.payload.message
         })
      }
})
export default tagSlice.reducer