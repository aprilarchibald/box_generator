

const DisplayBox = (props) => {
    return (
        <div>
            { props.boxes.map( (color, idx) => 
                <div key={idx} style={{backgroundColor: color, height: 100, width: 100, margin: 15, display: 'inline-block'}}></div>
            )}
        </div>
    )
}
export default DisplayBox;