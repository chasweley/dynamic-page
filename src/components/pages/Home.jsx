import Headshot_CSL from "/images/Headshot_CSL.png"

export default function Home() {
    return (
        <>
            <main className="grid-main">
                <div id="main-flex">
                    <img
                    id="main-flex-img"
                    src={Headshot_CSL}
                    alt="Headshot of Charlotte Swenning Leyser"
                    />
                    <h1 className="main-heading">Charlotte Swenning Leyser</h1>
                </div>
            </main>
        </>
    )
}