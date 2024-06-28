const List = ({ subjects }) => {
	// console.log(subjects);
	return (
		<>
			<div>
                😃
				<ul>
					{subjects.map((subject, i) => (
						<li key={i}>{subject}</li>
					))}
				</ul>
			</div>
		</>
	);
};

export default List;
