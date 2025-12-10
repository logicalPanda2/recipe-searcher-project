interface Props {
	page: number;
	onPrevious: () => void;
	onNext: () => void;
}

export default function Pagination({ page, onPrevious, onNext }: Props) {
	return (
		<div>
			<button
				onClick={onPrevious}
				className="border border-solid border-blue-500"
			>
				Previous
			</button>
			<p>{page}</p>
			<button
				onClick={onNext}
				className="border border-solid border-blue-500"
			>
				Next
			</button>
		</div>
	);
}
