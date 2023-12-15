import { CardInfoProps } from "../../../types";

const CardInfo: React.FC<CardInfoProps> = ({ text, name }) => {
  const content = () => {  
    if (text.length > 150) {
      return text.slice(0, 150) + "...";
    }
    return text;
  }

  
  return (
    <div className="flex gap-2">
      <h5 className="font-bold text-xl">{name.charAt(0).toUpperCase() + name.slice(1)}:</h5>
      <p>{content()}</p>
    </div>
  );
};

export default CardInfo;
