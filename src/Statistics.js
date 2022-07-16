import StatisticLine from "./StatisticLine";

const Statistics = (props) => {

    const good = props.good
    const bad = props.bad
    const neutral = props.neutral
    let all = good+neutral+bad
    let average = ((good-bad)/all).toFixed(1)
    let positive = ((good/all)*100).toFixed(1)

    return (
        <div>
            <StatisticLine text={"good"} value={good} />
            <StatisticLine text={"neutral"} value={neutral} />
            <StatisticLine text={"bad"} value={bad} />
            <StatisticLine text={"all"} value={all} />
            <StatisticLine text={"average"} value={average} />
            <StatisticLine text={"positive"} value={positive} />
        </div>
    )
}

export default Statistics;