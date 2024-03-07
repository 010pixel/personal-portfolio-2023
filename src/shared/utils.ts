export function scrollToTargetAdjusted(targetElement: string) {
	const element = document.getElementById(targetElement) as any;
	const headerOffset = 10;
	const elementPosition = element.getBoundingClientRect().top;
	const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

	window.scrollTo({
		top: offsetPosition,
		behavior: 'smooth',
	});
}

export default {
	scrollToTargetAdjusted,
};
