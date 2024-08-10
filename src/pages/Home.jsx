import NavButton from "../components/NavButton";

function Home() {
    return (
        <header className="bg-gradient-to-bl from-indigo-600 to-indigo-500 flex flex-col items-center justify-center px-4 h-screen">
            <h1 className="text-6xl text-white text-center max-w-md mx-auto">
                Let's play Yaniv!
            </h1>
            <nav className="flex flex-col md:flex-row w-full justify-center mt-8 md:space-x-4">
                <NavButton
                    linkTo="/pages/ScoreBoard"
                    navText="Go to scoreboard"
                    filled={true}
                />
                <NavButton
                    linkTo="/pages/Rules"
                    navText="Learn how to play"
                />
            </nav>
        </header>
    );
}

export default Home;
