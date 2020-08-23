type Env = {
    port: number
}

export const env: Env = {
    port: +(process.env.PORT ?? 8080)
}