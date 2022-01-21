import './css/ngos.css';
import NgoCard from './ngoCard';
import ngoData from './ngodata';

const Ngo_page = () => {
    return ( 
        <>
            <div className='ngos'>
                <div className='textsection'>
                    <h1>NGO’S WORKING WITH US</h1>
                </div>
                <div className='underline'>

                </div>
                <div className='cardssection'>
                    <div className='cards'>
                        {
                            ngoData.map(function ncards(val){
                                return(
                                    <NgoCard
                                        image={val.image}
                                        name={val.name}
                                        location={val.location}
                                    />
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Ngo_page;