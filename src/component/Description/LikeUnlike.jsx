import Like from "../../assets/like.svg"
import Unlike from "../../assets/unlike.svg"
const LikeUnlike = ({likes,unlikes}) => {
      return (
            <div class="flex gap-10 w-48">
                  <div class="flex gap-1">
                        <div class="shrink-0">
                              <img
                                    class="w-5 block"
                                    src={Like}
                                    alt="Like"
                              />
                        </div>
                        <div
                              class="text-sm leading-[1.7142857] text-slate-600"
                        >
                              {likes}
                        </div>
                  </div>
                  <div class="flex gap-1">
                        <div class="shrink-0">
                              <img
                                    class="w-5 block"
                                    src={Unlike}
                                    alt="Unlike"
                              />
                        </div>
                        <div
                              class="text-sm leading-[1.7142857] text-slate-600"
                        >
                             {unlikes}
                        </div>
                  </div>
            </div>
      );
};

export default LikeUnlike;