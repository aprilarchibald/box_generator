import react, { useState } from 'react';

    
const ColorForm = (props) => {
    const [color, setColor] = useState("");
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.newBox( color );
        setColor("");
    };
    
    return (
        <div>
            <form onSubmit={ handleSubmit }>
                <label htmlFor="color">Color:</label>
                <input onChange={ (e) => setColor(e.target.value) } value={ color }/>
                <input type="submit" value="Add" />
            </form>
        
        </div>
    );
};
    
export default ColorForm;