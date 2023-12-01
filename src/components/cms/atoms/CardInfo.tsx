const CardInfo = ({ text }) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-2xl font-bold">{text}</div>
        </div>
    );
}

export default CardInfo;