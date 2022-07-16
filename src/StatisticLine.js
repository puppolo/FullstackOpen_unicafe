const StatisticLine = (props) => {
    
    const text = props.text
    const value = props.value
    
    return (
        <div>
            {text} {value}
        </div>
    )
}

export default StatisticLine