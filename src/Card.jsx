const Card = ({ children, className }) => {
  return (
    <main
      className={`bg-dark-blue rounded-3xl text-light-grey p-4 ${className}`}
    >
      {children}
    </main>
  );
};

export default Card;
