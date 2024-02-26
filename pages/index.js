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
    const data = await getStockList();
    return {
      props: {
        data: data,
      },
      revalidate: 1, 
    };
}

