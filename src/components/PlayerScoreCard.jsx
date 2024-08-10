function PlayerScoreCard({ player }) {
    return (
        <section className="py-2 flex justify-center flex-col border-2 border-indigo-600 rounded-md text-center" >
            <h2>PLAYER NAME</h2>
            <div className="py-2">
                <p className="text-6xl">0</p>
            </div>
            <form className="py-2">
                <input className="p-1 border-2 border-slate-500 w-12" />
                <button className="ml-2 bg-green-600 text-white rounded-full p-2">Add</button>
                <button className="ml-2 bg-indigo-600 text-white rounded-full p-2">Asaf!</button>
            </form>
            <div className="py-2">
                <button className="ml-2 bg-red-600 text-white rounded-full p-2">Reset</button>
            </div>
        </section>
    )
};

export default PlayerScoreCard;