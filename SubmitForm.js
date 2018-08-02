import React from 'react';
import PropTypes from 'prop-types';

const SubmitForm = (props)=>{
	
	return (
		<form onSubmit={props.onFormSubmit}>
		<input id='name' type='text' placeholder='nazwa..' value={props.name} onChange={props.onFieldChange.bind(this, 'newName')} />
		<label style={props.nameValid? {display:'none'}:{display:'inline'}} htmlFor='name'>Pole jest wymagane!</label><br />
		<input id='place' type='text' placeholder='miejsce..' value={props.place} onChange={props.onFieldChange.bind(this, 'newPlace')} />
		<label style={props.placeValid? {display:'none'}:{display:'inline'}} htmlFor='place'>Pole jest wymagane!</label><br />
		<input id='date' type='text' placeholder='data..' value={props.date} onChange={props.onFieldChange.bind(this, 'newDate')}/>
		<label style={props.dateValid? {display:'none'}:{display:'inline'}} htmlFor='date'>Pole jest wymagane!</label><br />
		<input id='time' type='text' placeholder='godzina..' value={props.time} onChange={props.onFieldChange.bind(this, 'newTime')} />
		<label style={props.timeValid? {display:'none'}:{display:'inline'}} htmlFor='time' >Pole jest wymagane!</label><br />
		<button type='submit'>Dodaj!</button>
		</form>
	
	)
	
}

SubmitForm.propTypes={
	name: PropTypes.string.isRequired,
	place: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
	nameValid: PropTypes.bool.isRequired,
	placeValid: PropTypes.bool.isRequired,
	dateValid: PropTypes.bool.isRequired,
	timeValid: PropTypes.bool.isRequired,
	
onFieldChange: PropTypes.func.isRequired, 
	onFormSubmit: PropTypes.func.isRequired
}

export default SubmitForm;