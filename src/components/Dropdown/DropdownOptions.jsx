export const DropdownOptions = ({options, highlightedIndex, selectedIndex, eventListeners}) => {
    const {onOptionHover, onOptionClick} = eventListeners;
    return (<>
        {options.map((el, i) => {
            return (<li key={i}
                        aria-selected={i === selectedIndex}
                        data-value={el.value ? el.value : el.name}
                        onMouseOver={(e) => {
                            onOptionHover(e);
                        }}
                        onClick={(e) => {
                            onOptionClick(e);
                        }}
                        style={{'--index': i}}
                        className={'option' + (i === highlightedIndex ? ' highlight' : '')}
                        role="option">{el.name}</li>)
        })}
    </>)
}
