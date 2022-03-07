import ShopItem from '../components/ShopItem'
import { Grid } from '@nextui-org/react';
import { Text } from '@nextui-org/react';
import HeaderBarSpace from '../components/HeaderBarSpace';
import HeaderBar from '../components/HeaderBar';
import useMediaQuery from '../hooks/useMediaQuery';



const css = {
    divider : {
        borderTop: "3px",
    },
    textTitle: {
		userSelect: `none`,
		textAlign: `center`,
		textGradient: "45deg, $blue500 -20%, $pink500 50%",
    },
}

function Shop({ shopItems }) {
	let columns = 5;

	const break1 = useMediaQuery('(min-width: 1200px)');
	const break2 = useMediaQuery('(min-width: 1100px)');
	const break3 = useMediaQuery('(min-width: 700px)');	
	const break4 = useMediaQuery('(min-width: 450px)');

	if (break1) columns = 5;
	else if (break2) columns = 4;
	else if (break3) columns = 3;
	else if (break4) columns = 2;
	else columns = 1;

	const data = {
		title: "Monke", 
		price: 'Ξ 4200',
		img: "/punk2890.png"
	}

	const data2 = {
		title: "WEKJHDSF",
		price: 'Ξ 420',
		img: "/punk2890.png"
	}
	console.log(shopItems);
	// const itemKeys = Object.keys(shopItems);
	// console.log(itemKeys);
	// // console.log(shopItems[itemKeys[0]]);
	// // console.log(shopItems);
	// for (const ind in itemKeys){
	// 	console.log(itemKeys[ind]);
	// 	console.log(shopItems[itemKeys[ind]]);
	// }

	// const shopList = itemKeys.forEach((key, ind) => <>
	// 	console.log(key);
	// 	<Grid xs={12/columns}>
	// 		<ShopItem data={shopItems[key]}></ShopItem>
	// 	</Grid>	
	// </>)
	// console.log(shopList);


	return (
	<div>
		<HeaderBarSpace/>
		<Text h1 
			css={css.textTitle} 
			weight="bold" 
			size={128}>
			Punk Shop
		</Text>
		<Grid.Container gap={5} justify="flex-start">
			{shopItems.map((shopItem) => <>
				<Grid xs ={12/columns}>
					<ShopItem data={shopItem}></ShopItem>
				</Grid> 
                </>)}
			
		</Grid.Container>
		<HeaderBar active={0}/>
	</div>
  );
}

export async function getStaticProps() {

	let res;
	if (process.env.NODE_ENV === "production"){
		res = await fetch('https://a1-server-tomkan0909-a1-48.vercel.app/api/punks');
	} else {
		res = await fetch('http://localhost:5000/api/punks');
	}

	const shopItems = await res.json();

	return {
		props: {
			shopItems,
		},
	}
}

export default Shop;