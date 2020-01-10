import {Container} from "unstated";

export class WikiDataContainer extends Container {

    state = {
        results: []
    }

    addResult = array => {

        console.log(array)

        console.log('.............')



        this.setState({
            results: array
        }, console.log(this.state.results[0]));


    }

}

