interface Props {
	page: number;
	onPrevious: () => void;
	onNext: () => void;
}

export default function Pagination({ page, onPrevious, onNext }: Props) {
	return (
		<div 
            className="flex grow flex-row justify-center items-center gap-4 sm:gap-8 sm:pt-12 pt-4"
        >
			<button
				onClick={onPrevious}
				className="border border-solid border-black rounded-lg w-24 py-2"
			>
				Previous
			</button>
			<p>{page}</p>
			<button
				onClick={onNext}
				className="border border-solid border-black rounded-lg w-24 py-2"
			>
				Next
			</button>
		</div>
	);
}
