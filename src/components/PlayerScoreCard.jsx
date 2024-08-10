import { useState } from "react";

function PlayerScoreCard({ player, updatePlayer }) {
    const [scoreInputValue, setScoreInputValue] = useState("");

    const handleInputChange = (event) => {
        setScoreInputValue(event.target.value);
    }

    const handleAddClick = (event) => {
        event.preventDefault();
        const newScore = player.score + parseInt(scoreInputValue);
        const updatedPlayer = { ...player, score: newScore};
        updatePlayer(updatedPlayer);
        setScoreInputValue("");
    }

    const handleAsafClick = (event) => {
        event.preventDefault();
        const newScore = player.score + 25;
        const updatedPlayer = { ...player, score: newScore};
        updatePlayer(updatedPlayer);
    }

    const handleResetClick = () => {
        const updatedPlayer = { ...player, score: 0};
        updatePlayer(updatedPlayer);
    }
    
    return (
        <section className="py-2 flex justify-center flex-col border-2 border-indigo-600 rounded-md text-center" >
            <h2>{player.name}</h2>
            <div className="py-2">
                <p className="text-6xl">{player.score}</p>
            </div>
            <form className="py-2">
                <input className="p-1 border-2 border-slate-500 w-12" type="text" value={scoreInputValue} onChange={handleInputChange} />
                <button className="ml-2 bg-green-600 text-white rounded-full p-2" onClick={handleAddClick} >Add</button>
                <button className="ml-2 bg-indigo-600 text-white rounded-full p-2" onClick={handleAsafClick} >Asaf!</button>
            </form>
            <div className="py-2">
                <button className="ml-2 bg-red-600 text-white rounded-full p-2" onClick={handleResetClick}>Reset</button>
            </div>
        </section>
    )
};

export default PlayerScoreCard;