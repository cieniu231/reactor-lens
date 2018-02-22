// we use ES5 code because current mongo versions are not compatible with ES6

// *** users
var derek = {
    _id: ObjectId(),
    email: "derek@dkit.ie"
};
var gilles = {
    _id: ObjectId(),
    email: "gilles@iut.fr"
};
db.users.drop();
db.users.insert([derek, gilles]);


// *** activities
var granet = {
    _id: ObjectId(),
    name: "musee Granet",
    nature: "place",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Aix/granet1.jpg", "/images/Aix/granet2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "I love this place !!"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Bof!"
    }],
    likers: [],
    description: "Le musee Granet presente pres de 600 oeuvres de peinture, sculpture, pieces archeologiques. Peintures hollandaises, italiennes, francaises de diverses epoques",
    url: "http://museegranet-aixenprovence.fr"
};

var saintSauveur = {
    _id: ObjectId(),
    name: "cathedral saint Sauveur",
    nature: "place",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Aix/sauveur1.jpg", "/images/Aix/sauveur2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date(),
        text: "great"
    }],
    likers: [],
    description: "no description"
};

var festival = {
    _id: ObjectId(),
    name: "festival de musique",
    nature: "event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/Aix/festival1.png", "/images/Aix/festival1.jpg", "/images/Aix/festival2.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date(),
        text: "Awful music"
    }],
    likers: [],
    description: "Fort de son succes, le Festival d'Aix accueille un public non seulement local, mais aussi national, et un grand nombre de spectateurs et de journalistes venus du monde entier.",
    url: "http://festival-aix.com/en",
    dateStart: new Date('2016-6-15'),
    dateEnd: new Date('2016-7-10')
};

// *** Ireland

var fringe = {
    _id: ObjectId(),
    name: "Galway Fringe Festival",
    nature: "event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/fringe.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Really great event!"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Bof!"
    }],
    likers: [],
    description: "The Galway Fringe Festival is a boutique multidisciplinary Arts Festival based in Galway City. The festival has an international roster of talented artists and encompasses visual art, music, theatre, dance, literature, cabaret and exciting street spectacles. The Galway Fringe Festival also realises the vital importance of providing a platform for home-grown artists and aims to showcase our national talent to the world and to Galway. ",
    url: "http://thisisgalway.ie/event/galway-fringe-festival.ie",
    dateStart: new Date('2016-6-15'),
    dateEnd: new Date('2016-7-10')
};

var races = {
    _id: ObjectId(),
    name: "Galway Races",
    nature: "event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/races.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Great day out at the races :)  !!"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Bof!"
    }],
    likers: [],
    description: "Widely regarded as the highlight of the Summer season in Ireland, Galway Races offers you fantastic horse racing, live music and entertainment, stunning fashion, family fun and an electric atmosphere that continues to draw people from all over Ireland and abroad to experience first-hand the infectious sense of fun. ",
    url: "https://www.galwayraces.com/"
};

var arts = {
    _id: ObjectId(),
    name: "Galway International Arts Festival",
    nature: "event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/arts.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Really good fun !!"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Bof!"
    }],
    likers: [],
    description: "The Galway International Arts Festival is Ireland's largest annual arts festival. Founded in 1978, the Festival collaborates with artists and companies throughout the world to produce and present an international programme of theatre, spectacle, dance, visual arts, music, literature & comedy involving hundreds of artists and performers. Galway International Arts Festival is at the heart of all aspects of life in Galway City contributing immeasurably to the economic, social and cultural life of the west of Ireland. Over its 40-year history, the Festival has become a vital showcase for Irish arts internationally and international arts in Ireland and is now firmly established as Ireland's leading arts festival.  ",
    url: "https://www.galwayraces.com/"
};

// ***France

var disney = {
    _id: ObjectId(),
    name: "Disneyland Paris",
    nature: "place",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/disney.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Magical!!"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Bof!"
    }],
    likers: [],
    description: "Disneyland Park, originally Euro Disney, is a theme park found at Disneyland Paris in Marne-la-Vallée, France. The park opened on 12 April 1992 as the first of the two parks built at the resort. Designed and built by Walt Disney Imagineering, its layout and attractions are similar to Disneyland Park in Anaheim, California and Magic Kingdom at Walt Disney World in Bay Lake, Florida. Spanning 56.656 ha (140 acres) (the second largest Disney park based on the original, after Shanghai Disneyland Park),[1] it is dedicated to fairy tales and Disney characters. In 2016, the park hosted approximately 8.4 million visitors, making it the most-visited theme park in Europe, and the 13th-most visited theme park in the world.",
    url: "https://www.getyourguide.com/"
};

var sealife = {
    _id: ObjectId(),
    name: "Sealife",
    nature: "place",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/sealife.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Magical!!"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Bof!"
    }],
    likers: [],
    description: "Get ready to explore the deep blue at the largest aquarium in the region.Take a fascinating journey from the River Seine to the tropical waters of Nemo's Reef. Discover 50 tanks full of colourful marine life and walk beneath the waves through the 360° underwater tunnel for an unforgettable face-to-face with sharks.",
    url: "https://www.visitsealife.com/paris/en/discover/inside-the-aquarium/"
};

var pulp = {
    _id: ObjectId(),
    name: "Pulp Festival",
    nature: "Event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/pulp.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Fabulous atmosphere with wonderful artists!!"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Bof!"
    }],
    likers: [],
    description: "The Pulp Festival is a wonderful exploration of the world of the arts, that combines both comics and shows.",
    url: "https://www.jdanimation.fr/actualites/animation-agenda/item/le-pulp-festival-a-marne-la-vallee.html"
};

// *** Poland

var museum = {
    _id: ObjectId(),
    name: "Warsaw Uprising Museum",
    nature: "Place",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/museum.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Great visit!!"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Bof!"
    }],
    likers: [],
    description: "The Warsaw Uprising Museum in the Wola district of Warsaw, Poland, is dedicated to the Warsaw Uprising of 1944. The institution of the museum was established in 1983, but no construction work took place for many years. It opened on July 31, 2004, marking the 60th anniversary of the uprising.\n" +
    "\n" +
    "The museum sponsors research into the history of the uprising, and the history and possessions of the Polish Underground State. It collects and maintains hundreds of artifacts — ranging from weapons used by the insurgents to love letters — to present a full picture of the people involved. The museum's stated goals include the creation of an archive of historical information on the uprising and the recording of the stories and memories of living participants. Its director is Jan Oldakowski, with historian Dariusz Gawin from the Polish Academy of Sciences as his deputy.\n" +
    "\n" +
    "The museum is a member organisation of the Platform of European Memory and Conscience.",
    url: "https://www.1944.pl/en"
};

var orange = {
    _id: ObjectId(),
    name: "Orange Warsaw Festival",
    nature: "Event",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/orange.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Fab!!"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Bof!"
    }],
    likers: [],
    description: "Orange Warsaw Festival is a Polish annual music festival. The first edition took place in 2008. Since 2010 it has been broadcast on television by TVN. It moved to The National Stadium in May 2013. The most important musical and cultural event of Warsaw – Orange Warsaw Festival. A perfect way to spend one of the first summer weekends of the year.",
    url: "https://orangewarsawfestival.pl/en"
};

var science = {
    _id: ObjectId(),
    name: "Copernicus Science Center",
    nature: "Place",
    editor: {
        _id: gilles._id,
        email: gilles.email
    },
    pictures: ["/images/science.jpg"],
    comments: [{
        user: {
            _id: derek._id,
            email: derek.email
        },
        date: new Date("2014"),
        text: "Very enlightening!!"
    }, {
        user: {
            _id: gilles._id,
            email: gilles.email
        },
        date: new Date("2015"),
        text: "Bof!"
    }],
    likers: [],
    description: "Copernicus Science Centre is a science museum standing on the bank of the Vistula River in Warsaw, Poland. It contains over 450 interactive exhibits that enable visitors to single-handedly carry out experiments and discover the laws of science for themselves. The Centre is the largest institution of its type in Poland and one of the most advanced in Europe. In 2015 it has been visited by over 5 million people since its opening.",
    url: "http://www.kopernik.org.pl/en/"
};

db.activities.drop();
db.activities.insert([granet, saintSauveur, festival, fringe, races, arts, disney, sealife, pulp, museum, orange, science]);


// **** cities
var aix = {
    _id: ObjectId(),
    name: 'Aix en Provence',
    coordinates: {
        long: "43.5263",
        lat: "5.4454"
    },
    description: "Protegee par la Montagne Sainte Victoire qui culmine à  1.011 m, Aix est entouree d'une campagne richement preservee avec d'authentiques bastides provencales entourees de jardins à la francaise. " +
    "Son nom vient des sources thermales decouvertes à la fondation de la ville en 123 avant JC par les romains. <br />" +
    "Aix en Provence etait la capitale de la Provence au XVeme siecle : marchands prosperes et notables firent de la ville la Florence provencale que l'on connait aujourd'hui. " +
    "Demeures bourgeoises, placettes fleuries, hotels particuliers, fontaines anciennes, ruelles ombragees... toutes les images de la Provence noble des XVII et XVIII sont rassemblees à Aix. <br />",
    picture: '/images/Aix/aix.jpg',
    activities: [{
        _id: granet._id,
        name: granet.name,
        nature: granet.nature,
        picture: granet.pictures[0]
    }, {
        _id: saintSauveur._id,
        name: saintSauveur.name,
        nature: saintSauveur.nature,
        picture: saintSauveur.pictures[0]
    }, {
        _id: festival._id,
        name: festival.name,
        nature: festival.nature,
        picture: festival.pictures[0]
    }]
};

var boulogne = {
    _id: ObjectId(),
    name: 'Boulogne sur mer',
    coordinates: {
        long: "50.7264",
        lat: "1.6147"
    },
    description: "",
    picture: '/images/Boulogne/centre.jpg',
    activities: []
};

var galway = {_id: ObjectId(),
    name: 'Galway',
    coordinates: {
        long: "42.412", lat: "4.33"
    },
    description: "Galway is a city in the West of Ireland in the province of Connacht. Galway City Council is the local authority for the city. Galway lies on the River Corrib between Lough Corrib and Galway Bay and is surrounded by County Galway. It is the fourth most populous urban area in the Republic of Ireland and the sixth most populous city in the island of Ireland.\n" +
    "\n" +
    "According to the 2016 Irish Census, Galway city has a population of 79,504; however, the rural county agglomeration is far more populous.\n" +
    "\n" +
    "Galway will be the European Capital of Culture in 2020, alongside Rijeka, Croatia.",

    picture: '/images/galway.jpg',

    activities: [{
        _id: fringe._id,
        name: fringe.name,
        nature: fringe.nature,
        picture: fringe.pictures[0]
    }, {
        _id: races._id,
        name: races.name,
        nature: races.nature,
        picture: races.pictures[0]
    }, {
        _id: arts._id,
        name: arts.name,
        nature: arts.nature,
        picture: arts.pictures[0]
    }]};

var marne = {
    _id: ObjectId(),
    name: 'Marne La Vallée ',
    coordinates: {
        long: "48.5133",
        lat: "2.3555"
    },
    description: "Marne La Vallée is a French Town that is located East of Paris. It is a group of cities that is divided into four sectors. Porte de Paris / Val Maubuée / Val de Bussy and Val d’Europe. Most of these cities are located in the Seine et Marne, an Ile de France region. It’s the second most touristic region in Ile de France after Paris and attracts around 30 to 40 million people annually. Marne La Vallée is Europe’s leading paying tourist destination. At Marne La Vallée you will find Disneyland Paris, many castles, museums and also the largest Buddhist temple in Europe.",


    picture: '/images/marne.jpg',

    activities: [{
        _id: disney._id,
        name: disney.name,
        nature: disney.nature,
        picture: disney.pictures[0]
    }, {
        _id: sealife._id,
        name: sealife.name,
        nature: sealife.nature,
        picture: sealife.pictures[0]
    }, {
        _id: pulp._id,
        name: pulp.name,
        nature: pulp.nature,
        picture: pulp.pictures[0]
    }]
};

var warsaw = {
    _id: ObjectId(),
    name: 'Warsaw ',
    coordinates: {
        long: "21.000",
        lat: "52.150"
    },
    description: "Warsaw is the capital and largest city of Poland. The metropolis stands on the Vistula River in east-central Poland and its population is officially estimated at 1.760 million residents within a greater metropolitan area of 3.101 million residents, which makes Warsaw the 9th most-populous capital city in the European Union. The city limits cover 516.9 square kilometres (199.6 sq mi), while the metropolitan area covers 6,100.43 square kilometres (2,355.39 sq mi). Warsaw is an alpha global city, a major international tourist destination and a significant cultural, political and economic hub. With a nominal GDP of $233 billion (PPP), it is the wealthiest capital city in Central and Eastern Europe alongside Berlin. Moreover, its historical Old Town was designated a UNESCO World Heritage Site.",


    picture: '/images/warsaw.jpg',

    activities: [{
        _id: museum._id,
        name: museum.name,
        nature: museum.nature,
        picture: museum.pictures[0]
    }, {
        _id: orange._id,
        name: orange.name,
        nature: orange.nature,
        picture: orange.pictures[0]
    }, {
        _id: science._id,
        name: science.name,
        nature: science.nature,
        picture: science.pictures[0]
    }]
};

db.cities.drop();
db.cities.insert([aix, boulogne, galway, marne, warsaw]);
