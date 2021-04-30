# Google SpreadSheet API

API que cadastra quaisquer valores numa planilha Google.

<br />

## Conseguindo as credenciais

* Siga os passos para criar uma [Conta de Serviço Google](https://cloud.google.com/docs/authentication/getting-started#creating_a_service_account) e faça o download do JSON.

* Em [Google Sheets](https://docs.google.com/spreadsheets/) crie uma nova planilha e compartilhe permissão de uso com o `client_email` que está no arquivo JSON.

* A API requer o ID da planilha que pode ser encontrado na URL. Ex.: ![image](https://user-images.githubusercontent.com/31348285/116716035-a786d580-a9ad-11eb-91f5-c2425ef7102e.png)


<br />


## Exemplo

```javascript
const sheetId = '1xn4mnqrdRimPXdVERyx1gEDmnYY5qlkVS0O47msksbU' // ID da planilha

  await axios.post('https://google-sheet-api.vercel.app/api/spreadsheet', {
    spreadsheet_id: sheetId,
    client_email: credentials.client_email,
    private_key: credentials.private_key,
    data: {
      name: 'Matheus Trindade',
      email: 'trindadematheus27@gmail.com',
      github: 'https://github.com/trindadematheus'
    }
  })
```
