import Image from "next/image";
import facebook from "../images/facebook.svg";
import instagram from "../images/instagram.svg";
import snapchat from "../images/snapchat.svg";
import twitter from "../images/twitter.svg";
const SocialLinks = () => {
    return <header className="mx-auto flex row justify-between items-center" style={{marginTop:60,width:313,height:46,gap:43}}>
        <Image src={snapchat} alt={'LinkBarge'} />
        <Image src={facebook} alt={'LinkBarge'}/>
        <Image src={instagram} alt={'LinkBarge'}/>
        <Image src={twitter} alt={'LinkBarge'}/>
    </header>
}

export default SocialLinks;