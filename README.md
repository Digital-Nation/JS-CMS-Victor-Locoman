# JS Track - Project CMS

## Scheletul proiectului

### Dependențele

Pentru a instala dependențele (e nevoie doar la început):

```
npm install
```

### Environment config

Datele de conectare la baza de date se găsesc în `.env`. Din motive de securitate, aceste date nu se
stochează în Git. De aceea e nevoie să creezi acest fișier folosind modelul `.env.example`:

1. copiază `.env.example` în `.env`
2. completează `.env` cu datele de conectare la MongoDB

### Start

Pentru a porni proiectul:

```
npm start
```

Apoi intrăm pe http://localhost:3000 pentru blog și pe https://localhost:3000/admin pentru cms
