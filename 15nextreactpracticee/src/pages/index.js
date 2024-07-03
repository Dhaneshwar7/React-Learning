import Image from 'next/image';
import { Inter } from 'next/font/google';
import ClickCounter from '@/components/ClickCounter';
import HoverCounter from '@/components/HoverCounter';


const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
    <div style={{display:"flex",flexDirection:"column" , alignItems:"center",justifyContent:"center"}}>

			<HoverCounter />
      <ClickCounter/>
    </div>
		</>
	);
}
