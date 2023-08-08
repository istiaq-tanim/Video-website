import axios from "axios"
//tags_like=javascript&tags_like=react&id_ne=4

export const getRelatedVideos = async({tags,id}) =>

{
      const limit=5;
      let link=tags?.length>0?tags.map(tag => `tags_like=${tag}`).join("&")+`&id_ne=${id}&_limit${limit}`:`&id_ne=${id}&_limit${limit}`
      const response=await axios.get(`http://localhost:9000/videos?${link}`)
      return response.data
}