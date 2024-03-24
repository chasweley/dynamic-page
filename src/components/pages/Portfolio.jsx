import { useState, useEffect } from "react";
import PortfolioModal from "../modals/PortfolioModal";
import { ClipLoader } from "react-spinners";

export default function Portfolio() {  
    //Creating variables to get repos from github
    const [repos, setRepos] = useState([]);
    //Creating variables to show a loading spinner until the repos are shown
    const [isLoading, setIsLoading] = useState(true);
    //Creating variables to show if modal is opened and which project the user wants to show more info on
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [chosenProjectId, setChosenProjectId] = useState(null);

    const url = 'https://api.github.com/users/chasweley/repos';

    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {          
            setTimeout(() => {
                setRepos(data);
                setIsLoading(false);
            }, 1000) //Waits 1 second before it runs the two functions in timeout
        })
    }, []);

    //If the json data isn't showing yet, loading spinner is shown
    if(isLoading) {
        return <ClipLoader className="loading-icon" color="#F21C76" />
    } 

    return (
        <section className="page-content">
            <h1>Portfolio</h1>
            <ul className="ul-portfolio">
            {
                //Map to choose which info to show from github api
                repos.map((repo) => {
                    return (
                        <li className="project-card" key={repo.id}>
                            <h2>{repo.name}</h2>
                            <div className="div-show-more">
                                <button className="show-more-button" onClick={() => {
                                    setIsModalOpen(true)
                                    setChosenProjectId(repo.id)
                                    }}>
                                    Show more
                                </button>
                                {/*Makes sure info on chosen repo actually is on that repo, then it sends that particular repo to the modal*/}
                                {chosenProjectId !== null && chosenProjectId === repo.id ? isModalOpen && <PortfolioModal setIsModalOpen={setIsModalOpen} repo={repo}/> : null}
                            </div>
                        </li>
                )})
            }
            </ul>
        </section>
    )
}

