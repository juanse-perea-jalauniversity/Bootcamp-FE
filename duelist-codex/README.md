# DuelistCodex

## HU-01 — Ver catálogo de cartas

> Como duelista que abre la aplicación, quiero ver una grilla con las cartas disponibles, incluyendo su imagen, nombre y tipo, para poder explorar el catálogo general antes de buscar algo específico. **Criterios de aceptación**:
> * Al cargar la vista principal se muestra un conjunto de cartas obtenidas desde la API de YGOPRODeck.
> * Cada carta en la grilla muestra al menos su imagen, nombre y tipo.
> * Si por alguna razón no hay cartas para mostrar, la persona usuaria ve un mensaje claro en vez de una pantalla en blanco.
> * Mientras los datos se están cargando, hay alguna señal visual de que la app está trabajando (no una pantalla congelada o vacía sin explicación).


For the first User Story, I created a Layout component divided in 3: Header, Main and Footer.

The Header will contain the title and search bar, the Main will contain a "card grid" and the Footer will contain the pagination.

I want card-slot component to be "dumb", which means only show UI, the one that will get the data on the initial load with ngOnInit and pass to it will be the card-grid.

Tasks:
- [x] Bring api data
	- [x] Create service
	- [x] Test bringing data
- [x] Render single card
- [ ] Render card grid
- [ ] Render empty grid message
- [ ] Render loading message/icon



