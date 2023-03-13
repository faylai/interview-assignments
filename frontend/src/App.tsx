import './App.css';
import Carousel from './Carousel'

function App() {
    console.log("render in app")
    return <div className='App'>
        <Carousel className='22'>
            <div>
                <h1>this the header </h1>
                <p> 1为了中华崛起而读书 </p>
            </div>
            <div>
                <h1>this the header </h1>
                <p> 2为了中华崛起而读书 </p>
            </div>
            <div>
                <h1>this the header </h1>
                <p> 3为了中华崛起而读书 </p>
            </div>
            <div>
                <h1>this the header </h1>
                <p> 4为了中华崛起而读书 </p>
            </div>
            <div>
                <h1>this the header </h1>
                <p> 5为了中华崛起而读书 </p>
            </div>
            <div>
                <h1>this the header </h1>
                <p> 6为了中华崛起而读书 </p>
            </div>
        </Carousel>
    </div>
}

export default App;
