const SocialMediaIcons = () => {
  return (
    <div className="flex justify-center md:justify-start my-10 gap-7">
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.linkedin.com/in/grigorios-fragkakis-b49a67244/"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="linkedin-link" src="./assets/linkedin2.png" />
      </a>
      <a
        className="hover:opacity-50 transition duration-500"
        href="https://www.github.com/Grifrag"
        target="_blank"
        rel="noreferrer"
      >
        <img alt="github-link" src="./assets/github1.png"/>
      </a>
    </div>
  );
};

export default SocialMediaIcons;
