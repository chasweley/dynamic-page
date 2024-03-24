import {useState, useEffect} from 'react';

export default function Portfolio() {  
    //Inom klamrarna till vänster: kan liknas vid get och set i C#
    const [repos, setRepos] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
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

/*     if(isLoading) {
        return <ClipLoader color="#8f2fe1" />
    } */

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
                                <label className="show-more-button" htmlFor="show-more-toggle-n">
                                    Show more
                                </label>
                                
                                <input type="checkbox" id="show-more-toggle-n" />
                                

                            </div>
                        </li>
                )})
            }
            </ul>
        </section>
    )
}

