import './stats.css';

const Stats =() =>{
    return(
        <div>
            <div className='stats'>
                <div className='box'>
                    <div className='smallbox'>
                        <img src='https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054982/Feature_Icon_with_circle_2_nvhn9u.svg' alt='icon' className='statsicon'/>
                        <div className='heading'>40+</div>
                        <div className='subheading'>NGOs we worked with</div>
                    </div>
                    <div className='smallbox'>
                        <img src='https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle3_whxif3.svg' alt='icon' className='statsicon'/>
                        <div className='heading'>540+</div>
                        <div className='subheading'>People we reached</div>
                    </div>
                    <div className='smallbox'>
                        <img src='https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle4_sg6n5p.svg' alt='icon' className='statsicon'/>
                        <div className='heading'>300</div>
                        <div className='subheading'>Our representatives</div>
                    </div>
                    <div className='smallbox'>
                        <img src='https://res.cloudinary.com/dguy8qpzi/image/upload/v1636054981/Feature_Icon_with_circle_wzodhy.svg' alt='icon' className='statsicon'/>
                        <div className='heading'>25+</div>
                        <div className='subheading'>Cities we work in</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats;