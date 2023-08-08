import { useDispatch, useSelector } from "react-redux";
import Player from "../component/Description/Player";
import VideoDescription from "../component/Description/VideoDescription";
import RelatedVideos from "../component/List/RelatedVideos";
import { useEffect } from "react";

import { useParams } from "react-router-dom";
import { fetchVideo } from './../features/video/videoSlice';
import Loading from "../utils/Loading";
const Videos = () => {
      const { video, isLoading, isError, error } = useSelector(state => state.video)
      const dispatch = useDispatch()
      const { videoId } = useParams()
      useEffect(() => {
            dispatch(fetchVideo(videoId))
      }, [dispatch, videoId])

      const { link, id ,tags ,title} = video || {}
      let content = null

      if (isLoading) content = <Loading></Loading>
      if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
      if (!isLoading && !isError && !video?.id) content = <div className="col-span-12">No videos Found</div>
      if (!isLoading && !isError && video?.id) content = <div class="grid grid-cols-3 gap-2 lg:gap-8">
            <div class="col-span-full w-full space-y-8 lg:col-span-2">
                  <Player link={link} title={title}></Player>
                  <VideoDescription video={video}></VideoDescription>
            </div>
            <RelatedVideos id={id} tags={tags}></RelatedVideos>
      </div>

      return (

            <section class="pt-6 pb-20">
                  <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">
                      {content}
                  </div>
            </section>


      );
};

export default Videos;