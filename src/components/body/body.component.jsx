import './body.component.scss'
import { useEffect,useState } from 'react'
import { API_LINK } from '../../config';
import { Card } from '../card/card.component';

const filterList=(search_query,resList)=>{
    console.log({search_query});
    let filteredList= resList.filter((el)=>{
        return el?.data?.name?.toLowerCase()?.includes(search_query?.toLowerCase())
    });
    console.log({filteredList});
    return filteredList;
}

export const Body=()=>{

    const [resList,setResList] = useState([]);
    const [filteredResList,setFilteredResList]=useState([]);

    const [searchQuery,setSearchQuery]=useState('');

    useEffect(()=>{
        fetchResturantsData();
    },[]);
    const fetchResturantsData=async ()=>{
        let data=await fetch(API_LINK)
        data=await data.json()
        data=data?.data?.cards?.[2]?.data?.data?.cards
        setResList(data);
        setFilteredResList(data);
    }

    useEffect(()=>{
        const filterAftertimeOut=setTimeout(()=>{
            setFilteredResList(filterList(searchQuery,resList))
        },500)
        return ()=>{
            console.log('Clearing timeout')
            clearTimeout(filterAftertimeOut)
        }
    },[searchQuery])

    return (
        <>
            <section className="body__wrapper">
                <div className="body row">
                    <div className="search__container">
                        <svg className='search--icon'  viewBox="0 0 24 24" role="presentation"><path d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"  fill-rule="evenodd"></path></svg>
                        <input type="text" 
                            className='input input--search' 
                            placeholder='Search for Resturant'
                            value={searchQuery}
                            onChange={(e)=>{
                                setSearchQuery(e?.target?.value)
                            }}    
                        />
                    </div>
                    <div className="cards__container">
                        {
                            filteredResList?.map(({data},i)=>{
                                return (<Card key={data?.uuid} {...data}/>)
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    )
}