function Outer(){
    let count = 0;
    return function Inner(){
        count++;
        console.log(count);
    }
}
const fn = Outer();
fn();
fn();