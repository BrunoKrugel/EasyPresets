import Image from 'next/image';
import headerPic from '../public/images/Header.jpg';


function HeaderComponent() {
  return (
    <div>
        <Image
        src={headerPic}
        alt="Header"
        //width={180}
        height={437}
        priority
        />        
    </div>
  );
}

export { HeaderComponent };