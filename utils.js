module.exports = {
    age: function(timestamp) {
        const today = new Date()
        const birthDay = new Date(timestamp)
    
        let age = today.getFullYear() - birthDay.getFullYear()
        const month = today.getMonth() - birthDay.getMonth()
        
        if (month < 0 || month == 0 && today.getDate() <= birthDay.getDate()) {
            age = age - 1
        }
        return age
    },
    date: function(timestamp) {
        const date = new Date(timestamp)

        // ano yyyy
        const year = date.getFullYear()

        // mes mm
        const month = date.getMonth() + 1

        // dias dd
        const day = date.getDate()

        // return yyyy-mm-dd

        console.log (`${year}-${month}-${day}`)
    }
}