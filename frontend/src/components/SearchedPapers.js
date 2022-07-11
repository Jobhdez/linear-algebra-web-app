import React, { useState, useEffect } from "react";
import Grid from '@mui/material/Grid';
import PaperCard from '../components/ResearchPaperCard';

const apiUrl = "http://127.0.0.1:8000/api/search/?search=";


function SearchedPapers(){

    const [query, setQuery] = useState("");
    const [apiData, setApiData] = useState([])

    useEffect(() => {
        const getFilteredItems = async (query) => {
             let response = await fetch(apiUrl+query);
             let papers = await response.json();
             setApiData(papers);
             if (!query) {
                return papers
            }
            return papers;
            
        
        }
    
        getFilteredItems(query);
      },[query]);

    
    console.log(apiData)
    return (
        <div className='SearchedPapers'>
            <label>
                Search
            </label>
            <input type='text' onChange={e => setQuery(e.target.value)}/>
            <div>
                
                    {apiData.map((paper) => {
                        return (
                    <Grid key={paper.title}>
                        <PaperCard title={paper.title} abstract={paper.abstract}/>
                        </Grid>
                        )
                    })}
            </div>
                

        </div>
    )
}

export default SearchedPapers;