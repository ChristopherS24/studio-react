function Card(){
    return (
        <div className="rounded-md">
            <img src="https://images.unsplash.com/photo-1738975927070-d5af82de67c1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt=""></img>
            <div className="flex flex-col">
                <h3>
                    Titolo
                </h3>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, odio quia pariatur quod soluta optio!
                </p>
            </div>
        </div>
    )
}

export default Card;