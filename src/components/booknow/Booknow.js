import './css/booknow.css';
import Bookedslots from '../slotsbooked/Bookedslots';

const Booknow = () => {
    return ( 
        <>
            <div className="booknow">
                <div className='heading'><h1>BOOK NOW</h1></div>
                <div className='details'>
                    <div className='left'>
                        <ul>
                            <li>Pincode :</li>
                            <li>Location :</li>
                            <li>City :</li>
                            <li>State :</li>
                        </ul>
                    </div>
                    <div className='right'>
                        <ul>
                            <li><input placeholder='000000'></input></li>
                            <li><input placeholder='location'></input></li>
                            <li><input placeholder='city'></input></li>
                            <li><input placeholder='state'></input></li>
                        </ul>
                    </div>
                </div>
                <Bookedslots />
            </div>
        </>
     );
}
 
export default Booknow;