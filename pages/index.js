import Navbar from '../components/navbar'
import Payment from '../components/payment'
import Value from './value'
import {getStockList} from '../libs/sheets'

export default function Page(data) {
    return (
    <>
    <Navbar />
    <Value data={data}/>
    <Payment />
    

    </>
    )
  }

  export async function getStaticProps() {
    console.log("hey");
    const data = await getStockList();
    return {
      props: {
        data: data, // remove sheet header
      },
      revalidate: 1, // In seconds
    };
}

