import { useEffect, useState } from 'react'
import Axios from 'axios'
import Head from 'next/head'
import ItemList from '../src/component/ItemList'
import { Header, Divider, Loader  } from 'semantic-ui-react'
import styles from "../styles/Home.module.css";


export default function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [list, setList] = useState([]);
  const [ isLoading, setIsLoading ] = useState(true);

  function getData() {
    Axios.get(API_URL).then((res) => {
      console.log(res.data);
      setList(res.data);
      setIsLoading(false);
    });
  }

  useEffect(() => {
    getData();
  }, [])

  return (
      <div>
      <Head>
        <title>Home | TauBoong</title>
        <meta name="description" content=" 타우붕 홈입니다."></meta>
      </Head>
      {isLoading && (
        <div style={{ padding: "300px 0" }}>
          <Loader inline="centered" active>
            Loading
          </Loader>
        </div>
      )}
      {!isLoading && (
        <>
          <Header as="h3" style={{ paddingTop: 40 }}>
            베스트 상품
          </Header>
          <Divider />
          <ItemList list={list.slice(0, 9)} />
          <Header as="h3" style={{ paddingTop: 40 }}>
            신상품
          </Header>
          <Divider />
          <ItemList list={list.slice(9)} />
        </>
      )}
      </div>
  )
}
