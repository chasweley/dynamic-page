//Function takes in bool and repo object to display more info on chosen repo
const PortfolioModal = ({ setIsModalOpen, repo }) => {
    return (
        <>
            <div onClick={() => setIsModalOpen(false)} />
            <div className="more-info-modal">
                <h2>{repo.name}</h2>
                <p>{repo.description}</p>
                <p>Main language: {repo.language}</p>
                <a href={repo.url}>
                Link to github repo
                <i className="fa-brands fa-github" />
                </a>
                <br />
                <br />
                <button className="show-more-button" onClick={() => setIsModalOpen(false)}>
                Close
                </button>
            </div>
        </>
    )
}

export default PortfolioModal;