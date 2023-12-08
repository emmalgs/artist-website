import { CardInfoProps } from "../../../types";

const CardInfo: React.FC<CardInfoProps> = ({ text }) => {
  return <div className="text-2xl">{text}</div>;
};

export default CardInfo;
