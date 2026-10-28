///props are used to store data

function Parent(){
    return <Child name ="Sandilya" />
}

function child(props){
    return <h1>{props.name}</h1>
}