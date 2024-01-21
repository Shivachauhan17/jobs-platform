import './css/landing.css'
import LandingHeading from '../components/LandingHeading';
import LandingNavigateButtons from '../components/LandingNavigateButtons';

const Home=()=>{

    return(
        <div className='ladingPageContainer'>
            <LandingHeading/>
            <div className='landingPageMainCard'>
                <div className='landingPageSubCard landingPageSubsImage'>
                    {/* <img/> */}
                </div>
                <LandingNavigateButtons/>
            </div>

        </div>
    )
}

export default Home