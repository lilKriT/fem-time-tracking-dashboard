interface CardProps {
  title: string;
  color: string;
  icon?: React.ReactNode;
}

const Card = ({ title }: CardProps) => {
  return (
    <article>
      <div>
        <h2>{title}</h2>
      </div>
    </article>
  );
};

export default Card;
