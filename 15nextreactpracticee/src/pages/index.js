import Image from 'next/image';
import { Inter } from 'next/font/google';
import ClickCounter from '@/components/ClickCounter';
import HoverCounter from '@/components/HoverCounter';
import { useEffect, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	const [so, setSo] = useState(null);

	const styl = {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		justifyContent: 'center',
	};
  useEffect(() => {

    // setTimeout(() => {
    //   setSo("Entered")
    // }, 3000);
    console.log("yooo runnning");
    console.log(so);

    return ()=>{
      console.log("unmouunted bc");
    }
   
  })
  

	return (
		<>
			<div style={styl}>
				<div> {so ? so : <div>you runn</div>}</div>
				<HoverCounter />
				<ClickCounter />
			</div>
		</>
	);
}
