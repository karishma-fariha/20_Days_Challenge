// Problem 29: Async/Await Fetch Simulation  [Medium]
// Description: Write an async function getUserData(id) that simulates fetching user data by awaiting a Promise that resolves after 500ms with a mock user object.
// Example:
// await getUserData(1);// returns {id:1, name:'Test User'}
// Hint: Use async/await with a Promise that wraps setTimeout.
type MockUser = {
    id: number;
    name: string;
}
async function getUserData(id: number): Promise<MockUser> {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, name: 'Test User' });
        }, 500)
    })
}
(async()=>{
    const data = await getUserData(1);
    console.log(data);
})()