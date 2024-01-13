import {Link} from 'react-router-dom'

const Home=()=>{

    return(
        <div>
            <div>
                <div><Link to='login'>Login</Link></div>
                <div><Link to='register'>Signup</Link></div>
            </div>

        </div>
    )
}

export default Home