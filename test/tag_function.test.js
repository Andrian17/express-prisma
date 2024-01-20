function tagFunction(array, ...args) {
    console.log(array);
    console.log(args);
}

test("test function", async () => {
    const name = "Andrian";
    const lastName = "Andrian";
    tagFunction `Hello ${name}, How are you?`;
    tagFunction `Hello ${name} ${lastName}, See tou later`;
});