import { useState } from "react"
import { useDispatch } from "react-redux";
import { setQuery } from "../redux/feature/searchSlice";
const SearchBar=()=>{


    const [text,settext]=useState('');
    const dispatch=useDispatch();

    const submitHandler=(e)=>{
        e.preventDefault()
        dispatch(setQuery(text));
        // console.log(text);
        settext('');   
    }

    return(
        <div>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }} className="flex  bg-gray-900 gap-5 p-17 px-14">
                <input 
                value={text}
                onChange={(e)=>{
                    settext(e.target.value);
                }}
                required
                className="w-full  border-2 px-4 py-2 text-xl rounded outline-non text-white"
                type="text"
                placeholder="Search anything ..."
                />
                <button className="active:scale-95 cursor-pointer border-2 px-4 py-19 text-xl  outline-none text-white">Search </button>
            </form>
        </div>
    )
}
export default SearchBar