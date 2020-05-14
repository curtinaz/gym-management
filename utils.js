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
    date: function(data) {
        const date = new Date(data)

        const year = date.getUTCFullYear()
        const month = `0${date.getUTCMonth() + 1}`.slice(-2)
        const day = `0${date.getUTCDate()}`.slice(-2)

        return `${year}-${month}-${day}`
    },
    born: function(data) {
        const date = new Date(data)

        const year = date.getFullYear()
        const month = `0${date.getMonth() + 1}`.slice(-2)
        const day = `0${date.getDate()}`.slice(-2)

        return `${day}/${month}/${year}`
    },
    altura: function(hei) {

        const altura = new Number(hei)
        const metro = `${altura}`.slice(0, 1)
        const cm = `${altura}`.slice(-2)

        return `${metro},${cm}m`
    }
}