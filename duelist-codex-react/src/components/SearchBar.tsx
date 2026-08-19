import "./SearchBar.css"

type SearchBarProps = {
  value: string
  onChange: (value: string) => void
  onClear?: () => void
  placeholder?: string
  resultLabel?: string
}

export function SearchBar({
  value,
  onChange,
  onClear,
  placeholder = "Search by name, e.g. Dark Magician",
  resultLabel,
}: SearchBarProps) {
  return (
    <section className="dc-search">
      <label className="dc-search__label" htmlFor="dc-search-input">
        Search the catalog
      </label>

      <div className="dc-search__field">
        <span className="dc-search__icon" aria-hidden="true">
          ⌕
        </span>

        <input
          id="dc-search-input"
          className="dc-search__input"
          type="search"
          autoFocus
          autoComplete="off"
          placeholder={placeholder}
          value={value}
          onChange={(event) => onChange(event.target.value)}
        />

        {value && onClear ? (
          <button
            type="button"
            className="dc-search__clear"
            onClick={onClear}
            aria-label="Clear search"
          >
            ×
          </button>
        ) : null}
      </div>

      {resultLabel ? <p className="dc-search__meta">{resultLabel}</p> : null}
    </section>
  )
}
