function CardForm({ addCity }) {
const handleClick = () => {
    const city = {
        id: 3,
        name: "Bangkok",
        description: "lorem ipsum dolor patt. Repellat at omen ipsum?",
        imgURL: "https://images.unsplash.com/photo-1523731407965-2430cd12f5e4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        isVisited: true,
    };
    addCity(city);
};

    return (
        <div className="flex flex-col gap-5 p-5 w-80 mb-10">
            <input type="text" />
            <input type="text" />
            <input type="text" />
            <button onClick={handleClick}>Aggiungi Card</button>
        </div>
    );
}

export default CardForm;