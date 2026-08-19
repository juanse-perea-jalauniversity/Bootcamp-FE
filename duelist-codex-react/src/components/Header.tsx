import "./Header.css"

export function Header() {
  return (
    <header className="dc-header">
      <div className="dc-header__inner">
        <span className="dc-header__mark" aria-hidden="true">
          ◈
        </span>
        <div>
          <h1 className="dc-header__title">Duelist Codex</h1>
          <p className="dc-header__tagline">Explore the Yu-Gi-Oh! card catalog</p>
        </div>
      </div>
    </header>
  )
}
