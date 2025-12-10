interface Props {
    value: string,
    onChange: React.Dispatch<React.SetStateAction<string>>,
}

export default function Header({value, onChange}: Props) {
    return (
        <header>
				<h1>Recipe Searcher</h1>
				<label htmlFor="searchField">Search</label>
				<input
					type="search"
					name="query"
					id="searchField"
					className="border border-solid border-black"
					value={value}
					onChange={(e) => {
						onChange(e.target.value);
					}}
				/>
			</header>
    );
}