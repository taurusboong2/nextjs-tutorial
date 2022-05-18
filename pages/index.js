import { useEffect, useState } from 'react'
import axios from 'axios'
import Head from 'next/head'
import ItemList from '../src/component/ItemList'
import { Header, Divider } from 'semantic-ui-react'


export default function Home() {
  const API_URL = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline"

  const [list, setList] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  const getData = async () => {
    await axios.get(API_URL)
    .then(res => {
      console.log(`res : `, res)
      setList(res.data)
      setIsLoading(false);
    })
  }

  useEffect(() => {
    getData();
  }, [])

  return (
      <div>
      <Head>
        <title>Home | TauBoong</title>
      </Head>
      <Header as="h3" style={{ paddingTop: 40 }}>베스트 상품</Header>
      <Divider />
      <ItemList list={list.slice(0, 9)} />
      <Header as="h3" style={{ paddingTop: 40 }}>신상품</Header>
      <Divider />
      <ItemList list={list.slice(9)} />
      </div>
  )
}
