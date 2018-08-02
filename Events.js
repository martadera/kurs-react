import React from 'react';
import events from './data/events.json';
import List from './List.js'
import EventFilters from './EventFilters.js'
import SubmitForm from './SubmitForm.js'

class Component extends React.Component {
	
	constructor(props){
		super(props);
		this.state={
			events:[],
			filter:'',
			newName:'',
			newPlace:'',
			newDate:'',
			newTime:'',
		}
	}
	
	componentDidMount(){
		this.setState({events})
	}
	
	onButtonClicked=(event)=> {
		event.preventDefault;
		this.setState({events:[]})
	}
	
	onDeleteClick(itemId, event){
		event.preventDefault();
		const filteredArray = this.state.events.filter(item => item.id !== itemId);
		
		this.setState({
			events:filteredArray
		});
		
	}
	
	onFilterChange(event){
		const value = event.currentTarget.value

		
		this.setState({
			filter:value
		});
			
	}
	
	onFieldChange(field, event){
		const value= event.currentTarget.value;
		
		this.setState({
			[field]: value
		})
		
	}
	
	onFormSubmit(event){
		event.preventDefault();
		const {
			events,
			newName,
			newPlace,
			newDate,
			newTime
		} = this.state;
		
		const maxId = Math.max(...events.map(item=>item.id));
		events.push({
			id: maxId+1,
			name: newName,
			place: newPlace,
			date: newDate,
			time: newTime
		});
		this.setState({
			events
			
		});
		
	}
	
	render() {	
return(
<div>
<EventFilters filter={this.state.filter} onFilterChange={this.onFilterChange.bind(this)}/>
  <ul>
    {this.state.events.map((item) => {
		const date = new Date(item.date);
		if (date>=Date.now() && item.name.toLowerCase().indexOf(this.state.filter)>-1 ){
			return (<List item={item} onDeleteClick={this.onDeleteClick.bind(this)} />);
		} return null;
		
			  
    })}
  </ul><button onClick={this.onButtonClicked}>WYCZYŚĆ</button>
  <SubmitForm onFormSubmit={this.onFormSubmit.bind(this)} name={this.state.newName} place={this.state.newPlace} 
  date={this.state.newDate} time={this.state.newTime} 
  onFieldChange={this.onFieldChange.bind(this)} />
  
  </div>
);
	
}}


export default Component;

































