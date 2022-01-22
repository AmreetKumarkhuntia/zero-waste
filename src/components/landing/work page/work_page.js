import './css/Workpage.css';
import quotes from './css/Quote Mark.svg';

import { tweets } from './tweets';
import { useState } from 'react';
import left_arrow from './css/Left Arrow.svg';
import right_arrow from './css/Right Arrow.svg';

const Work_page = () => {

    const max_index=2;

    const [index, setIndex] = useState(0);

    function next(){
        let temp=index;
        if(temp<max_index)
            temp++;
        setIndex(temp);
    }
    function prev(){
        let temp=index;
        if(temp>0)
            temp--;
        setIndex(temp);
    }

    return (
        <>
            <div className="Work_page">
                <div className="left">
                    <div>
                        <div className='heading'>Why we work?</div>
                        <div className='subheading'>Our inspiration</div>
                    </div>
                </div>
                <div className="right">
                    <div className='tweets'>
                        <div className='quotes'><img src={quotes} alt='error loading'></img></div>
                        <div className='tweet'>
                            <div className='head'>
                                <img className='icon' src={tweets[index].icon} alt="error loading"></img>
                                <div>
                                    <div className='name'>
                                        {tweets[index].name}
                                    </div>
                                    <div className='work'>
                                        {tweets[index].work}
                                    </div>
                                </div>
                            </div>
                            <div className='sub_head'>
                                {tweets[index].description}
                            </div>
                        </div>
                        <div className='navigation_button'>
                            <button className='goright' onClick={()=>{
                                next();
                            }}><img src={right_arrow} alt="error"></img></button>
                            <button className='goleft'onClick={()=>{
                                prev();
                            }} ><img src={left_arrow} alt="error"></img></button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Work_page;