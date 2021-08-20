const server = {
    port: "2222",
    url: "http://localhost"
}

export const endpoint = `${server.url}:${server.port}`

export const endpoints = {
    create: `${endpoint}/create`,
    createUser: `${endpoint}/create-user`
}

    // ?taskName=ConnectServer&table=Tasks