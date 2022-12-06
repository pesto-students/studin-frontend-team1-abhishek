import {useState, useEffect} from 'react';
import { styled, InputBase } from '@mui/material';

const SearchBar = (props, {theme}) => {

    // const { searchActive } = props;
    const [searchText, setSearchText] = useState("");
    const [searchActive, setSearchActive] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const [error, setError] = useState("");
    const [input, setInput] = useState("");

    const Search = styled("div")(({theme}) => ({
        padding: "0 10px",
        borderRadius: theme.shape.borderRadius
    }));

    const StyledInputBase = styled(InputBase)(({theme}) => ({
        // color: theme.palette.grey,
        // color: "gray",
    }));

    const handleSearchClick = () => {
        setSearchActive(!searchActive);
    };

    const handleSearchText = () => {
        
    };

    const handleChange = (event) => {
        setInput(event.target.value);
      };

    const fetchSearchData = async () => {
        try {

            const url =  process.env.REACT_APP_API_URL + "/api/v1/auth/getAllUsers";
            let accessToken = localStorage.getItem('accessToken');
            const result = await fetch(url, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
                  "Authorization": `Bearer ${accessToken}`
              },
            });
            const jsonResult = await result.json();
            console.log(jsonResult);
            if (jsonResult.data){
            //   setPostsCount(jsonResult.data.length);
              console.log('count',jsonResult.data.length);
    
            }
            if (jsonResult.status === 200){
                // setPostsData([jsonResult]);
                console.log(jsonResult.data);
                setData(jsonResult.data);
                setFilteredData(jsonResult.data);   
            }
        } catch (error) {
            console.log(error);
            setError(error);
            
        }
    };

    useEffect( () => {
        fetchSearchData();

    }, []);

    const handleFilter = (e) => {
            console.log(e);
            const searchInput = e.target.value;
            setInput(searchInput);
            const newFilter = data.filter((value) => {
            return value.first_name.toLowerCase().includes(searchInput.toLowerCase());
        });
        if (searchInput === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
      };


    return(
        <>
            <Search onClick={handleSearchClick} style={{
                backgroundColor: searchActive ? "white" : "white",
                // width: searchActive ? "40%" : "30%",
                width: "40%",
                marginRight: '8%'
            }}>
                <StyledInputBase className="searchInputs"
                    placeholder='search...' 
                    // onChange={handleSearchText}  
                    value={input}
                    onChange={(e) => {
                        handleChange(e);
                        handleFilter(e);
                    }}
                    style={{
                        color: searchActive ? "black" : "black",
                        width: "100%",
                    }}
                />
            </Search>

            {filteredData.length != 0 && (
                <div className="dataResult"
                    style={{
                        position: "absolute",
                        marginTop: "5px",
                        width: "300px",
                        height: "200px",
                        backgroundColor: "white",
                        boxShadow: "rgba(0, 0, 0.35) 0px 5px 15px",
                        overflow: "hidden",
                        overflowY : "auto"
                      }}>
                    {filteredData.slice(0, 10).map((value, index) => {
                        return (
                        <div className="dataItem" key={value._id}>
                        <p>{value.firstName} {value.lastName}</p>
                        </div>
                        );
                    })}
                </div>
            )}
        </>
    )

}

export default SearchBar;