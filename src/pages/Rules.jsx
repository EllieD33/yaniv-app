import NavButton from "../components/NavButton";

function Rules() {
    return (
        <div>
            <header className="bg-gradient-to-bl from-indigo-600 to-indigo-500 text-white shadow-lg">
                <h1 className="text-5xl py-5 text-center font-heading">Yaniv</h1>
                <nav className="fixed bottom-0 w-full bg-gradient-to-bl from-indigo-600 to-indigo-500 flex items-center justify-center">
                    <NavButton
                        linkTo="/pages/ScoreBoard"
                        navText="Go to scoreboard"
                        filled={true}
                    />
                </nav>
            </header>
            <main className="text-slate-800 px-3 max-w-screen-md mx-auto">
                <article className="pt-3">
                    <h2 className="text-4xl font-heading font-bold">About Yaniv</h2>
                    <p className="py-3">Yaniv is a card game for 2+ players, though the ideal number of players is between 2 and 5 people.</p>
                    <p className="py-3">The game is played with a standard deck of cards, including 2 jokers (54 cards in total).</p>
                    <p  className="py-3">If you are playing with more than 4 players, it is a good idea to use 2 decks of cards shuffled together.</p>
                </article>
                <hr className="border-indigo-300 my-4"/>
                <article>
                    <section>
                        <h2 className="text-4xl pt-2 font-heading font-bold">How to play</h2>
                        <p className="py-3">The game is played across multiple rounds with a total score tally being kept throughout. The aim of the game is to earn as few points as possible. The player with the fewest points at the end of the game is the winner.</p>
                        <p className="py-3">Each round ends when a player declares <b>"Yaniv!"</b>. Points are allocated to players based on the remaining cards in their hands.</p>
                    </section>
                    <hr className="border-indigo-300 mx-auto w-20"/>
                    <section className="my-2">
                        <h3 className="text-3xl pt-2 font-heading font-bold">Dealing</h3>
                        <p className="py-3">Each player is dealt 5 cards, face-down. Cards are dealt clockwise from the dealer's left. The remaining cards are placed in the centre and the top card is then turned face-up next to the stack to start to discard pile.</p>
                    </section>
                    <hr className="border-indigo-300 mx-auto w-20"/>
                    <section className="my-2">
                        <h3 className="text-3xl pt-2 font-heading font-bold">Gameplay</h3>
                        <p className="py-3">The play proceeds clockwise. For the first round play begins with the person to the dealer's left and in subsequent rounds the winner of the previous round goes first.</p>
                        <div className="p-4 bg-indigo-500 text-white rounded-md max-w-screen-sm mx-auto">
                            <p className="pb-3 font-semibold">To take their go, players can either:</p>
                            <ul className="list-disc list-outside ml-6 space-y-2">
                                <li>Discard a card, or set of cards, and pick up a new card.</li>
                                <li>
                                    Call <b>"Yaniv!"</b>. But, players can only call <b>"Yaniv!"</b> if the total value of their hand is 5 or lower.
                                </li>
                            </ul>
                        </div>
                    </section>
                    <hr className="border-indigo-300 mx-auto w-20"/>
                    <section className="my-2">
                        <h4 className="text-2xl pt-2 font-heading font-bold">Discarding cards</h4>
                        <p className="py-3">Players must discard BEFORE they pick up. Discarded cards are added face-up to the top of the discard pile.</p>
                        <div className="p-4 bg-indigo-500 text-white rounded-md max-w-screen-sm mx-auto">
                            <p className="mb-2 font-semibold">Players can discard the following:</p>
                            <ul className="list-disc list-outside ml-6 space-y-2">
                                <li>Any one card.</li>
                                <li>One set of 2 or more cards with the same rank (e.g., three 9s or four Kings).</li>
                                <li>One run of 3 or more consecutive cards of the same suit (e.g., the 4, 5, 6, and 7 of Hearts).</li>
                            </ul>
                            <div className="mt-3 p-4 bg-white text-slate-800 rounded-md">
                                <p className="font-semibold">Rules for runs:</p>
                                <ul className="list-disc list-outside ml-6 space-y-2">
                                    <li>Ace is always low, and runs cannot go beyond King (you cannot have a run of Queen, King, Ace).</li>
                                    <li>A Joker can be used as a substitute for a card within a sequence (e.g., 7 of Spades, Joker, 9 of Spades).</li>
                                </ul>
                            </div>
                        </div>
                        <p className="py-3">Sequences must be placed down in order, but sets can be placed down in any order.</p>
                        <p className="py-3">Only one card or set/sequence of cards can be laid down in each turn.</p>
                    </section>
                    <hr className="border-indigo-300 mx-auto w-20"/>
                    <section className="my-2">
                        <h4 className="text-2xl pt-2 font-heading font-bold">Picking up cards</h4>
                        <p className="py-3">Players must pick up 1 card after they have discarded (even if they have discarded more than 1 card).</p>
                        <p className="py-3">Players can pick up a card either from the top of the face-down stack or from top of the discard pile.</p>
                        <p className="py-3">If the previous player has laid down a set or a sequence, the current player may take either the top or bottom card from that set/sequence. Players are <b>not</b> allowed to pick up any cards from the middle of sets/sequences (for example, if the 6, 7, and 8 of Clubs were laid, only the 6 and the 8 can be picked up by the next player).</p>
                        <p className="py-3">If a player picks up a card of the same rank as the card they just laid, they can slam that card down onto the discard pile (without having to pick up another card) as long as the next player has not yet placed their discarded card down.</p>
                        <p className="py-3">If the stack is empty before someone calls <b>"Yaniv!"</b>, the discard pile is shuffled and replaced as the stack. The last player's drop is kept out as the start of the new discard pile.</p>
                    </section>
                    <hr className="border-indigo-300 mx-auto w-20"/>
                    <section className="my-2">
                        <h4 className="text-2xl pt-2 font-heading font-bold">Calling <b>"Yaniv!"</b></h4>
                        <p className="py-3">A player can only call <b>"Yaniv!"</b> if the total score of the cards in their hand is 5 or less.</p>
                        <p className="py-3"><b>"Yaniv!"</b> can only be called at the start of a player's turn, instead of discarding cards.</p>
                        <p className="py-3">The round ends when a player calls <b>"Yaniv!"</b>. All players reveal their cards. Scores are added up and recorded for each player.</p>
                    </section>
                    <hr className="border-indigo-300 mx-auto w-20"/>
                    <section className="my-2">
                        <h4 className="text-2xl pt-2 font-heading font-bold">Scoring a round</h4>
                        <p className="py-3">The person with the lowest scoring hand is the winner of the round.</p>
                        <p className="py-3 font-semibold">Cards are valued as follows: </p>
                        <div className="p-3 bg-indigo-500 text-white rounded-md max-w-screen-sm mx-auto">
                            <dl className="grid grid-cols-2">
                                <dt className="pb-3" >Jokers</dt>
                                <dd>0</dd>
                                <div className="border-b border-gray-300"></div>
                                <div className="border-b border-gray-300"></div>
                                <dt className="py-3">Ace</dt>
                                <dd className="py-3">1</dd>
                                <div className="border-b border-gray-300"></div>
                                <div className="border-b border-gray-300"></div>
                                <dt className="py-3">Cards 2-10</dt>
                                <dd className="py-3">Same as card</dd>
                                <div className="border-b border-gray-300"></div>
                                <div className="border-b border-gray-300"></div>
                                <dt className="pt-3">Face cards</dt>
                                <dd className="pt-3">10</dd>
                            </dl>
                        </div>
                        <p className="py-3">Everyone apart from the person who called <b>"Yaniv!"</b> gets points equal to the value of their hand.</p>
                        <p className="py-3">If the person who called <b>"Yaniv!"</b> has the hand worth the fewest points, they win the round and are given a score of zero.</p>
                        <p className="py-3">If another player has a hand worth equal or fewer points than the person who called <b>"Yaniv!"</b>, this is called an <b>"Asaf"</b>.</p>
                        <p className="py-3">When an <b>"Asaf"</b> happens, the player who called <b>"Yaniv!"</b> is given 25 points as a penalty.</p>
                        <p className="py-3">The player with the lowest scoring hand gets the same points as they otherwise would have - i.e. the value of their hand.</p>
                    </section>
                    <hr className="border-indigo-300 mx-auto w-20"/>
                    <section className="mt-2 mb-24">
                        <h4 className="text-2xl pt-2 font-heading font-bold">Ending the game</h4>
                        <p className="py-3">A total score tally is kept for each round.</p>
                        <p className="py-3">Once a player's score <strong>exceeds</strong> 100 points, they are out of the game. If a player's score lands on exactly 100 points, their score is halved to 50 points and they can continue to play from that score.</p>
                        <p className="p-3 bg-indigo-500 text-white rounded-md text-center max-w-screen-sm mx-auto">The winner of the game is the last remaining player.</p>
                    </section>
                    <div className="h-6"></div>
                </article>
            </main>
        </div>
    );
}

export default Rules;