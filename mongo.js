const mongoose = require("mongoose")


if (process.argv.length < 3) {
    console.log('give password as argument')
    process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://dingdong:${password}@cluster0.rm7buhk.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.set("strictQuery", false)


mongoose.connect(url)


const noteSchema = mongoose.Schema({
    content: String,
    important: Boolean
})

const Note = mongoose.model("Note", noteSchema)


// const note = new Note({
//     content: "HTML could not be easy",
//     important: true
// })

// note.save().then(response => {
//     console.log("note saved")
//     console.log(response)
//     mongoose.connection.close()
// })

Note.find({ content: "HTML is not easy" }).then((result) => {
    result.forEach(note => {
        console.log(note)
    });
    mongoose.connection.close()
})