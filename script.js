// https://medium.com/@andybarefoot/a-masonry-style-layout-using-css-grid-8c663d355ebb

function resizeGridItem(item){
    grid = item.parentElement;
    rowHeight = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-auto-rows'));
    rowGap = parseInt(window.getComputedStyle(grid).getPropertyValue('grid-row-gap'));
    rowSpan = Math.ceil((item.querySelector('.masonry-content').getBoundingClientRect().height+rowGap)/(rowHeight+rowGap));
    console.log("hi")
    item.style.gridRowEnd = "span "+rowSpan;
}

function resizeAllGridItems(){
    allItems = document.getElementsByClassName("masonry-item");
    for(let x = 0; x < allItems.length; x++){
       resizeGridItem(allItems[x]);
    }
}

// window.addEventListener("load", resizeAllGridItems);
// window.addEventListener("resize", resizeAllGridItems);

function resizeInstance(instance){
    item = instance.elements[0];
    resizeGridItem(item);
}

// allItems = document.getElementsByClassName("masonry-item");
// for(x=0;x<allItems.length;x++){
//    imagesLoaded( allItems[x], resizeInstance);
// }
// document.getElementById(document.location.hash.substring(1)).classList.add("active")
// document.getElementById(document.location.hash.substring(1)).classList.add("show")
// document.getElementById(document.location.hash.substring(1).split("-").slice(0, -1).join('-')).classList.add("active")

function showTab(){
    if (document.getElementById("myTab") === null)
        return
    let hash = document.location.hash.substring(1)
    const triggerEl = document.querySelector('#myTab li button#' + (hash !== null && ['writing-tab-pane', 'multimedia-tab-pane'].includes(hash) 
        ? hash.split("-").slice(0, -1).join('-') : 'writing-tab'))
    const trigger = new bootstrap.Tab(triggerEl)
    trigger.show()
}

function swapTab(id){
    window.location.hash = id;
}

showTab()
window.addEventListener('hashchange', showTab);  