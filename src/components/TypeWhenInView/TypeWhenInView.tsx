import React from 'react';
import { Typewriter } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';
import { ReactFCC } from '../../interface/react';

interface TypeWhenInViewProps {
	text: string;
	once?: boolean;
}

const TypeWhenInView: ReactFCC<TypeWhenInViewProps> = ({ text, once }) => {
	const { ref, inView } = useInView({
		threshold: 0,
		triggerOnce: !!once,
	});
	return <span ref={ref}>{inView && <Typewriter words={[text]} />}</span>;
};

export default TypeWhenInView;
