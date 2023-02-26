import Image from "next/image"
import Link from "next/link"
import logo from "../public/logo.png"


const Navbar = () => {
  return (
    <div className="bg-blue-300">
      <div className="py-3 px-10 flex justify-between items-center">
        <Link href="/" passHref>
          <Image className="cursor-pointer" src={logo} alt="logo" width={100} height={50}/>
        </Link>
        <div className="nav-item flex justify-evenly gap-4">
          <Link href="/" passHref>
            <span className="cursor-pointer hover:text-white">Card Database</span>
          </Link> 
          <Link href="" passHref>
            <span className="cursor-pointer hover:text-white">Deck Builder</span>          
          </Link> 
        </div>
      </div>
    </div>
  )
}

export default Navbar