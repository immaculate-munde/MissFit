import React from "react";
import { motion } from "framer-motion";

const testimonials = [
	{
		name: "Zawadi M.",
		text: "I finally ordered jeans online that fit perfectly!",
	},
	{
		name: "Brian K.",
		text: "Tailoring made so easy — no more tape measure struggles.",
	},
	{
		name: "Aisha R.",
		text: "Accurate and simple. Love how MissFit works.",
	},
];

const Testimonials: React.FC = () => {
	return (
		<section className="py-20 px-6 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 transition-colors duration-300">
			<div className="max-w-7xl mx-auto">
				<motion.h2
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					viewport={{ once: true }}
					className="text-3xl md:text-4xl font-extrabold text-center text-gray-900 dark:text-white mb-4"
				>
					What Our Users Say
				</motion.h2>

				<motion.p
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					viewport={{ once: true }}
					className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto"
				>
					Real feedback from users who've transformed their shopping experience
					with MissFit
				</motion.p>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.blockquote
							key={testimonial.name}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							whileHover={{ y: -5, scale: 1.02 }}
							className="p-6 lg:p-8 rounded-2xl bg-white dark:bg-gray-800 shadow-lg hover:shadow-xl dark:shadow-gray-900/20 border border-gray-200 dark:border-gray-700 transition-all duration-300"
						>
							<div className="flex items-start mb-4">
								<div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white font-bold text-lg">
									{testimonial.name.charAt(0)}
								</div>
								<div className="ml-4 flex-1">
									<div className="flex text-yellow-400 mb-2">
										{[...Array(5)].map((_, i) => (
											<svg
												key={i}
												className="w-4 h-4 fill-current"
												viewBox="0 0 20 20"
											>
												<path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
											</svg>
										))}
									</div>
								</div>
							</div>

							<p className="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
								"{testimonial.text}"
							</p>

							<footer className="text-sm font-medium text-purple-600 dark:text-purple-400">
								— {testimonial.name}
							</footer>
						</motion.blockquote>
					))}
				</div>
			</div>
		</section>
	);
};

export default Testimonials;
