import React, { Component } from 'react';
import { getAllJokes } from '../util/APIUtils';
import LoadingIndicator from '../common/LoadingIndicator';
import './JokesList.css';

class JokesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            jokes: [],
            isLoading:false
        };
        this.loadJokesList = this.loadJokesList.bind(this);
        this.handleLoadMore =this.handleLoadMore.bind(this);
    }

    loadJokesList() {
        let promise;
    
        promise = getAllJokes();

        if(!promise) {
            return;
        }
        this.setState({
            isLoading: true
        });
        promise            
        .then(response => {
            const jokes = this.state.jokes.slice();

            this.setState({
                jokes: jokes.concat(response.value),
                isLoading: false
            })
        }).catch(error => {
            this.setState({
                isLoading: false
            })
        });  
        
    }
    handleLoadMore() {
        this.loadJokesList();
    }

    componentWillMount() {
        this.loadJokesList();
    }

    render(){
        const JokesViews = [];
        this.state.jokes.forEach((joke) => {
            JokesViews.push(
                <div class="column is-6" key={joke.id}>
                    <div class="card">
                            <div class="card-content">
                              <p class="title">
                                “{joke.joke}”
                              </p>
                            </div>
                    </div>
               </div>      
           
            );            
        });
        return(
            <div>
            <div class="columns is-multiline is-desktop">
                {JokesViews}
            </div>
           
            {
                !this.state.isLoading && this.state.jokes.length>0?(
                    <div className="load-more-jokes"> 
                        <button class="button is-danger" onClick={this.handleLoadMore} disabled={this.state.isLoading}>
                             Load more
                        </button>
                    </div>): null
            }
            {
                this.state.isLoading ? 
                <LoadingIndicator />: null                     
            }
            </div>
            
        )
    }
}
export default JokesList;
