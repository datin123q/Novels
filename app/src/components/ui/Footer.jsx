import {
  DiscordOutlined,
  GithubOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {

  return (
    <footer className="footer footer-center bg-base-300 text-base-content p-3 sm:p-5 flex flex-col">
      <nav className="grid grid-flow-col gap-4 place-items-center">
        <a 
        href=""
        className="link no-underline hover:bg-gray/25 w-28 h-10 rounded grid place-items-center">
          About me
        </a>
        <a 
        href=""
        className="link no-underline hover:bg-gray/25 w-28 h-10 rounded grid place-items-center">
          Contact
        </a>
        <a
        href=""
        className="link no-underline hover:bg-gray/25 w-28 h-10 rounded grid place-items-center">
          Source web
        </a>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-8 text-3xl">
          <a
            href=""
            className="hover:bg-gray/10 w-10 h-10 rounded-xl"
          >
            <GithubOutlined />
          </a>
          <a
            href=""
            className="hover:bg-gray/10 w-10 h-10 rounded-xl"
          >
            <TwitterOutlined />
          </a>
          <a
            href=""
            className="hover:bg-gray/10 w-10 h-10 rounded-xl"
          >
            <DiscordOutlined />
          </a>
        </div>
      </nav>
      <aside>
        <p>
          Copyright © 2025
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
