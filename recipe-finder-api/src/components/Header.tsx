interface Props {
	value: string;
	onChange: React.Dispatch<React.SetStateAction<string>>;
}

export default function Header({ value, onChange }: Props) {
	return (
		<header
            className="flex flex-col flex-nowrap p-4 items-center"
        >
			<h1
                className="text-4xl text-center font-semibold mb-4"
            >
                Recipe Searcher
            </h1>
            <div
                className="flex flex-col items-center justify-center px-4 w-1/3 min-w-3xs"
            >
                <label htmlFor="searchField"
                    className="mb-1 text-xl"
                >
                    Search
                </label>
                <input
                    type="search"
                    name="query"
                    id="searchField"
                    className="bg-gray-100 hover:bg-gray-50/90 [box-shadow:0_1px_2px_rgba(0,0,0,0.5)] rounded-lg px-2 py-1 w-[90%] focus-visible:bg-gray-50/90 focus-visible:[box-shadow:0_2px_2px_rgba(0,0,0,0.75)] focus-visible:outline-0 transition"
                    value={value}
                    onChange={(e) => {
                        onChange(e.target.value);
                    }}
                />
            </div>
		</header>
	);
}
