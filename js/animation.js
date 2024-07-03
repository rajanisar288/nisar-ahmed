function activeItem(item){
    let link = document.querySelector(`.links ul #${item}`)
    let links = document.querySelectorAll('.links ul .link')
    let tab = document.querySelector(`.content #${item}`)
    let tabs = document.querySelectorAll('.content .tab')
    links.forEach((linkItem)=>linkItem.classList.remove('active'))
    tabs.forEach((tabItem)=>tabItem.classList.add('tabHide'))
    tab.classList.remove('tabHide')
    link.classList.add('active')
    console.log(links);
    console.log(el);
    console.log(link);
}