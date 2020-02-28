module.exports = {
    main: "https://rpjcoding-beta.sa.ngrok.io",
    view: "https://rpjcoding.sa.ngrok.io/",
    marketplace: "http://localhost:9999",
    web: {
        public: {
            home: "/",
            sign_in: "eyJyb3V0ZSI6Ii9zaWduLWluIiwiZGF0YSI6bnVsbH0=#",
            checkout: "eyJyb3V0ZSI6Ii9sb2dpbiIsImRhdGEiOm51bGx9",
            login: "eyJyb3V0ZSI6Ii9sb2dpbiIsImRhdGEiOm51bGx9",
            marketplace: "eyJyb3V0ZSI6Ii9tYXJrZXRwbGFjZSIsICJkYXRhIjpudWxsIH0="
        },
        user: {
            dashboard: "eyJyb3V0ZSI6Ii91c2VyL2Rhc2hib2FyZCIsImRhdGEiOm51bGx9"
        }
    },
    templates: {
        components: {
            dashboard: {
                products:{
                    raw_material_table:""
                }
            }
        }
    }
}