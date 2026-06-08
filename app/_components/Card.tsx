interface CardProps {
  title: string;
  color: string;
  icon: React.ReactNode;
}

const Card = ({ title, color, icon }: CardProps) => {
  return (
    <article
      className={`${color} ${icon} bg-no-repeat bg-position-[right_1rem_top_-0.5rem] rounded-2xl flex text-purple-50`}
    >
      {/* The inner frame */}
      <div className="bg-navy-900 mt-12 rounded-2xl w-full p-8">
        <h2 className="font-medium text-lg">{title}</h2>

        {/* Apparently this is better then "Image"... */}
        <img src={"/icon-ellipsis.svg"} />

        <p className="text-6xl font-light">32hrs</p>
        <p className="font-medium text-navy-200">Last Week - 36hrs</p>
      </div>
    </article>
  );
};

export default Card;
