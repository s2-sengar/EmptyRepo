import ReactDOM from 'react-dom/client'
import { Body } from './components/body/body.component';
import { Footer } from './components/footer/footer.component';
import { Header } from './components/header/header.component';


import  './styles.scss';
const root=ReactDOM.createRoot(document.getElementById('root'));

const App=()=>(
    <>
        <Header/>
        <Body/>
        <Footer/>
    </>
)

root.render(<App/>)