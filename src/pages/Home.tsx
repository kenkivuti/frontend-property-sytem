import '../style/Home.css';
import Layout from '../components/Layout';
import Button from '../components/Button';

export default function Home(){
    return(
        <div className="homepage">
        <Layout/>
        <div className="main-items">
        <h1>welcome to mackaysltd <br></br>real estate</h1>
        <Button children="LOGIN" className='home-button mt-5' redirectTo="/login"/>
        </div>
        </div>
    )
}