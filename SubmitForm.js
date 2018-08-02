import React from 'react';
import PropTypes from 'prop-types';

const SubmitForm = (props)=>{
	
	return (
		<form onSubmit={props.onFormSubmit}>
		<input type='text' placeholder='nazwa..' value={props.name} onChange={props.onFieldChange.bind(this, 'newName')} />
		<input type='text' placeholder='miejsce..' value={props.place} onChange={props.onFieldChange.bind(this, 'newPlace')} />
		<input type='text' placeholder='data..' value={props.date} onChange={props.onFieldChange.bind(this, 'newDate')}/>
		<input type='text' placeholder='godzina..' value={props.time} onChange={props.onFieldChange.bind(this, 'newTime')} />
		<button type='submit'>Dodaj!</button>
		</form>
		
	
	)
	
	
}

SubmitForm.propTypes={
	name: PropTypes.string.isRequired,
	place: PropTypes.string.isRequired,
	date: PropTypes.string.isRequired,
	time: PropTypes.string.isRequired,
onFieldChange: PropTypes.func.isRequired, 
	onFormSubmit: PropTypes.func.isRequired
}

export default SubmitForm;