import * as React from 'react';
import PropTypes from 'prop-types';

export class ExampleComponent extends React.Component {

    static propTypes = {
        start: PropTypes.any,
        result: PropTypes.any,
        onHelloEvt: PropTypes.func,
    }

    static defaultProps = {
        start: false
    }

    constructor(props)  {
	    super(props);
        this.state = {
            selectedValue: null,
            values: [
                { value: 1, img: '/images/react-Rock.png', text: 'Rock'},
                { value: 2, img: '/images/react-Paper.png', text: 'Paper'},
                { value: 3, img: '/images/react-Scissors.png', text: 'Scissors'},
            ]
        }
        
    }
    componentDidMount(){
        const start = this.props.start;
        if (start == true) {
            this.play();
        }
    }

    play(){

        let count = 1;
        let intents = 0;
        let procesoID = setInterval(() => {
            if(intents == 20) {
                this.finally(procesoID)
                clearInterval(procesoID); 
                return;
            };
            /*
            */
            this.setState({
                selectedValue: this.state.values.find(x => x.value == count)
            })
            count = count === 3 ? 1 : count + 1;
            intents ++;
        }, 200);
    }
    
    
    finally() { 
        const val = Math.floor(Math.random() * 3) + 1;
        const selectedValue = this.state.values.find(x => x.value == val);
        this.setState({
            selectedValue: selectedValue
        })
        this.sendValue(selectedValue.value)
    }

    sendValue(val) {
        this.props.onHelloEvt({'detail': val});
    }

    render() {
        let text = 'React';
        if(this.props.result == 'winner' || this.props.result == 'loser' || this.props.result  == 'equal'){
            switch (this.props.result) {
                case 'winner':
                    text = 'YES! I\'m the best'
                    break;
                case 'loser':
                    text = 'Ohh... :('
                    break;
                case 'equal':
                    text = 'I\'m ready to play again'
                    break;
            }
        }
        return (
            <div>
                <img src={this.state.selectedValue? this.state.selectedValue.img : '/images/react.png'} alt="React" className="logo mx-auto d-block" />
                <hr></hr>
                <h2 className="text-center">{text}</h2>
            </div>
            )
        }
    }
