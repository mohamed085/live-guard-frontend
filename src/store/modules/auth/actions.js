import router from "@/router";

export default {
    login: async function (context, payload) {

        let myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        let raw = JSON.stringify({
            "email": payload.email,
            "password": payload.password
        });

        let requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        let url = "https://live-guard.herokuapp.com/api/auth/login"

        const response = await fetch(url, requestOptions);

        const responseData = await response.json();

        if (!response.ok) {
            const error = new Error(responseData.message || "Invalid email or password");
            throw error;
        }

        let token = responseData.user_token;

        let myHeadersForGetAccountDetails = new Headers();
        myHeadersForGetAccountDetails.append("Authorization", "Bearer " + token);

        let requestOptionsForGetAccountDetails = {
            method: 'GET',
            headers: myHeadersForGetAccountDetails,
            redirect: 'follow'
        };

        await fetch("https://live-guard.herokuapp.com/api/account", requestOptionsForGetAccountDetails)
            .then(response => response.json())
            .then(responseData => {
                let admin = false
                if (responseData.roles.includes('admin')) {
                    admin = true
                }

                localStorage.setItem('token', token)
                localStorage.setItem('name', responseData.name)
                localStorage.setItem('photo', responseData.avatar)
                localStorage.setItem('isAdmin', admin)

                context.commit('setUser', {
                    token: token,
                    name: responseData.name,
                    photo: responseData.avatar,
                    isAdmin: admin,
                })
            });
    },

    tryLogin(context) {
        const token = localStorage.getItem('token')
        const name = localStorage.getItem('name')
        const photo = localStorage.getItem('photo')
        const isAdmin = localStorage.getItem('isAdmin')

        if (token) {
            context.commit('setUser', {
                token: token,
                photo: photo,
                name: name,
                isAdmin: isAdmin
            })
        }
    },

    logout(context) {
        console.log("logout")
        context.commit('setUser', {
            token: null,
            isAdmin: null,
            photo: null,
            name: null
        })
        localStorage.removeItem('token')
        localStorage.removeItem('name')
        localStorage.removeItem('photo')
        localStorage.removeItem('isAdmin')

        router.push("/");
    }
}