/*****************************************/
/*****************************************/
/************ GENERIC OBJECTS ************/
/************* AND FUNCTIONS *************/
/*****************************************/
/*****************************************/

// EVENTS OBJECT
const EventNames = {
    MOUSE_DOWN: "mousedown",
    MOUSE_UP: "mouseup",
    CLICK: "click",
    MOUSE_OVER: "mouseover",
    MOUSE_OUT: "mouseout"
    // etc
};

// Pretty much self-explanatory : function to capitalize a string's first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

// Function used to toggle classes
// I'm using it to activate/deactivate the favorite and menu selection
function toggleClass(theElement, theClass) {
    if (theElement.contains(theClass + "-active")) {
        // remove "{theClass}-active" and add "{theClass}" to theElement
        theElement.remove(theClass + "-active");
        theElement.add(theClass);
    } else {
        // else, do the contrary
        theElement.remove(theClass);
        theElement.add(theClass + "-active");
    }
}

/*****************************************/
/*****************************************/
/************ SPECIFIC OBJECTS ***********/
/************** AND FUNCTIONS ************/
/*****************************************/
/*****************************************/

// OBJECT for the various pages
// Each details page is using a pattern <product-name>-<product-type>-details.html - I'll just test if the filename contains "-details.html"
const PathNames = {
    HOME: "index.html",
    LISTING_MENU: "listing-menu.html",
    DETAILS: "-details.html"
};

// OBJECT for the various products names
// if a page was ever to be added, this code should be updated
const ItemsNames = {
    BEEF_BURGER: "beef",
    BACON_BURGER: "bacon",
    CHICKEN_BURGER: "chicken",
    VEGE_BURGER: "vege",
    CAESAR_SALAD: "caesar",
    VEGE_SALAD: "vege",
    VEGE_CHEESE_SALAD: "vege_cheese",
    VEGAN_SALAD: "vegan",
    CARAMEL_SUNDAE_DESSERT: "caramel_sundae"
}

// OBJECTS for the various products types
// if a page was ever to be added, this code should be updated
const ItemsTypes = {
    BURGER: "burger",
    SALAD: "salad",
    DESSERT: "dessert"
}

// OBJECT containing the Nutritional Values for each products in the catalog
// must be updated each time a product is added
const ItemsNutriValues = {
    BEEF_BURGER: 250,
    BACON_BURGER: 300,
    CHICKEN_BURGER: 240,
    VEGE_BURGER: 260,
    CAESAR_SALAD: 200,
    VEGE_SALAD: 180,
    VEGEPLUS_SALAD: 200,
    VEGAN_SALAD: 200,
    CARAMEL_SUNDAE: 250
}


// OBJECT containing each base price for all products (size M)
// for L and XL sizes, a formula is applied to calculate the prices
// based on the following formula : P = base_P + (3*i)/2
// i being the position of the size in the array of html elements ".size-selector"
// example : base price for bacon burger = 13€
// Size L = 13 + (3 * 1) / 2 = 14.5 €
// Size XL = 13 + (3 * 2) / 2 = 16 €
const ItemsBasePrices = {
    BEEF_BURGER: 12,
    BACON_BURGER: 13,
    CHICKEN_BURGER: 10,
    VEGE_BURGER: 11,
    CAESAR_SALAD: 6,
    VEGE_SALAD: 6,
    VEGEPLUS_SALAD: 7.5,
    VEGAN_SALAD: 9,
    CARAMEL_SUNDAE: 3
}

// OBJECT for all classes and ids that are going to be fetched in the DOM
// can be used with the function toggleClass(Element, Class)
// update if needed to toggle other classes or ids
const ClassAndIDToActivate = {
    FAVORITE_CLASS_ID: "favorite",
    SIZE_MENU_CLASS: "size-selector"
}

// OBJECT for various classes I will need to call regularly
// I separated those with the previous ones so I wouldn't have to remember which ones are toggled
const OtherClassesAndIds = {
    INCR_QUANTITY_ID: "increase-quantity",
    DECR_QUANTITY_ID: "decrease-quantity",
    ITEM_PRICE_ID: "item-price",
    ITEM_QUANTITY_ID: "item-quantity",
    ITEM_NUTRI_VALUE_ID: "nutritional-value-detail-page",
    TOTAL_TEXT_ID: "total-text",
    TOTAL_PRICE_ID: "total-price"
}

// Each Item in the catalog is represented by an object
// this item has 4 properties : name, type, nutritional value, price
function Item(name, type, nutritionalValue, price) {
    this.name = name;
    this.type = type;
    this.nutritionalValue = nutritionalValue;
    this.price = price;
}

/* The products to be added in my catalog */
// I'm using the previously declared objects to create each product.
const beefBurger = new Item(ItemsNames.BEEF_BURGER, ItemsTypes.BURGER, ItemsNutriValues.BEEF_BURGER, ItemsBasePrices.BEEF_BURGER);
const baconBurger = new Item(ItemsNames.BACON_BURGER, ItemsTypes.BURGER, ItemsNutriValues.BACON_BURGER, ItemsBasePrices.BACON_BURGER);
const vegeBurger = new Item(ItemsNames.VEGE_BURGER, ItemsTypes.BURGER, ItemsNutriValues.VEGE_BURGER, ItemsBasePrices.VEGE_BURGER);
const chickenBurger = new Item(ItemsNames.CHICKEN_BURGER, ItemsTypes.BURGER, ItemsNutriValues.CHICKEN_BURGER, ItemsBasePrices.CHICKEN_BURGER);

const caesarSalad = new Item(ItemsNames.CAESAR_SALAD, ItemsTypes.SALAD, ItemsNutriValues.CAESAR_SALAD, ItemsBasePrices.CAESAR_SALAD);
const vegeSalad = new Item(ItemsNames.VEGE_SALAD, ItemsTypes.SALAD, ItemsNutriValues.VEGE_SALAD, ItemsBasePrices.VEGE_SALAD);
const vegePlusSalad = new Item(ItemsNames.VEGE_CHEESE_SALAD, ItemsTypes.SALAD, ItemsNutriValues.VEGEPLUS_SALAD, ItemsBasePrices.VEGEPLUS_SALAD);
const veganSalad = new Item(ItemsNames.VEGAN_SALAD, ItemsTypes.SALAD, ItemsNutriValues.VEGAN_SALAD, ItemsBasePrices.VEGAN_SALAD);

const caramelSundae = new Item(ItemsNames.CARAMEL_SUNDAE_DESSERT, ItemsTypes.DESSERT, ItemsNutriValues.CARAMEL_SUNDAE, ItemsBasePrices.CARAMEL_SUNDAE);

// The catalog
const catalog = [
    beefBurger,
    baconBurger,
    chickenBurger,
    vegeBurger,
    caesarSalad,
    vegeSalad,
    vegePlusSalad,
    veganSalad,
    caramelSundae
]

// This constant is the maximum value the user will be allowed to reach by clicking on the -/+ buttons in the details pages.
const quantityMaxValue = 10;

// To select my menu
// this will work almost like toggleClass
function selectMenuSize(theElement, theClass) {
    if (!theElement.contains(theClass + "-active")) {
        theElement.remove(theClass);
        theElement.add(theClass + "-active");
    }
}

/*
When the user clicks on the favorite icon
The following Handler will test if the class exists inside the clicked element and toggle it
*/
function favoritesHandler(evt) {
    // getting the clicked element classes
    const elementClasses = evt.target.classList;

    // toggle the class assigned to the favorites
    toggleClass(elementClasses, ClassAndIDToActivate.FAVORITE_CLASS_ID);
}

/*
This handler will select the clicked menu size and unselect the other sizes
A menu size cannot be toggled to prevent the user from selecting no sizes.
*/
function selectSizeHandler(evt) {

    // getting text content in my menu size
    const menuSize = evt.target.textContent;

    // getting the clicked element classes
    const elementClasses = evt.target.classList;

    // I need to get the parent of my clicked element
    // this is needed to deactivate the siblings of my clicked element
    const parentNodeChildrenArray = Array.from(evt.target.parentNode.children);

    // This line will select the clicked menu size
    // but won't deactivate a size that is already selected.
    selectMenuSize(elementClasses, ClassAndIDToActivate.SIZE_MENU_CLASS);

    // All other sizes are resetted.
    resetAllSizesExcept(menuSize);


    // this value will be used to calculate the price of the selected menu + size
    // this will get the index of the clicked element inside his parent.
    let i = parentNodeChildrenArray.indexOf(parentNodeChildrenArray.find(elt => elt.className.includes(ClassAndIDToActivate.SIZE_MENU_CLASS + "-active")));

    // calling the function to modify the page based on the selected size
    modifyPage(i, evt.currentTarget.myURLName, evt.currentTarget.myURLType);

    // changing the h1 text so that it displays the selected size
    switchSizeDisplay(menuSize);

}

/*
    Click Handler for the selected quantity (+/- buttons)
*/
function modifyQuantityHandler(evt) {

    // this will get the clicked element's id (either "decrease-quantity" or "increase-quantity")
    // so that the program knows which button has been clicked
    const id = evt.target.id;

    // the quantity will increase and decrease between 1 (default value) and the maximum value defined at the top of this program (quantityMaxValue)
    // quantity is parsed into an int to be used inside the program
    let quantity = parseInt(document.querySelector("#" + OtherClassesAndIds.ITEM_QUANTITY_ID).textContent, 10);

    // if the user has clicked on the - button : decrease quantity
    if (id == OtherClassesAndIds.DECR_QUANTITY_ID) {
        quantity--;
    } else {
        // else increase
        quantity++;
    }

    // making sure the displayed value is withing the borders [1;quantityMaxValue]
    if (quantity > 0 && quantity <= quantityMaxValue) {
        document.querySelector("#" + OtherClassesAndIds.ITEM_QUANTITY_ID).textContent = quantity;
    }

    // Now updating the page
    // all this to get the index of the selected menu
    const activeSize = document.querySelector("." + ClassAndIDToActivate.SIZE_MENU_CLASS + "-active");
    const menuSize = activeSize.textContent;
    const parentNodeChildrenArray = Array.from(activeSize.parentNode.children);
    let index = parentNodeChildrenArray.indexOf(parentNodeChildrenArray.find(elt => elt.className.includes(ClassAndIDToActivate.SIZE_MENU_CLASS + "-active")));

    // to update the page
    modifyPage(index, evt.currentTarget.myURLName, evt.currentTarget.myURLType);

    // H1 is updated.
    switchSizeDisplay(menuSize);
}

// Well... self-explanatory
// Total = Item_Price x Quantity
function calculateTotal(q, pu) {
    return q * pu;
}

function modifyPage(indexOfSize, name, type) {


    const article = catalog.find(o => o.name === name && o.type === type);
    const quantity = parseInt(document.querySelector("#" + OtherClassesAndIds.ITEM_QUANTITY_ID).textContent, 10);

    // initialisation du prix
    let displayedPrice = article.price + 3 * indexOfSize / 2;
    document.querySelector("#" + OtherClassesAndIds.ITEM_PRICE_ID).textContent = (displayedPrice) + ((Number.isInteger(displayedPrice)) ? ".00" : "0");

    // Creating the H1 by using the constants and my different objects
    let h1 = article.name.replace("_", " ");
    let newH1Split = h1.split(" ");
    let newH1 = "";
    newH1Split.forEach(element => {
        newH1 += capitalizeFirstLetter(element) + " ";
    });

    // removing spaces at the beginning and at the end of my string
    newH1 = newH1.trim();
    document.querySelector("h1").textContent = newH1 + " " + capitalizeFirstLetter(article.type);

    // nutritional value init
    document.querySelector("#" + OtherClassesAndIds.ITEM_NUTRI_VALUE_ID).textContent = article.nutritionalValue + " Kcal";

    // Updating Total Items
    document.querySelector("#" + OtherClassesAndIds.TOTAL_TEXT_ID).textContent = "Total x" + quantity;

    // Updating Total Price
    let totalPrice = calculateTotal(quantity, displayedPrice);
    document.querySelector("#" + OtherClassesAndIds.TOTAL_PRICE_ID).textContent = "$ " + totalPrice + ((Number.isInteger(totalPrice)) ? ".00" : "0");
}

// To reset all sizes except the parameter
function resetAllSizesExcept(menuSize) {
    const sizesNode = document.querySelectorAll("." + ClassAndIDToActivate.SIZE_MENU_CLASS + "-active");

    sizesNode.forEach(nodeSizeSelector => {
        if (nodeSizeSelector.textContent != menuSize) {
            nodeSizeSelector.classList.add(ClassAndIDToActivate.SIZE_MENU_CLASS);
            nodeSizeSelector.classList.remove(ClassAndIDToActivate.SIZE_MENU_CLASS + "-active");
        }
    });
}

// To display the selected menu size
function switchSizeDisplay(menuSize) {
    // my h1 element
    const h1 = document.querySelector("h1");
    // text content in that h1
    let menuTitle = h1.textContent;

    // if my menuTitle doesn't containt " - "
    // it means that no new menu has been selected so we add the size that was clicked on
    // else, the user has clicked on a new size
    // updating menuTitle with the new size

    /*   if (!menuTitle.includes(" - ")) {
           menuTitle += " - " + menuSize;
       } else {
          
           if (!menuTitle.includes(" - " + menuSize)) {
               menuTitle = menuTitle.slice(0, menuTitle.indexOf(" - ")) + " - " + menuSize;
           }
       }
   */

    menuTitle = (!menuTitle.includes(" - "))? menuTitle+" - "+menuSize : menuTitle.slice(0, menuTitle.indexOf(" - "))+((!menuTitle.includes(" - "+menuSize))? " - "+menuSize : "");

    // not forgetting to modify the text content in my h1 element
    h1.textContent = menuTitle;
}


/*****************************************/
/*****************************************/
/************* PROGRAM START *************/
/*****************************************/
/*****************************************/

// get the url path
const pathName = window.location.pathname;
// extract the filename from the URL
const filename = pathName.substring(pathName.lastIndexOf('/') + 1);

// this condition manages how the program reacts on the listing page
// on the listing page, listeners are activated to react to clicks on all elements using the CSS class ".card-menu"
if (filename.includes(PathNames.LISTING_MENU)) {

    // get all html elements with the class concerning favorites ".favorite"
    const favorites = document.querySelectorAll("." + ClassAndIDToActivate.FAVORITE_CLASS_ID);

    // creating a listener for each html element
    for (let i = 0; i < favorites.length; i++) {
        favorites[i].addEventListener(EventNames.CLICK, favoritesHandler);
    }
}

// this condition will manage how the program will deal with all detail pages
// on detail pages, listeners are activated to react to clicks on all elements using the CSS class ".size-selector"
if (filename.includes(PathNames.DETAILS)) {

    // this constant contains the html element where the menu sizes are listed
    const thisMenuSize = document.querySelectorAll("." + ClassAndIDToActivate.SIZE_MENU_CLASS);

    // contains the html element that serves to increase and descrease how many items the user will add to his cart
    const increaseQuantityButton = document.querySelector("#" + OtherClassesAndIds.INCR_QUANTITY_ID);
    const decreaseQuantityButton = document.querySelector("#" + OtherClassesAndIds.DECR_QUANTITY_ID);

    // to remove ".html" and split the filename into 3 separate words : name, type and "details"
    const urlArray = filename.slice(0, filename.length - 5).split("-");

    // this urlName's value is going to be either beef, bacon, chicken, vegan etc based on the object ItemsNames defined on line 25
    const urlName = urlArray[0];
    // urlType's value is going to be either beef, bacon, chicken, vegan etc based on the object ItemsNames defined on line 25
    const urlType = urlArray[1];

    for (let i = 0; i < thisMenuSize.length; i++) {
        thisMenuSize[i].addEventListener(EventNames.CLICK, selectSizeHandler);
        thisMenuSize[i].myURLName = urlName;
        thisMenuSize[i].myURLType = urlType;
    }

    increaseQuantityButton.addEventListener(EventNames.CLICK, modifyQuantityHandler);
    increaseQuantityButton.myURLName = urlName;
    increaseQuantityButton.myURLType = urlType;

    decreaseQuantityButton.addEventListener(EventNames.CLICK, modifyQuantityHandler);
    decreaseQuantityButton.myURLName = urlName;
    decreaseQuantityButton.myURLType = urlType;


    // PAGE INIT
    // activation du premier élément de la liste des tailles de menu
    toggleClass(thisMenuSize[0].classList, thisMenuSize[0].className);

    modifyPage(0, urlName, urlType);

    // affichage de la 1ère taille du menu dans le titre de la page
    switchSizeDisplay(thisMenuSize[0].textContent);

}