function DupArray() {
const Numbers = [-102, 102, 82, 94, -102, 82];

const uniqueNumbers = [...new Set(Numbers)].sort((a, b) => a - b);

console.log(uniqueNumbers); // Output: [-102, 82, 94, 102]

return (
    <div>
        <h1>Unique and Sorted Numbers</h1>
        <p>{uniqueNumbers.join(', ')}</p>
    </div>
);
}
export default DupArray;