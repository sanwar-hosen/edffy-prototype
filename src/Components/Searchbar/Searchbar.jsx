import React, { useRef, useEffect } from "react";

export default function SearchBar() {
	const [expanded, setExpanded] = React.useState(false);
    const [searchText, setSearchText] = React.useState("");
    const inputRef = useRef(null);

    const toggleExpanded = () => {
        if (expanded && searchText) {

            // Submit logic here
            console.log("Submitting search:", searchText);
        } else {
            setExpanded(!expanded);
            setTimeout(() => {
                inputRef.current.focus();
            }, 100);
        }
    };

    // useEffect(() => {
    //     if (expanded && inputRef.current) {
            
    //     }
    // }, [expanded]);

    const handleChange = (e) => {
        setSearchText(e.target.value);
    };

	return (
        <div className={ `relative `}>
			<button
				onClick={toggleExpanded}
                className="focus:outline-none flex items-center "
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7 z-20 transition-transform "
                    fill="currentColor"
					stroke="currentColor"
					x="0px"
					y="0px"
					viewBox="0 0 48 48"
				>
					<path d="M 20.5 6 C 12.509634 6 6 12.50964 6 20.5 C 6 28.49036 12.509634 35 20.5 35 C 23.956359 35 27.133709 33.779044 29.628906 31.75 L 39.439453 41.560547 A 1.50015 1.50015 0 1 0 41.560547 39.439453 L 31.75 29.628906 C 33.779044 27.133709 35 23.956357 35 20.5 C 35 12.50964 28.490366 6 20.5 6 z M 20.5 9 C 26.869047 9 32 14.130957 32 20.5 C 32 23.602612 30.776198 26.405717 28.791016 28.470703 A 1.50015 1.50015 0 0 0 28.470703 28.791016 C 26.405717 30.776199 23.602614 32 20.5 32 C 14.130953 32 9 26.869043 9 20.5 C 9 14.130957 14.130953 9 20.5 9 z">
                    </path>
				</svg>
			</button>
			<input
				type="text"
				placeholder="search"
                    className={ `z-10 py-1 pl-4 pr-8 border border-gray-900 transition-all duration-300 rounded-full  absolute bg-transparent  top-1/2 -translate-y-1/2 right-0
          ${expanded ? "opacity-100 w-48 visible" : "opacity-0 w-0 invisible"}` }
                value={ searchText }
                onChange={ handleChange }
                ref={ inputRef }
                
			/>
        </div>
	);
}