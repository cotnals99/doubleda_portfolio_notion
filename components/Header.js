import Image from "next/image";
import Link from "next/link";
import DarkmodeToggleButton from "./Darkmode-Toggle-Button";

const Header = () => {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href='/'>
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image src="/logo.png" width={50} height={50} alt="logo"/>
            <span className="ml-3 text-xl">Doublda Porfolio</span>
          </a>
          </Link>
          <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <Link href="/">
            <a className=" mr-5 text-blue-500 font-bold hover:text-gray-900">Home</a>
            </Link>
            <Link href="/project">
            <a className="mr-5 hover:text-gray-900">Project</a>
            </Link>
            <Link href="http://doubleda.net">
            <a target="_blank" rel="noopener noreferrer" className="mr-5 hover:text-gray-900">Contact Us</a>
            </Link>
          </nav>
          <DarkmodeToggleButton/>
        </div>
      </header>
    </div>
  );
};

export default Header;
