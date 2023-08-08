import { useDispatch, useSelector } from "react-redux";
import RelatedVideo from "./RelatedVideo";
import { useEffect } from "react";
import { fetchRelatedVideos } from "../../features/RelatedVideos/RelatedVideosSlice";
import Loading from "../../utils/Loading";

const RelatedVideos = ({ id, tags }) => {
      const dispatch = useDispatch()
      const { relatedVideos, isLoading, isError, error } = useSelector(state => state.relatedVideos)

      useEffect(() => {
            dispatch(fetchRelatedVideos({ tags, id }))
      }, [dispatch, tags, id])

      let content = null
      if (isLoading) content = <Loading></Loading>
      if (!isLoading && isError) content = <div className="col-span-12">{error}</div>
      if (!isLoading && !isError && relatedVideos?.length === 0) content = <div className="col-span-12">No videos Found</div>
      if (!isLoading && !isError && relatedVideos?.length > 0) content = relatedVideos.map(video => <RelatedVideo key={video.id} video={video}></RelatedVideo>)


      return (
            <div
                  class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">

                  {content}
            </div>
      );
};

export default RelatedVideos;