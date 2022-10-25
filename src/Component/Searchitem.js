import React, { useState } from 'react';
import Carditem from './Carditem';
import { Link } from 'react-router-dom';
import lens from '../icons/lens.png';
import Spinner from './Spinner';

export default function Searchitem() {
	const [searchBook, setsearchBook] = useState();
	const [value, setvalue] = useState('');
	const [loader, setloader] = useState(false);

	const api = 'https://reactnd-books-api.udacity.com';
	// Generate a unique token for storing your bookshelf data on the backend server.
	let token = localStorage.token;
	if (!token)
		token = localStorage.token = Math.random().toString(36).substr(-8);

	const headers = {
		Accept: 'application/json',
		Authorization: token,
	};

	const handleChange = e => {
		setvalue(e.target.value);
		setloader(true);
		search(e.target.value);
	};

	const search = async query => {
		console.log(query, 'pant', 24);
		try {
			let data = await fetch(`${api}/search`, {
				method: 'POST',
				headers: {
					...headers,
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ query }),
			});
			let parsedData = await data.json();
			setsearchBook(parsedData.books);
			setloader(false);
		} catch (error) {
			console.log(error);
			// alert(error);
		}
	};
	return (
		<div>
			<div className='search-books'>
				<div className='search-books-bar'>
					<Link to='/'>
						<button className='close-search'>Close</button>
					</Link>
					<div className='search-books-input-wrapper'>
						<input
							type='text'
							placeholder='Search by title or author'
							onChange={handleChange}
						/>
					</div>
				</div>
			</div>
			<div className='container my-3 search-books-results '>
				<div className='row'>
					{loader && <Spinner />}
					{!loader &&
						value !== '' &&
						Array.isArray(searchBook) &&
						searchBook.map(element => {
							return (
								<div className=' my-3 col-md-2 ' key={element.id}>
									<Carditem
										title={element.title}
										authors={element.authors}
										imageLinks={element.imageLinks}
										shelf={'None'}
										id={element.id}
									/>
								</div>
							);
						})}
					{value !== '' && !Array.isArray(searchBook) && !loader && (
						<div className='text-center img-lens'>
							<img src={lens} alt='lens' />
							<h4>Sorry we couldn't find any matches</h4>
							<h6>Please try searching with another term</h6>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
