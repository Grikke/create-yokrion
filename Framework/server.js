const {System, Log, GenerateRoutes} = require('yokrion')

System.console(`${System.color.orange}Running Yokrion...${System.color.end}`)

GenerateRoutes(() => {
    System.console(`${System.color.green}Yokrion running on port ${process.env.PORT}${System.color.end}`)
    Log.server("Starting server")
    process.on('SIGINT', () => {
        System.console(`${System.color.black}Stop Yokrion${System.color.end}`)
        process.exit(2)
    })
    process.on("exit", () => {
        Log.server("Stopping server");
    })
})