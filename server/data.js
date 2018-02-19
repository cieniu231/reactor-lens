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
db.activities.drop();
db.activities.insert([granet, saintSauveur, festival]);


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
db.cities.drop();
db.cities.insert([aix, boulogne]);
