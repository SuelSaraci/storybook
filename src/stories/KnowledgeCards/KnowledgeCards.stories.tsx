import React, { useState } from "react";
import KnwoledgeCard from "./KnwoledgeCard.tsx";
import CardImage from "./icons/cardImage.svg";

const Base: React.FC<{}> = ({ ...props }) => <KnwoledgeCard {...props} />;

export const KnowledgeCardDefault: React.FC = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex gap-8">
      <div>
        <Base
          size="big"
          image={CardImage}
          cardTitle="Astronomy"
          cardDescription="Astronomy is the study of everything in the universe beyond atmosphere includes objects we can see with our naked eyes, like the Sun , the Moon , the planets, and the stars . It also includes objects we can only see with telescopes or other instruments, like faraway galaxies and tiny particles."
        />
      </div>
      <div>
        <Base
          size="small"
          image={CardImage}
          cardTitle="Astronomy"
          cardDescription="Astronomy is the study of everything in the universe beyond atmosphere includes objects we can see"
        />
      </div>
      <div>
        <Base
          label="Astronomy /../ Planet"
          size="small"
          image={CardImage}
          cardTitle="Astronomy"
          cardDescription="Astronomy is the study of everything in the universe beyond atmosphere includes objects we can see"
        />
      </div>
      <div>
        <Base
          hover
          size="big"
          image={CardImage}
          cardTitle="Astronomy"
          cardDescription="Astronomy is the study of everything in the universe beyond atmosphere includes objects we can see"
        />
      </div>
      <div>
        <Base
          menu
          size="big"
          image={CardImage}
          cardTitle="Astronomy"
          cardDescription="Astronomy is the study of everything in the universe beyond atmosphere includes objects we can see"
        />
      </div>
    </div>
  );
};

export const KnowledgeCardHorizontalV2: React.FC = () => {
  return (
    <div className="flex gap-8">
      <div>
        <Base
          horizontal
          image={CardImage}
          cardTitle="Astronomy"
          cardDescription="Astronomy is the study of everything in the universe beyond atmosphere includes objects we can see with our naked eyes, like the Sun , the Moon , the planets, and the stars . It also includes objects we can only see with telescopes or other instruments, like faraway galaxies and tiny particles."
        />
      </div>
      <div>
        <Base
          horizontal
          hover
          image={CardImage}
          cardTitle="Astronomy"
          cardDescription="Astronomy is the study of everything in the universe beyond atmosphere includes objects we can see with our naked eyes, like the Sun , the Moon , the planets, and the stars . It also includes objects we can only see with telescopes or other instruments, like faraway galaxies and tiny particles."
        />
      </div>
      <div>
        <Base
          horizontal
          menu
          image={CardImage}
          cardTitle="Astronomy"
          cardDescription="Astronomy is the study of everything in the universe beyond atmosphere includes objects we can see with our naked eyes, like the Sun , the Moon , the planets, and the stars . It also includes objects we can only see with telescopes or other instruments, like faraway galaxies and tiny particles."
        />
      </div>
    </div>
  );
};

export const KnowledgeCardText: React.FC = () => {
  return (
    <div className="flex gap-8">
      <div>
        <Base
          textCard
          horizontal
          cardTitle="Astronomy"
          cardDescription="Astronomy is the study of everything in the universe beyond atmosphere includes objects we can see with our naked eyes, like the Sun , the Moon , the planets, and the stars . It also includes objects we can only see with telescopes or other instruments, like faraway galaxies and tiny particles."
        />
      </div>
      <div>
        <Base textCard horizontal cardTitle="Astronomy" />
      </div>
      <div>
        <Base textCard textCardLeftHiglight horizontal cardTitle="Astronomy" />
      </div>
      <div>
        <Base textCard horizontal textCardIcon cardTitle="Astronomy" />
      </div>
    </div>
  );
};

export default {
  title: "KnwoledgeCard",
  component: KnwoledgeCard,
};
