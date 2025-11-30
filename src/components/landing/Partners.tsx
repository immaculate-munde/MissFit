import React, { useRef, useEffect } from "react";

const partners = [
	{
		name: "Pinehouse Suits",
		logo: "/images/pinehouse.jpg", // Logo in public folder
		url: "https://www.instagram.com/pinehouse.suits/",
	},
	{
		name: "Aspire Africa Clothing",
		logo: "/images/aspireafrica.jpg", // Logo in public folder
		url: "https://www.instagram.com/aspireafricaclothing/",
	},
	// Add more partners here as needed
];

const Partners: React.FC = () => {
	const carouselRef = useRef<HTMLDivElement>(null);

	// Auto-scroll effect
	useEffect(() => {
		const carousel = carouselRef.current;
		if (!carousel) return;
		let scrollAmount = 0;
		const scrollStep = 1; // px per frame
		const interval = setInterval(() => {
			if (
				carousel.scrollWidth - carousel.clientWidth - carousel.scrollLeft <=
				1
			) {
				carousel.scrollLeft = 0; // Reset to start
			} else {
				carousel.scrollLeft += scrollStep;
			}
		}, 20); // Adjust speed here

		return () => clearInterval(interval);
	}, []);

	return (
		<section id="partners" className="py-20 bg-white dark:bg-gray-900">
			<div className="max-w-5xl mx-auto px-4">
				<h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-10">
					Our Brand Partners
				</h2>
				<div
					ref={carouselRef}
					className="flex gap-10 overflow-x-auto scrollbar-hide py-4"
					style={{ scrollBehavior: "smooth" }}
				>
					{partners.map((partner) => (
						<a
							key={partner.name}
							href={partner.url}
							target="_blank"
							rel="noopener noreferrer"
							className="flex flex-col items-center min-w-[180px] group"
						>
							<div className="w-32 h-32 flex items-center justify-center bg-gray-100 dark:bg-gray-800 rounded-xl shadow-md mb-4 overflow-hidden">
								<img
									src={partner.logo}
									alt={partner.name}
									className="w-full h-full object-cover rounded-xl"
									onError={(e) => {
										(e.target as HTMLImageElement).src =
											"https://via.placeholder.com/128x128?text=Logo";
									}}
								/>
							</div>
							<span className="text-lg font-semibold text-gray-700 dark:text-gray-200 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition">
								{partner.name}
							</span>
						</a>
					))}
				</div>
			</div>
		</section>
	);
};

export default Partners;
