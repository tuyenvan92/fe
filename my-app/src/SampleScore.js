import { Fragment } from "react"

export default function SampleScore() {
    const renderScore = score => {
        if (score>3 && score <5) {
            return (
                <div>Trung Binh</div>
            )
        }
        if (score>6 && score<8) {
            return (
                <div>Kha</div>
            )
        }
        if (score>=9) {
            return (
                <div>Gioi</div>
            )
        }
        return (
            <div>Yeu</div>
        )
    }
    return (
        <Fragment>
            <h1> Sample Score </h1>
            {renderScore(7)}
        </Fragment>
    )
}