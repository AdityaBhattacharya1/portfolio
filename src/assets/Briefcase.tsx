function BriefcaseIcon({ className }: { className?: string }) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
			className={`feather feather-linkedin ${className}`}
		>
			<rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
			<path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
		</svg>
	)
}

export default BriefcaseIcon
