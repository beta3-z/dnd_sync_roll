type Env = {
    port: number,
    address: string,
}

export const env: Env = {
    port: +(process.env.PORT ?? 8080),
    address: (process.env.ADDRESS ?? '127.0.0.1'),
}