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
- [x] Add pagination using the API query params

## HU-02 — Buscar cartas por nombre
> Como duelista, quiero escribir el nombre (total o parcial) de una carta y obtener los resultados que coincidan, para encontrar rápidamente la carta que quiero revisar sin recorrer todo el catálogo.
**Criterios de aceptación**:
> * Existe un campo de búsqueda visible y accesible desde la pantalla principal.
> * Al buscar, la aplicación consulta la API con el término ingresado y actualiza el catálogo mostrado con los resultados.
> * Si la búsqueda no encuentra ninguna carta, se informa explícitamente en vez de mostrar una grilla vacía sin contexto.
> * Al entrar a la pantalla, el campo de búsqueda queda listo para que la persona usuaria empiece a escribir de inmediato, sin pasos adicionales.

For this step, I decided to separate the search component (it was inside the layout) so the layout reamins clean of logic. Also, the AI recommended using the service also the centralize the search value so even search-bar and card-grid are siblings, I don't need to create a state on layout that is shared and drilled to the children, the shared state will live on the service and will be injected on the grid and search bar components.

After some analysis, the logic was re arranged and moved to the cards service completely, so now inside the card service all the fetching and filtering is done, besides the change detection, and card-grid and card-slot remain "dumb". Now the initail data load is done on the service **contructor** and the data is refetched every time the page or the search term changes.

- [x] Create the search-bar component
- [x] Add "searchValue" signal to be shared for search-bar to update value and grid to show result

## HU-03 — Ver el detalle de una carta
>Como duelista, quiero seleccionar una carta del catálogo y ver toda su información (efecto, ATK/DEF, tipo, atributo), para decidir si la carta me interesa para un futuro mazo. Criterios de aceptación:
> * Al seleccionar una carta desde el catálogo, se muestra una vista de detalle con su información completa provista por la API.
> * La vista de detalle indica claramente a qué carta corresponde (imagen y nombre visibles).
> * La persona usuaria puede volver del detalle al catálogo sin perder el contexto de su búsqueda anterior (ej. el término buscado sigue ahí).

For User Story 3, I will create a modal that shows the details, so that is not necessary to create a new view and is easy to go back and forth from all the cards results and their details. For this, a 'selectedCard' signal was created on the service for two things: 

1. If is null, the modal is closed; if there's data, the modal is open.
2. To pass the data tot the modal component. 

The signal is set when a card-slot component is clicked (which assigns the cardInfo to the signal), and is set again to null when the modal is closed. Also, in order for card-slot to remain as clean as possible, only an output was set as "cardClick", so that this component can remain as clean as possible and could be reused on the future.

- [x] Create modal component with its basic layout
- [x] Make the card-slot component clickable so it opens the modal and pass it the data of that card

## HU-04 — Organizar el detalle en secciones
> Como duelista, quiero que la información de esa vista de detalle (la de HU-03) esté organizada en secciones — por ejemplo su efecto, sus estadísticas y su precio de referencia — en lugar de un solo bloque de texto, para no sentirme abrumado por un bloque enorme de texto y datos mezclados. Criterios de aceptación:
> * La información de la carta en el detalle está organizada en secciones o bloques claramente diferenciados (por ejemplo: Efecto, Estadísticas, Precio).
> * La persona usuaria puede identificar y acceder a cada sección de forma independiente (pestañas, acordeón, o el mecanismo que el estudiante elija).
> * El componente que organiza estas secciones está diseñado para ser reutilizable: no debería depender de que el contenido sea específicamente 'cartas de Yu-Gi-Oh'.

For this user story, the idea is just simply expand the card-detail-modal component so it is divided in sections. Tabs can be implemented as buttons that set which tab is active. For this, I used 2 signals and one output: one to track the active tab, one to have all the tabs value and the output to set the new activeTab value. Also for this I used ng-content, so that the tabs are rendered independent of the content, and this way it will be reusable.
