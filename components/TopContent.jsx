import { getCurrentUser } from "../utils/data";
import profilePic from "../images/profPic.svg"
import Image from "next/image";
const { name, email,avatar } = getCurrentUser();

const TopContent = () => {
  return <header style={{marginTop:60}}>
    <Image src={profilePic} alt={'LinkBarge'} width="145" height="145" style={{margin: "auto"}}/>
    <div style={{textAlign:"center",fontSize:48,}}>{name}</div>
  </header>
  
};

export default TopContent;
