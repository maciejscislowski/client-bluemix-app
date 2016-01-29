tasks = defineTasks(
    exports,
    {
        build: "build app"
    }
)

tasks.build = function () {
    log("Building the app")
    exec("grunt build --force")
}

exports.bluemix = {
    doc: "deploys app on the Bluemix",
    run: function () {
        tasks.build()
        var appName = arguments[0]
        exec("cf push " + appName + " -p ./dist")
    }
}
