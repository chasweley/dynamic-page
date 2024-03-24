import {useState, useEffect} from 'react';
import PortfolioModal from '../modals/PortfolioModal';
import {ClipLoader} from "react-spinners";

export default function Portfolio() {  
    //Inom klamrarna till vänster: kan liknas vid get och set i C#
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [chosenProjectId, setChosenProjectId] = useState(null);

    const url = 'https://api.github.com/users/chasweley/repos';

    //Som en eventlistener i princip, när något händer, gör det här
    //useEffect använder en callback function, det som ser ut som lambda
    useEffect(() => {
        fetch(url)
        .then((response) => response.json())
        .then((data) => {          
            setTimeout(() => {
                setRepos(data);
                setIsLoading(false);
            }, 1000) //väntar 1 sekund innan den kör de två funktionerna i timeout
        })
    }, []);

    if(isLoading) {
        return <ClipLoader className="loading-icon" color="#F21C76" />
    } 

    return (
        <section className="page-content">
            <h1>Portfolio</h1>
            <ul className="ul-portfolio">
            {
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
                                {chosenProjectId !== null && chosenProjectId === repo.id ? isModalOpen && <PortfolioModal setIsModalOpen={setIsModalOpen} repo={repo}/> : null}
                            </div>
                        </li>
                )})
            }
            </ul>
        </section>
    )
}

