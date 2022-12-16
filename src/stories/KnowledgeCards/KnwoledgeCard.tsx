import React, { useState } from "react";
import "./KnowledgeCards.css";
import FirstRowIcon from "./icons/firstIcon.svg";
import SecondRowIcon from "./icons/secondIcon.svg";
import ThirdRowIcon from "./icons/thirdIcon.svg";
import FourthRowIcon from "./icons/fourthIcon.svg";
import FifthRowIcon from "./icons/fifthIcon.svg";
import SixthRowIcon from "./icons/sixthIcon.svg";
import SeventhRowIcon from "./icons/seventhIcon.svg";
import VideoPlay from "./icons/videoIcon.svg";

interface KnwoledgeCardProps {
  image: string;
  cardTitle: string;
  cardDescription: string;
  size?: "big" | "small";
  label?: string;
  hover?: boolean;
  menu?: boolean;
  horizontal?: boolean;
  textCard?: boolean;
  textCardLeftHiglight?: boolean;
  textCardIcon?: boolean;
}

const KnwoledgeCard: React.FC<KnwoledgeCardProps> = ({
  image,
  cardTitle,
  cardDescription,
  size = "",
  label = "",
  hover = false,
  menu = false,
  horizontal = false,
  textCard = false,
  textCardLeftHiglight = false,
  textCardIcon = false,
}) => {
  const [showMenu, setShowMenu] = useState(false);

  const styles = {
    width: size === "big" ? "w-64" : size === "small" ? "w-52" : "2",
    textLine: size === "big" ? "3" : size === "small" ? "2" : "2",
    hover: hover
      ? "h-auto hover:border-2 hover:border-solid hover:border-color-9aa4b2"
      : "",
    selectedCard: showMenu && menu ? "border-2 border-gray-400" : "",
    horizontal: horizontal ? "flex max-w-md" : "",
    textCardLeftHiglight:
      textCardLeftHiglight && textCard ? "textCardLeftHiglight" : "",
  };

  const cardMenu = menu && showMenu && (
    <div className=" h-full flex flex-col gap-2">
      <div className="bg-white shadow-lg rounded-lg flex items-center justify-between p-4 h-11 w-36">
        <img src={FirstRowIcon} alt="First Row Icon" />
        <img src={SecondRowIcon} alt="Second Row Icon" />
        <img src={ThirdRowIcon} alt="Third Row Icon" />
      </div>
      <div className="bg-white shadow-lg rounded-lg flex items-center justify-between p-4 w-8/12 h-11">
        <img src={FourthRowIcon} alt="Fourth Row Icon" />
        <img src={FifthRowIcon} alt="Fifth Row Icon" />
      </div>
      <div className="bg-white shadow-lg rounded-lg flex items-center justify-between p-4 w-8/12 h-11">
        <img src={SixthRowIcon} alt="Fourth Row Icon" />
        <img src={SeventhRowIcon} alt="Fifth Row Icon" />
      </div>
    </div>
  );

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div>
      {label && <p className="text-xs text-gray-600 mb-2">{label}</p>}
      <div className="flex gap-4">
        <div
          onClick={handleShowMenu}
          className={`bg-white h-full rounded-lg transition--card transition ease-in-out duration-300 shadow-lg overflow-hidden ${styles.width} ${styles.hover} ${styles.selectedCard} ${styles.horizontal} h-auto`}
        >
          {textCard || (
            <div>
              <img
                className="w-full h-full object-cover"
                src={image}
                alt={cardTitle}
              />
            </div>
          )}

          <div
            className={`${styles.textCardLeftHiglight} relative flex flex-col justify-between w-full py-5 px-5 gap-2 `}
          >
            <p className="font-semibold flex items-center gap-2">
              {textCardIcon && <img src={VideoPlay} alt="Video Play Icon" />}
              {cardTitle}
            </p>
            <p
              className={`text-sm text-gray-600 ellipsis text-line-${styles.textLine}`}
            >
              {cardDescription}
            </p>
          </div>
        </div>
        {cardMenu}
      </div>
    </div>
  );
};

export default KnwoledgeCard;
