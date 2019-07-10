import React from 'react';
import {Container} from 'react-bootstrap';


const GameInstructions = props => {
    console.info(props);
    return (
        <Container>
            <div>
                The following app is a game called <b>Ramen Wars</b> (Ramen is a Japanese noodle dish). The game happens in Noodle
                City, where ramen places are very much in fashion and ramen places are opened and shut down
                continuously. 
                <div 
                    style={{color: 'blue', cursor: 'pointer'}} 
                    onClick={e => props.toggleGameInstructions()}
                >
                    {props.moreDetails ? 'Hide' : 'Show'} game instructions
                </div>
            </div>
            {props.moreDetails ?
                <div>
                    The game is based on a 20x20 grid, representing the city, wherein each cell represents a
                    location in the city that either has a ramen place, or does not.
                    The game is played in steps - each step, a new 20x20 grid is generated based on the previous
                    one. The rules to calculate the grid of each step from the previous step’s grid are:
                    <ul>
                        <li>
                            Every cell interacts with its eight neighbours, simultaneously. All ramen place openings
                            and shutdowns happen at simultaneously.
                        </li>
                        <li>
                            Any ramen place in a cell that has fewer than two neighbours cells with ramen places
                            shuts down due to a lack of competition and creative inspiration.
                        </li>
                        <li>
                            Any ramen place in a cell that has more than three neighbours cells with ramen places
                            shuts down due to a lack of customers.
                        </li>
                        <li>
                            Any ramen place in a cell that has exactly two or three neighbours cells with ramen
                            places flourishes and remains in operation.
                        </li>
                    </ul>
                </div>
            : null}
        </Container>
    );
}

export default GameInstructions;