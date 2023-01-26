import { useState } from 'react';

const useHeaderData = () => {
	const [isOpen, setIsOpen] = useState(false);

	const HandleOpen = () => {
		setIsOpen(!isOpen);
	};

	return { isOpen, HandleOpen };
};

export default useHeaderData;
