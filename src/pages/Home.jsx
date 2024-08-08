import NavButton from "../components/NavButton";

function Home() {
    return (
        <header>
            <h1>Let's play Yaniv!</h1>
            <nav>
                <NavButton
                    linkTo="/pages/Rules"
                    navText="Learn how to play"
                />
                <NavButton
                    linkTo="/pages/ScoreBoard"
                    navText="Take me to the scoreboard"
                />
            </nav>
        </header>
    );
}

export default Home;
