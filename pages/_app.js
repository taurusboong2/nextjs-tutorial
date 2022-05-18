import '../styles/globals.css'
import 'semantic-ui-css/semantic.min.css'
import Top from '../src/component/Top'
import Footer from '../src/component/Footer'


function MyApp({ Component, pageProps }) {

  return  (
    <div  style={{ width: 1000, margin : " 0 auto" }}>
      <Top />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default MyApp

/*
페이지 전환시 레이아웃 유지 가능
페이지 전환시 상태값 유지 가능
componentDidCatch를 이용하여 커스텀 에러 핸들링 가능
추가적인 데이터를 페이지로 주입 가능
글로벌 CSS를 이곳에 선언
 */
