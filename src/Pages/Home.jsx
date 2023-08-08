
import VideoGridItems from '../component/Grid/VideoGridItems';
import Tags from '../component/tags/Tags';
import Pagination from '../component/ui/Pagination';

const Home = () => {

      return (
            <div>
               
                <Tags></Tags>
                <VideoGridItems></VideoGridItems>
                <Pagination></Pagination>
                
            </div>
      );
};

export default Home;