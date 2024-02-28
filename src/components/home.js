import React, {useState} from 'react';
import { IoArrowRedoOutline } from "react-icons/io5";
import Learnmore from './learnmore';


const Home = () => {

    const [showLearnMore, setShowLearnMore] = useState(false);

    const toggleLearnMore = () => {
        setShowLearnMore(!showLearnMore);
    };

    return (
        <div className='home'>

            <p>
                Web Developer Internship Opportunities at Cognifyz Technologies
            </p>

            <div className='intro'>

                <h2>
                    Overview
                </h2>

                <div>
                    Cognifyz Technologies is a leading technology company that
                    specializes in the dynamic field of data science and excels in
                    delivering impactful projects and solutions.
                    The company offers a wide range of products and services,
                    including artificial intelligence (AI), machine learning (ML), and
                    data analytics tools.
                    Cognifyz Technologies also provides training programs to
                    enhance skills and knowledge in these areas.
                    The company focuses on delivering innovative and cutting-edge
                    solutions to meet the evolving needs of businesses
                </div>

            </div>

            <div className='perks'>

                <h2>
                    Perks
                </h2>

                <div>
                    <div className='alignment'>
                        <IoArrowRedoOutline style={{textAlign:'center'}} />
                        <span>
                            Offer Letter from Cognifyz Technologies
                        </span>
                    </div>
                    <div className='alignment'>
                        <IoArrowRedoOutline />
                        <span>
                            Internship Certificate
                        </span>
                    </div>
                    <div className='alignment'>
                        <IoArrowRedoOutline />
                        <span>
                            Resume Building Support
                        </span>
                    </div>
                    <div className='alignment'>
                        <IoArrowRedoOutline />
                        <span>
                            Letter of recommendation based on Performance
                        </span>
                    </div>
                </div>
                <button className='learn-btn' onClick={toggleLearnMore}>
                    Learn more
                </button>
                {showLearnMore && <Learnmore />}
            </div>

        </div>
    )
}

export default Home;