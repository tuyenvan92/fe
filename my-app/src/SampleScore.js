import  {useState} from "react";
import myStyles from './myStyle1.module.css'
import clsx from 'clsx';

export default function SampleScore() {
    // const renderScore = score => {
    //     if (score>3 && score <5) {
    //         return (
    //             <div>Trung Binh</div>
    //         )
    //     }
    //     if (score>6 && score<8) {
    //         return (
    //             <div>Kha</div>
    //         )
    //     }
    //     if (score>=9) {
    //         return (
    //             <div>Gioi</div>
    //         )
    //     }
    //     return (
    //         <div>Yeu</div>
    //     )
    // }
    const [count, setCount] = useState(1)

    return (
        <div>
                        {/* <h1> Sample Score </h1>
            {renderScore(7)}

            <h2 className={myStyles.title}>Sample Scores</h2>
            this is sample score */}

            {/* <div className={age > 18 ? 'adults' : 'children'}></div> */}

        <h3 
            className={clsx(
                'h2-container', 
                myStyles.title, 
                count > 5 ? 'black' : 'white'
                )}
            >
                    Sample Scores
            </h3>
        </div>




        
    )
}