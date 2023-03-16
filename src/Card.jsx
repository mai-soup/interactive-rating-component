const Card = ({ children, className }) => {
  return (
    <main
      className={`bg-medium-grey rounded-3xl text-light-grey py-6 px-8 ${className}`}
    >
      {children}
    </main>
  );
};

export default Card;
