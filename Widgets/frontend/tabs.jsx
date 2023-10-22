import React from 'react';

const Header = ({panes, onTabChosen, selectedIdx}) => (
    <ul className='tabs-headers'>
        {panes.map((pane, idx) => {
            const status = (idx === selectedIdx) ? 'active' : '';
            return (
                <li key={idx} onClick={() => onTabChosen(idx)} className={status}>
                    {pane.title}
                </li>
            )
        })}
    </ul>
)

export default class Tabs extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectedIdx: 0};

        this.selectTab = this.selectTab.bind(this);
    }

    selectTab(num) {
        this.setState({selectedIdx: num});
    }

    render() {
        const { panes } = this.props;
        const { selectedIdx } = this.state;

        return (
            <div className='tabs-widget'>
                <h1>Tabs</h1>
                <div className='tabs-container'>
                    <Header 
                        panes={panes}
                        onTabChosen={this.selectTab}
                        selectedIdx={selectedIdx}
                    />
                    <article className='tabs-content'>
                        {panes[selectedIdx].content}
                    </article>
                </div>
            </div>
        )
    }
}
