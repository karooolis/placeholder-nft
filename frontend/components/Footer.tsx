import React from "react";
import GitHubButton from "react-github-btn";

const Footer = () => {
  return (
    <footer className="py-6 text-center">
      <div className="inline-block">
        <GitHubButton
          href="https://github.com/karooolis/placeholder-nft"
          data-color-scheme="no-preference: dark_high_contrast; light: dark_high_contrast; dark: dark_high_contrast;"
          data-size="large"
          aria-label="Star karooolis/placeholder-nft on GitHub"
        >
          Star on GitHub
        </GitHubButton>

        <a
          href="https://twitter.com/karooolis?ref_src=twsrc%5Etfw"
          className="twitter-follow-button"
          data-size="large"
          data-lang="en"
          data-show-count="false"
        >
          Follow @karooolis
        </a>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charSet="utf-8"
        ></script>
      </div>
    </footer>
  );
};

export default Footer;
