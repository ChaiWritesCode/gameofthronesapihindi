
# Game of Thrones quotes API In Hindi

A simple API to retrieve some quotes of the famous TV Show, Game of Thrones!

## API

### `GET api/onedialog`

Get a random quote:

> [http://localhost:8000/api/onedialog](http://localhost:8000/api/onedialog)

[{"id":547,"character":"टायरियन","sentence":"थिएटर का वह टुकड़ा हमारे परिवार को एक पीढ़ी के लिए परेशान करेगा।"}]

### `GET api/fivedialog`

Get a random quote:

> [http://localhost:8000/api/fivedialog](http://localhost:8000/api/fivedialog)

[{"id":598,"character":"ब्रायन","sentence":"मैं आपकी पीठ की रक्षा करूंगा और आपकी सलाह का पालन करूंगा, और जरूरत पड़ने पर आपके लिए अपना जीवन दे दूंगा।"},{"id":564,"character":"टायरियन","sentence":"एक बार जब आप कुत्ते के सिर पर मुकुट लगा लेते हैं तो उस पर पट्टी बांधना मुश्किल होता है।"},{"id":528,"character":"जॉन","sentence":" \"लेकिन\" शब्द से पहले की हर चीज घोड़े की छड़ी है।"},{"id":529,"character":"जॉन","sentence":"युद्ध अभी खत्म नहीं हुआ है। और मैं आपसे वादा करता हूं, दोस्त, असली दुश्मन तूफान का इंतजार नहीं करेगा। वह तूफान लाता है।"},{"id":632,"character":"क्यूबर्न","sentence":"लेकिन कभी-कभी इससे पहले कि हम नए की शुरुआत कर सकें, पुराने को आराम दिया जाना चाहिए।"}]


### `GET api/characterdialog?character=आर्य`

Returns quotes for a character *(how to find this information explained below)*.  
By default, all quotes from the character are returned.

> [http://localhost:8000/api/characterdialog?character=%E0%A4%86%E0%A4%B0%E0%A5%8D%E0%A4%AF](http://localhost:8000/api/characterdialog?character=%E0%A4%86%E0%A4%B0%E0%A5%8D%E0%A4%AF)

[{"id":533,"character":"आर्य","sentence":"अंतिम शब्द लेने की कोई आवश्यकता नहीं है, श्रीमन्त बेलीश। मुझे लगता है कि यह कुछ चालाक था। "},{"id":534,"character":"आर्य","sentence":"जब लोग आपसे पूछें कि यहाँ क्या हुआ, तो उन्हें बताएं कि उत्तर को याद है। उन्हें बताएं कि घर फ्रे के लिए सर्दी आ गई है"},{"id":535,"character":"आर्य","sentence":"कुछ भी किसी भी चीज़ से बेहतर या बुरा नहीं है। कुछ भी नहीं बस कुछ भी नहीं है।"},{"id":607,"character":"आर्य","sentence":"डर तलवारों से भी गहरा होता है।"}]
   
### `GET /api/character`

Returns characters with their fullname and housename.

> [http://localhost:8000/api/character](http://localhost:8000/api/character)
[{"id":10,"character":"amon","details":{"नाम":"एमोन टारगैरियन","घराना":"टारगैरियन"}}]

     
### `GET /api/gharana`

Returns the fullname of housename .

> [http://localhost:8000/api/gharana](http://localhost:8000/api/gharana)

[{"id":9,"house":"बेलिश","houses":{"नाम":"घराना हैरेनहाल का बेलिश"}}]
  

## Contributing

If you want to add some quotes, please follow these steps. Make sure you have Git installed on your local computer.

* Fork the projet by clicking on the "Fork" button on the top right corner of this page
* Git clone your fork
* Open the file `datas.json`
* Make sure the quote doesn't already exist!
* Edit the sections. Make sure the character and house exist.
* Commit and push your changes
* Submit a pull request

Thanks!
