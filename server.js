const express = require('express');
const app = express();

const mockData = [
    {

    }
]

app.get(`/`, (req, res) => {

    const mockData = [
        {
            id: '1',
            document: {
                documentNumber: '12345',
                documentType: 'abc'
            },
            name: 'Paulo',
            address: {
                street: 'Texas Street',
                state: 'texas',
                address: 'cde',
                country: 'usa'
            }
        },
        {
            id: '1',
            document: {
                documentNumber: '54321',
                documentType: 'abc'
            },
            name: 'Marcos',
            address: {
                street: 'California Street',
                state: 'California',
                address: 'cde',
                country: 'usa'
            }
        },
        {
            id: '1',
            document: {
                documentNumber: '67890',
                documentType: 'abc'
            },
            name: 'Pedro',
            address: {
                street: 'Ohio Street',
                state: 'Ohio',
                address: 'cde',
                country: 'usa'
            }
        }
    ]

    const response = mockData.filter(d => d.name.toUpperCase() === req.query.q.toUpperCase() || d.document.documentNumber === req.query.q)
    res.send(response);
})

app.listen(3000, () => {
    console.log('server running');
})