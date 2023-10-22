import React from "react";

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {time: new Date()};

        this.tick = this.tick.bind(this);
    }

    zeroPad(num) {
        return num < 10 ? `0${num}`: num;
    }
    
    tick() {
        this.setState({time: new Date()});
    }

    componentDidMount() {
        this.timerID = setInterval(this.tick, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        const { time } = this.state;
        const [hour, minutes, seconds] = [
            this.zeroPad(time.getHours()),
            this.zeroPad(time.getMinutes()),
            this.zeroPad(time.getSeconds())
        ];

        return (
        <div className="clock-widget">
            <h1>Clock</h1>
            <div className="clock-container">
                <div className="time">
                    <p>Time:</p>
                    <p>{hour}:{minutes}:{seconds} EST</p>
                </div>
                <div className="date">
                    <p>Date:</p>
                    <p>{time.toDateString()}</p>
                </div>
            </div>
        </div>
        )
    }
}

export default Clock;