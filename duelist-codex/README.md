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

I also added a pagination component, which interacts with the query params available on the API. At first I was doing a "local" pagination but knowing that the API offers query params to do pagination, I will use them.

Tasks:
- [x] Bring api data
	- [x] Create service
	- [x] Test bringing data
- [x] Render single card
- [x] Render card grid
- [x] Render empty grid message
- [x] Render loading message/icon
- [ ] Add pagination using the API query params

## HU-02 — Buscar cartas por nombre
> Como duelista, quiero escribir el nombre (total o parcial) de una carta y obtener los resultados que coincidan, para encontrar rápidamente la carta que quiero revisar sin recorrer todo el catálogo.
**Criterios de aceptación**:
> * Existe un campo de búsqueda visible y accesible desde la pantalla principal.
> * Al buscar, la aplicación consulta la API con el término ingresado y actualiza el catálogo mostrado con los resultados.
> * Si la búsqueda no encuentra ninguna carta, se informa explícitamente en vez de mostrar una grilla vacía sin contexto.
> * Al entrar a la pantalla, el campo de búsqueda queda listo para que la persona usuaria empiece a escribir de inmediato, sin pasos adicionales.

For this step, I decided to separate the search component so the layout reamins clean of logic. Also, the AI recommended using the service also the centralize the search value so even search-bar and card-grid are siblings, I don't need to create a state on layout that is shared, the shared state will live on the service and will be injected on the grid and search bar components.

- [ ] Create the search-bar component
- [ ] Add "searchValue" signal to be shared for search-bar to update value and grid to show result

