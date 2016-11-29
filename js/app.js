//utils
function formatDate(date) {
    return date.toLocaleDateString();
}



function Components(props){

    const {author, text, date} = {...props}

    return (
        <div className="comment">
            <div className="comment__user">
                <div className="user__name">{author.name}</div>
                <div className="user__img"><img src={author.avatarUrl} alt=""/></div>
            </div>
            <div className="comment__text">{text}</div>
            <div className="comment__date">{formatDate(date)}</div>
        </div>
    )
}

function App (){
    return (
            <div>
                <Clock/>
                <Clock/>
                <Clock/>
                <Clock/>
            </div>
        )
}

const comment = {
    date: new Date(),
    text: 'I hope you enjoy learning React!',
    author: {
        name: 'Hello Kitty',
        avatarUrl: 'http://placekitten.com/g/200/300'
    }
};

class Clock extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick(){
        this.setState({date: new Date()})
    }

    render (){
        return (
            <div>
                <h1>Hello, world!</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
            </div>
        )
    }
}

class ButtonClick extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn : true
        };

    }

    handleClick(){

        this.setState(prevState =>({
            isToggleOn : !prevState.isToggleOn
        }))
    }

    render(){
        return (
            <button onClick={this.handleClick.bind(this)}>
                {!this.state.isToggleOn ? 'No' : 'Yes'}
            </button>
        )
    }
}

class LoginControl extends React.Component {
    constructor(props){
        super(props);
        this.state = {isLoggendIn : false};
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.handleLoginClick = this.handleLoginClick.bind(this);
    }

    handleLoginClick(){
        this.setState({isLoggendIn : true});
    }

    handleLogoutClick(){
        this.setState({isLoggendIn : false});
    }

    render(){
        const isLoggendIn = this.state.isLoggendIn;

        let button;

        if(isLoggendIn){
            button = <button onClick={this.handleLogoutClick} >Logout</button>

        }else{

            button = <button onClick={this.handleLoginClick}>Login</button>
        }

        return (button)
    }
}

function WarningBanner(props){
    if(!props.warn){
        return null
    }

    return (
        <div className="warning">
            Warning!
        </div>
    )
}

class Page extends React.Component{
    constructor(props){
        super(props);
        this.state = {showWarning : true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick(){
        this.setState( prevState => ({
            showWarning : !prevState.showWarning
        }))
    }

    render (){
        return (
            <div>
                <WarningBanner warn={this.state.showWarning} />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Show' : 'Hide'}
                </button>
            </div>
            )
    }

}


ReactDOM.render(
    <Page />,
    document.getElementById('root')
);