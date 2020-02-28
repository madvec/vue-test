export function configureFakeBackend() {
    let users = [
        { 
            id: 1, username: 'user1', password: 'password', firstName: 'Alex', lastName: 'Vel',
            transactions: [
                {
                    idTransaction:'1',
                    transaction:{
                        fromAccount:'123456789',
                        toAccount:'987654321',
                        amount:{
                            currency:'$',
                            value:'876.88'
                        }
                    },
                },
                {
                    idTransaction:'2',
                    transaction:{
                        fromAccount:'123456789',
                        toAccount:'456879521',
                        amount:{
                            currency:'$',
                            value:'876.88'
                        }
                    },
                },
                {
                    idTransaction:'3',
                    transaction:{
                        fromAccount:'123456789',
                        toAccount:'987654321',
                        amount:{
                            currency:'$',
                            value:'876.88'
                        }
                    },
                }
            ],
            balances:[
                {
                    account:"123456789",
                    balance:{ currency:"€",value:"765095.54"},
                    owner:'7612333392', createdAt:"2012-04-23T18:25:43.511Z"
                },
                {
                    account:"123456788",
                    balance:{ currency:"€",value:"765095.54"},
                    owner:'7612333392', createdAt:"2012-04-23T18:25:43.511Z"
                }
            ]         
        },
        { id: 2, username: 'user2', password: 'password', firstName: 'Alex', lastName: 'Vel' },
        { id: 3, username: 'user3', password: 'password', firstName: 'Alex', lastName: 'Vel' },
        { id: 4, username: 'user4', password: 'password', firstName: 'Alex', lastName: 'Vel' },
        { id: 5, username: 'user5', password: 'password', firstName: 'Alex', lastName: 'Vel' },
    ];
    let realFetch = window.fetch;
    window.fetch = function (url, opts) {
        return new Promise((resolve, reject) => {
            // simulate server api call
            setTimeout(() => {
                // authenticate
                if (url.endsWith('/users/authenticate') && opts.method === 'POST') {
                    // get parameters from post request
                    let params = JSON.parse(opts.body);
                    
                    // find if any user matches login credentials
                    let filteredUsers = users.filter(user => {
                        return user.username === params.username && user.password === params.password;
                    });        
                    

                    if (filteredUsers.length) {
                        // if login details are valid return user details                    
                        let user = filteredUsers[0];
                        let responseJson = {
                            id: user.id,
                            username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            userTransaction: user.transactions,
                            userBalance: user.balances
                        };                        
                        resolve({ ok: true, text: () => Promise.resolve(JSON.stringify(responseJson)) });
                    } else {
                        // else return error
                        reject('Username or password is incorrect');
                    }

                    return;
                }
                
                // pass through any requests not handled above
                realFetch(url, opts).then(response => resolve(response));

            }, 500);
        });
    }
}