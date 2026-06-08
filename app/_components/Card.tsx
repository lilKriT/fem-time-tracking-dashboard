interface CardProps {
  title: string;
  color: string;
  icon: React.ReactNode;
}

const Card = ({ title, color, icon }: CardProps) => {
  return (
    <article
      className={`${color} ${icon} bg-no-repeat bg-position-[right_1rem_top_-0.5rem]`}
    >
      <div>
        <h2>{title}</h2>
        <h3>{color}</h3>
      </div>
    </article>
  );
};

export default Card;
