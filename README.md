# OAuth Demo Frontend

OAuth Demo is a frontend application built with SvelteKit. It provides a user interface for normal sign-in/sign-up with email and password or Google OAuth.

This project is intended to be used with [OAuth Demo Backend](https://github.com/RasyaJusticio/oauth-demo-backend)

## Routes

| URL              | Description                                                                |
| ---------------- | -------------------------------------------------------------------------- |
| `/`              | Home page. Can only be accessed after loggin in                            |
| `sign-in`        | Where user can sign-in using email/password or with Google OAuth           |
| `auth?code=XXXX` | Exchanges the auth code from backend Google callback with the access token |

## Run Locally

1. Clone the project

   ```bash
   git clone https://github.com/RasyaJusticio/oauth-demo-frontend
   ```

2. Install dependencies

   ```bash
   npm install
   ```

3. Setup your environment

   - Copy the .env.example file to .env

        ```bash
        cp .env.example .env
        ```

   - Set your backend url

        ```env
        PUBLIC_BACKEND_URL=
        ```

4. Start the server

   ```bash
   npm run dev
   ```

## License

[MIT](/LICENSE)
