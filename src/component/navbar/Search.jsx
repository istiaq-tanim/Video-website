import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tagSearch } from "../../features/filter/filterSlice";


const Search = () => {
      const { search } = useSelector(state=> state.filter)
      const dispatch = useDispatch()

      const [input, setInput] = useState(search)

      const handleSubmit = (e) => {
            e.preventDefault()
            dispatch(tagSearch(input))
      }
      return (
            <div>
                  <form onSubmit={handleSubmit}>
                        <input onChange={(e) => setInput(e.target.value)} value={input} className="outline-none border-none mr-2" type="search" name="search" placeholder="Search" />
                  </form>
            </div>
      );
};

export default Search;