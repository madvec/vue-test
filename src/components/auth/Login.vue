<template>
    <div class="login">
        <!--
        <div class="alert alert-info">
            Username: test<br />
            Password: test
        </div>-->
        <h2>Login</h2>
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <input placeholder="Username" type="text" v-model="username" name="username" class="form-control" :class="{ 'is-invalid': submitted && !username }" />
                <div v-show="submitted && !username" class="invalid-feedback">Username is required</div>
            </div>
            <div class="form-group">                
                <input placeholder="Password" type="password" v-model="password" name="password" class="form-control" :class="{ 'is-invalid': submitted && !password }" />
                <div v-show="submitted && !password" class="invalid-feedback">Password is required</div>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" :disabled="loading">Enter</button>
                <img v-show="loading" src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
            </div>
            <div v-if="error" class="alert alert-danger">{{error}}</div>
        </form>
    </div>
</template>

<script>
import { router } from '../../_helpers/router';
import { userService } from '../../_services';
import { store } from '../../store/store';

export default {
    data () {
        return {
            username: '',
            password: '',
            submitted: false,
            loading: false,
            returnUrl: '',
            error: ''
        }
    },
    created () {
        // reset login status
        userService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.$route.query.returnUrl || '/';
    },
    methods: {
        handleSubmit (e) {
            this.submitted = true;
            const { username, password } = this;

            // stop here if form is invalid
            if (!(username && password)) {
                return;
            }

            this.loading = true;
            userService.login(username, password)
                .then(                    
                    admin => {
                            router.push(this.returnUrl)
                            store.state.auth = localStorage.getItem('user');
                        },
                    error => {
                        this.error = error;
                        this.loading = false;
                    }
                );
        }
    }
};
</script>

<style scoped>
    .login {
        border: 1px solid #000;
        border-radius: 50px;
        max-width: 400px;
        position: absolute;
        left: 50%;
        top:50%;        
        transform:translate(-50%, -50%);
        -webkit-transform:translate(-50%, -50%);
        width: 100%;        
    }

    form {
        margin: 0 auto;
        padding: 30px;
        width: 100%;
    }

    h2 {
        margin-bottom: 40px;
    }

    .btn-primary {
        background-color: #c4e1fc;
        border: 1px solid #cce6ffe7;
        color:#000;
        display: block;
        font-weight: 600;
        margin: 0 auto;
        text-align: center;
        outline:none;
        padding: 5px 0;
        width: 90px;
    }

    .btn-primary:hover,
    .btn-primary:active,
    .btn-primary:visited {
        color:#000;
        background-color: #66b3ff;
    }

</style>