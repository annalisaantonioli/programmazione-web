# 🎨 CSS Properties by Category

## 📦 Box Model

- `width`, `min-width`, `max-width` | larghezza dell'elemento
- `height`, `min-height`, `max-height` | altezza dell'elemento
- `margin`, `margin-top`, `margin-right`, `margin-bottom`, `margin-left`| margini dell'elemento
- `padding`, `padding-top`, `padding-right`, `padding-bottom`, `padding-left` | spaziatura interna dell'elemento
- `box-sizing` | definisce come calcolare le dimensioni dell'elemento: `content-box` o `border-box`, content-box è il valore predefinito e calcola le dimensioni dell'elemento senza includere il padding e il bordo, mentre border-box include il padding e il bordo nelle dimensioni totali dell'elemento.
- `display` | definisce il tipo di visualizzazione dell'elemento: `block`, `inline`, `inline-block`, `flex`, `grid`, `table`, `none`, ecc.
- `overflow`, `overflow-x`, `overflow-y`| definisce il comportamento del contenuto che supera le dimensioni dell'elemento: `visible`, `hidden`, `scroll`, `auto`, ecc.

## 🧭 Positioning & Layout

- `position` | definisce il tipo di posizionamento dell'elemento: `static`, `relative`, `absolute`, `fixed`, `sticky`
- `top`, `right`, `bottom`, `left` | definiscono la posizione dell'elemento rispetto al suo contesto di posizionamento
- `z-index` | definisce l'ordine di sovrapposizione degli elementi: più alto è il valore, più in alto sarà l'elemento rispetto agli altri
- `float` | definisce il posizionamento dell'elemento a sinistra o a destra all'interno del suo contenitore
- `clear` | definisce se un elemento deve essere posizionato sotto gli elementi galleggianti
- `visibility`| definisce la visibilità dell'elemento: `visible`, `hidden`, `collapse`, collapse è usato per le righe e le colonne delle tabelle
- `inset` | definisce la posizione dell'elemento rispetto al suo contesto di posizionamento, simile a `top`, `right`, `bottom`, `left`, ma con un'unica proprietà
- `box-shadow` | definisce un'ombra per l'elemento, con opzioni per il colore, la sfocatura e la diffusione. Ad esempio: `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);` crea un'ombra sfocata sotto l'elemento.

## ✍️ Typography

- `font-family` | definisce il tipo di carattere dell'elemento
- `font-size` | definisce la dimensione del carattere dell'elemento
- `font-style` | definisce lo stile del carattere dell'elemento: `normal`, `italic`, `oblique`
- `font-weight` | definisce il peso del carattere dell'elemento: `normal`, `bold`, `bolder`, `lighter`, o un valore numerico da 100 a 900
- `line-height` | definisce l'altezza della linea dell'elemento: `normal`, o un valore numerico che rappresenta un fattore di scala rispetto alla dimensione del carattere
- `letter-spacing` | definisce lo spazio tra le lettere dell'elemento: `normal`, o un valore in pixel, em o percentuale
- `word-spacing` | definisce lo spazio tra le parole dell'elemento: `normal`, o un valore in pixel, em o percentuale
- `text-align` | definisce l'allineamento del testo dell'elemento: `left`, `right`, `center`, `justify`
- `text-decoration` | definisce la decorazione del testo dell'elemento: `none`, `underline`, `overline`, `line-through`, `blink`
- `text-transform` | definisce la trasformazione del testo dell'elemento: `none`, `capitalize`, `uppercase`, `lowercase`
- `white-space` | definisce il comportamento degli spazi bianchi dell'elemento: `normal`, `nowrap`, `pre`, `pre-wrap`, `pre-line`
- `direction` | definisce la direzione del testo dell'elemento: `ltr` (sinistra a destra, default), `rtl` (destra a sinistra) :warning: `rtl` è utile per le lingue che si scrivono da destra a sinistra, come l'arabo o l'ebraico, non tutti i browser supportano questa proprietà, quindi è importante testare il layout su diversi browser e dispositivi
- `text-shadow` | definisce un'ombra per il testo dell'elemento, con opzioni per il colore, la sfocatura e lo spostamento. Ad esempio: `text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);` crea un'ombra sfocata sotto il testo dell'elemento.

## 🎨 Colors & Backgrounds

- `color`
- `background-color`
- `background-image`
- `background-size` | definisce le dimensioni dell'immagine di sfondo: `cover`, `contain`, o valori in pixel, em, percentuale
- `background-position` | definisce la posizione dell'immagine di sfondo all'interno dell'elemento: `left`, `right`, `top`, `bottom`, `center`, o valori percentuali
- `background-repeat` | definisce il comportamento dell'immagine di sfondo: `repeat`, `no-repeat`, `repeat-x`, `repeat-y`
- `background-attachment` | definisce il comportamento dello sfondo rispetto al contenuto dell'elemento: `scroll`, `fixed`, `local`
- `background-clip` | definisce come il colore di sfondo e l'immagine di sfondo si adattano all'elemento: `border-box`, `padding-box`, `content-box`. Border-box include il bordo, padding-box include il padding e content-box include solo il contenuto
- `background-origin` | definisce il punto di origine dell'immagine di sfondo: `border-box`, `padding-box`, `content-box`. Border-box include il bordo, padding-box include il padding e content-box include solo il contenuto

## 🖼 Borders & Outlines

- `border` | :eyes: influisce sulla dimensione dell'elemento, creando un contorno attorno ad esso. :eyes:
- `border-width` | definisce la larghezza del bordo dell'elemento: `thin`, `medium`, `thick`, o valori in pixel
- `border-style` | definisce lo stile del bordo dell'elemento: `none`, `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`
- `border-color` | definisce il colore del bordo dell'elemento: `invert` per invertire i colori del bordo rispetto allo sfondo, o un colore specifico
- `border-radius` | definisce gli angoli arrotondati del bordo dell'elemento: `0`, `50%`, o valori in pixel, em, percentuale
- `outline` | definisce un contorno attorno all'elemento, simile al bordo, ma non influisce sulle dimensioni dell'elemento. Può essere utilizzato per evidenziare gli elementi senza modificare il layout
- `outline-width` | definisce la larghezza del contorno dell'elemento: `thin`, `medium`, `thick`, o valori in pixel
- `outline-style` | definisce lo stile del contorno dell'elemento: `none`, `solid`, `dashed`, `dotted`, `double`, `groove`, `ridge`, `inset`, `outset`
- `outline-color` | definisce il colore del contorno dell'elemento: `invert` per invertire i colori del contorno rispetto allo sfondo, o un colore specifico
- `box-shadow` | definisce un'ombra per l'elemento, con opzioni per il colore, la sfocatura e la diffusione. Ad esempio: `box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);` crea un'ombra sfocata sotto l'elemento.

## 🧩 Flexbox

:eyes:
Flexbox è un layout CSS che consente di disporre gli elementi in modo flessibile e reattivo. Utilizza un sistema di righe e colonne per allineare gli elementi in modo efficiente, anche quando le dimensioni degli elementi sono sconosciute o dinamiche. :eyes

- `display: flex`, `display: inline-flex` | definisce un contenitore flessibile: `flex` crea un contenitore flessibile, mentre `inline-flex` crea un contenitore flessibile in linea
- `flex-direction` | definisce la direzione principale degli elementi all'interno del contenitore flessibile: `row`, `row-reverse`, `column`, `column-reverse`
- `flex-wrap` | definisce se gli elementi all'interno del contenitore flessibile devono essere disposti su più righe o colonne: `nowrap`, `wrap`, `wrap-reverse`
- `justify-content` | definisce l'allineamento degli elementi lungo la direzione principale del contenitore flessibile: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `space-evenly`
- `align-items` | definisce l'allineamento degli elementi lungo la direzione trasversale del contenitore flessibile: `flex-start`, `flex-end`, `center`, `baseline`, `stretch`
- `align-content` | definisce l'allineamento delle righe all'interno del contenitore flessibile: `flex-start`, `flex-end`, `center`, `space-between`, `space-around`, `stretch`
- `gap`, `row-gap`, `column-gap` | definiscono lo spazio tra gli elementi all'interno del contenitore flessibile: `gap` è una scorciatoia per `row-gap` e `column-gap`, mentre `row-gap` e `column-gap` definiscono lo spazio tra le righe e le colonne, rispettivamente
- `flex`, `flex-grow`, `flex-shrink`, `flex-basis` | definiscono le dimensioni e il comportamento degli elementi all'interno del contenitore flessibile: `flex` è una scorciatoia per `flex-grow`, `flex-shrink` e `flex-basis`, mentre `flex-grow` definisce quanto un elemento può crescere rispetto agli altri, `flex-shrink` definisce quanto un elemento può ridursi rispetto agli altri e `flex-basis` definisce la dimensione iniziale dell'elemento
- `align-self` | definisce l'allineamento di un singolo elemento all'interno del contenitore flessibile: `auto`, `flex-start`, `flex-end`, `center`, `baseline`, `stretch`
- `order` | definisce l'ordine di visualizzazione degli elementi all'interno del contenitore flessibile: gli elementi con un valore di `order` più basso vengono visualizzati prima

## 🧱 Grid Layout

:eyes: Grid Layout è un layout CSS che consente di disporre gli elementi in una griglia bidimensionale. Utilizza un sistema di righe e colonne per allineare gli elementi in modo efficiente, anche quando le dimensioni degli elementi sono sconosciute o dinamiche. :eyes:

- `display: grid`, `display: inline-grid` | definisce un contenitore a griglia: `grid` crea un contenitore a griglia, mentre `inline-grid` crea un contenitore a griglia in linea
- `grid-template-columns`, `grid-template-rows` | definiscono le dimensioni delle colonne e delle righe all'interno del contenitore a griglia: `grid-template-columns` definisce le dimensioni delle colonne, mentre `grid-template-rows` definisce le dimensioni delle righe
- `grid-column`, `grid-row` | definiscono la posizione e le dimensioni di un elemento all'interno della griglia: `grid-column` definisce la posizione e le dimensioni delle colonne, mentre `grid-row` definisce la posizione e le dimensioni delle righe
- `grid-column-start`, `grid-column-end` | definiscono la posizione di inizio e fine di un elemento all'interno della griglia: `grid-column-start` definisce la posizione di inizio dell'elemento, mentre `grid-column-end` definisce la posizione di fine dell'elemento
- `grid-row-start`, `grid-row-end` | definiscono la posizione di inizio e fine di un elemento all'interno della griglia: `grid-row-start` definisce la posizione di inizio dell'elemento, mentre `grid-row-end` definisce la posizione di fine dell'elemento
- `gap`, `row-gap`, `column-gap` | definiscono lo spazio tra gli elementi all'interno del contenitore a griglia: `gap` è una scorciatoia per `row-gap` e `column-gap`, mentre `row-gap` e `column-gap` definiscono lo spazio tra le righe e le colonne, rispettivamente
- `justify-items`, `align-items` | definiscono l'allineamento degli elementi all'interno delle celle della griglia: `justify-items` definisce l'allineamento orizzontale, mentre `align-items` definisce l'allineamento verticale
- `justify-content`, `align-content` | definiscono l'allineamento del contenitore a griglia all'interno del suo contesto: `justify-content` definisce l'allineamento orizzontale, mentre `align-content` definisce l'allineamento verticale
- `grid-auto-flow`, `grid-auto-rows`, `grid-auto-columns` | definiscono il comportamento degli elementi all'interno della griglia quando non sono specificate le dimensioni: `grid-auto-flow` definisce il flusso degli elementi, mentre `grid-auto-rows` e `grid-auto-columns` definiscono le dimensioni delle righe e delle colonne automatiche

## 🖱 Interactivity

- `cursor` | definisce il tipo di cursore da visualizzare quando l'utente passa il mouse sopra l'elemento: `pointer`, `default`, `text`, `move`, `not-allowed`, ecc.
- `pointer-events` | definisce come gli eventi del puntatore (come il mouse o il tocco) interagiscono con l'elemento: `auto`, `none`, `visible`, `visiblePainted`, `painted`, `fill`, `stroke`, `all`. None significa che l'elemento non riceverà eventi del puntatore, mentre auto significa che l'elemento riceverà eventi del puntatore
- `user-select` | definisce se il testo all'interno dell'elemento può essere selezionato dall'utente: `none`, `auto`, `text`, `all`, `contain`, `element`. None significa che il testo non può essere selezionato, mentre auto significa che il testo può essere selezionato. `user-select: none` può essere utile per impedire la selezione del testo in un elemento, ad esempio in un pulsante o in un'immagine

## 🔁 Transitions & Animations

- `transition`
- `transition-property`
- `transition-duration`
- `transition-timing-function`
- `transition-delay`
- `animation`
- `animation-name`
- `animation-duration`
- `animation-timing-function`
- `animation-delay`
- `animation-iteration-count`
- `animation-direction`
- `animation-fill-mode`
- `animation-play-state`
- `will-change`

## 📱 Responsive & Media

- `@media` – Media queries
- `@supports` – Feature queries
- `aspect-ratio`
- `container-type`
- `container-name`
- `container`
