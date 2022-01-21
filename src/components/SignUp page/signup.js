import './css/sign_up.css';

const Sign_up = (props) => {

    function cross() {
        props.setSignuppageloaded(false);
    }

    return (
        <div className='signup_out'>
            <div className="signup">
                <div className='cross'>
                    <button onClick={() => cross()}>
                        <img src='https://res.cloudinary.com/dzbdnlr0f/image/upload/v1641653680/zete/cross_rbjuqe.png' alt='cross'></img>
                    </button>
                </div>
                <div className='form'>
                    <div className="left">
                        <ul>
                            <li>Email :</li>
                            <li>Password :</li>
                            <li>Verify Password:</li>
                        </ul>
                    </div>
                    <div className="right">
                        <ul>
                            <li><input className="email"></input></li>
                            <li><input type="password" className="password"></input></li>
                            <li><input type="password" className="password"></input></li>
                        </ul>
                    </div>
                </div>
                <div className='forgot_password'>
                    <a href='https://www.google.com'>Forgot Password ?</a>
                </div>
            </div>
        </div>
    );
}

export default Sign_up;