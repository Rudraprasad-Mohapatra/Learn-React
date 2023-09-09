import useDebounce from "../../hooks/useDebounce"
import "./Search.css"
export default function Search({ updateSearchTerm }) {
    const debouncedCallback = useDebounce((e) => updateSearchTerm(e.target.value), 2000);
    return (
        <div className="search-wrapper">
            <input
                id="pokemon-name-search"
                type="text"
                placeholder="Pokemon name..."
                onChange={debouncedCallback} />
        </div>
    )
}