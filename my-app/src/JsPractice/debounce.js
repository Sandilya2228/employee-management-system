function debounce(func, wait){
    let timer;
    return function (...args){
        clearTimeout(timer);
        timer = setTimeout(() =>{
            func.apply(this, args);
        }, wait);
        };
    }

    function search(value){
        console.log("Searching:" , value);
    }
    const debouncedSearch = debounce(search, 500);
    
    debouncedSearch("R");
    debouncedSearch("Re");
    debouncedSearch("React");