var sister = {
    name: "Sarah",
    age: 23,
    parents: ["alice", "andy"],
    siblings: ["julia"],
    favoriteColor: "purple",
    pets: true,
    paintPicture: function (){
        return "sarah paint";
    }
};

console.log(
    sister.age,
    sister["siblings"]);

console.log(sister.paintPicture());