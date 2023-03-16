const linkClasses = "underline hover:text-light-grey";

const Attribution = () => {
  return (
    <footer className="h-12 flex justify-center items-center">
      <p>
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          className={linkClasses}
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a
          href="https://mai-soup.github.io/"
          target="_blank"
          className={linkClasses}
        >
          Maijs Garais
        </a>
        .
      </p>
    </footer>
  );
};

export default Attribution;
