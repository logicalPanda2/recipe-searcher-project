interface Props {
	page: number;
    nextDisabled: boolean;
    prevDisabled: boolean;
	onPrevious: () => void;
	onNext: () => void;
}

export default function Pagination({ page, nextDisabled, prevDisabled, onPrevious, onNext }: Props) {
	return (
		<div 
            className="flex grow flex-row justify-center items-center gap-4 sm:gap-8 sm:pt-12 pt-4"
        >
			<button
				onClick={onPrevious}
				className="bg-gray-100 [box-shadow:0_1px_2px_rgba(0,0,0,0.5)] focus-visible:[box-shadow:0_2px_3px_rgba(0,0,0,0.75)] focus-visible:outline-0 transition hover:bg-gray-50 focus-visible:bg-gray-50 rounded-lg w-24 py-2 disabled:bg-gray-300 disabled:text-gray-500 disabled:[box-shadow:none]"
                disabled={prevDisabled}
			>
				Previous
			</button>
			<p className="text-xl">{page}</p>
			<button
				onClick={onNext}
				className="bg-gray-100 [box-shadow:0_1px_2px_rgba(0,0,0,0.5)] focus-visible:[box-shadow:0_2px_3px_rgba(0,0,0,0.75)] focus-visible:outline-0 transition hover:bg-gray-50 focus-visible:bg-gray-50 rounded-lg w-24 py-2 disabled:bg-gray-300 disabled:text-gray-500 disabled:[box-shadow:none]"
                disabled={nextDisabled}
			>
				Next
			</button>
		</div>
	);
}
