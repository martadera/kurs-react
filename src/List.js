import React from 'react';


const List =(props)=>{
	return (<li key={props.item.id}>
	<strong>{props.item.name}</strong><br />
	Gdzie: {props.item.place}<br />
	Kiedy: {props.item.date}-{props.item.time}
		<button onClick={props.onDeleteClick.bind(this, props.item.id)}>USUŃ</button></li>)

}

export default List;