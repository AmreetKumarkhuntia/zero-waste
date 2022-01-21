import './css/landingpage.css';

const Landingpage = () => {
    const image="https://res.cloudinary.com/dke9xzbl6/image/upload/v1641588347/ze-te/8616_Converted_x4pgnk.png";

    return (
        <>
            <div className='Landing_page'>
                <div className='left'>
                    <div className='heading'>
                        Zero Waste
                    </div>
                    <div className='subtitle'>
                        <h4>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc odio in et, lectus sit lorem id integer.
                        </h4>
                    </div>
                    <button>
                        Get Started
                    </button>
                </div>
                <div className='right'>
                    <img src={image} alt="Error Loading this"></img>
                </div>
            </div>
        </>
    );
}

export default Landingpage;