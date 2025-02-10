function Card(props){
    const title = props.title;
    const description = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi, odio quia pariatur quod soluta optio!"
    const imgURL = props.imgURL
    return (
        <div className="rounded-md bg-zinc-950">
            <img src={imgURL} alt=""></img>
            <div className="flex flex-col p-3">
                <h3 className="text-2xl text-red-800 font-bold">
                    {title}
                </h3>
                <p className="text-white">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default Card;