//模拟database所需要储存的数据

import {
    img_id1,
    img_id2,
    img_id3,
    img_id4,
    img_id5,
    img_id6,
    img_id7,
    img_id8,
    img_id9,
    img_id10,
    img_id11,
    img_id12,
    img_id13,
    img_id14,
    img_id15,
    img_id16,
    img_id17,
    img_id18,
    img_id19,
    img_id20,
    img_id21,
    img_id22,
    img_id23,
    img_id24,

    userAvatar,
    anthonyAvatar
} from "../Assets"


export const database_user_info = [
    {
        id : "Anthony",
        name : "Anthony",
        password : "iloveyou",
        avatar : userAvatar,
        wallet : [
            {
                tag : "ETH",
                address : "0x123...6789",
                balance: "0.525",
                addDate: "June 2021"
            },
            {
                tag : "BTC",
                address : "0x234...6789",
                balance: "103.525",
                addDate: "February 2023"
            }
        ],
        card:[
            {
                name: "BMO MasterCard/MasterCard BMO",
                cardType : "Credit Card",
                company : "MasterCard",
                cardHolder: "Anthony",
                expiryDate: "06/22",
                number: "... 3456",
            },
            {
                name: "RBC VISA/VISA RBC",
                cardType : "Credit Card",
                company : "Visa",
                cardHolder: "Anthony",
                expiryDate: "06/24",
                number: "... 8492",
            }
        ],
        email : "",
        joinDate : "June 2021",
        ownCard : ["1","2","3","4","9","10"],
        saleCard : ["4"],
        offermade : ["5"],
        favorite : ["1","2","3","4","5"],
    },
    {
        id : "Echo",
        name : "Echo",
        password : "iheartyou",
        avatar : anthonyAvatar,
        wallet : [],
        card:[],
        email : "",
        joinDate : "June 2020",
        ownCard : ["1"],
        saleCard : ["1"],
        offermade : ["5"],
        favorite : ["1","2","5"],
    },
]

//此list用做所有product的集合，后端应该融合所有的table，然后返回一个list


//export const database_product_owner

//join date sale date


export const database_product_info = [
    {
        id : "1",
        name : "2011 Upper Deck All Time Greats #SJA8 Lebron James (BGS 8.5 NM-MT+)",
        tag: {
            Category : "Basketball Cards",
            Set : "Upper Deck ALl Time Greats",
            Number : "SJA8",
            Year: "2011",
            Grader: "BGS",
            Serial : "0008276475",
            Grade : "8.5 NM-MT+",
            Subject: "Lebron James"

        },
        details :{
            standard : "ERC-721 token on the blockchain",
            chain : "ethereum",
            contact_address : "0xd4ac...F6FA",
            token_id : "105986...1283"
        },
        img:[
            img_id1,
            img_id2,
            img_id3,
            img_id4
        ]
    },
    {
        id : "2",
        name : "2018 Panini Prizm #102 Patrick Mahomes II (PSA 10 GEM MINT)",
        tag: {
            Category : "Football Cards",
            Set : "Panini Prizm"
        },
        details :{
            standard : "ERC-721 token on the blockchain",
            chain : "ethereum",
            contact_address : "0xd4ac...F6FA",
            token_id : "847531...6064"
        },
        img:[
            img_id2,
            img_id3,
        ]
    },
    {
        id : "3",
        name : "1996 Pokémon Japanese Base Set Holo Gyarados #130 (PSA 55990817)",
        tag: {
            Category : "Pokemon TCG",
            Set : "Base Set"
        },
        details :{
            standard : "ERC-721 token on the blockchain",
            chain : "ethereum",
            contact_address : "0xd4ac...F6FA",
            token_id : "543136...0168"
        },
        img:[
            img_id3,
            img_id4,
            img_id5
        ]
    },
    {
        id : "4",
        name : "2018 Panini Prizm #102 Patrick Mahomes II (PSA 10 GEM MINT)",
        tag: {
            Category : "Football Cards",
            Set : "Panini Prizm"
        },
        details :{
            standard : "ERC-721 token on the blockchain",
            chain : "ethereum",
            contact_address : "0xd4ac...F6FA",
            token_id : "847531...6064"
        },
        img:[
            img_id2
        ]
    },
    {
        id : "5",
        name : "2000 Pokémon Japanese Base Set Holo Gyarados #126 (PSA 55990817)",
        tag: {
            Category : "Pokemon TCG",
            Set : "Base Set"
        },
        details :{
            standard : "ERC-721 token on the blockchain",
            chain : "ethereum",
            contact_address : "0xd4ac...F6FA",
            token_id : "543136...0168"
        },
        img:[
            img_id3
        ]
    },
    {
        id : "6",
        name : "2000 Pokémon Japanese Base Set Holo Gyarados #127 (PSA 55990817)",
        tag: {
            Category : "Pokemon TCG",
            Set : "Base Set"
        },
        details :{
            standard : "ERC-721 token on the blockchain",
            chain : "ethereum",
            contact_address : "0xd4ac...F6FA",
            token_id : "543136...0168"
        },
        img:[
            img_id7
        ]
    },
    {
        id : "7",
        name : "2000 Pokémon Japanese Base Set Holo Gyarados #128 (PSA 55990817)",
        tag: {
            Category : "Pokemon TCG",
            Set : "Base Set"
        },
        details :{
            standard : "ERC-721 token on the blockchain",
            chain : "ethereum",
            contact_address : "0xd4ac...F6FA",
            token_id : "543136...0168"
        },
        img:[
            img_id7,
            img_id8,
        ]
    },
    {
        id : "8",
        name : "2000 Pokémon Japanese Base Set Holo Gyarados #130 (PSA 55990817)",
        tag: {
            Category : "Pokemon TCG",
            Set : "Base Set"
        },
        details :{
            standard : "ERC-721 token on the blockchain",
            chain : "ethereum",
            contact_address : "0xd4ac...F6FA",
            token_id : "543136...0168"
        },
        img:[
            img_id9,
            img_id10,
        ]
    },
    {
        id : "9",
        name : "2000 Pokémon Japanese Base Set Holo Gyarados #132 (PSA 55990817)",
        tag: {
            Category : "Pokemon TCG",
            Set : "Base Set"
        },
        details :{
            standard : "ERC-721 token on the blockchain",
            chain : "ethereum",
            contact_address : "0xd4ac...F6FA",
            token_id : "543136...0168"
        },
        img:[
            img_id11,
            img_id12,
        ]
    },
    {
        id : "10",
        name : "1991 AW Sports #69 Muhammad Ali (SGC 9 MINT)",
        tag: {
            Category : "Boxing cards",
            Set : "AW Sports"
        },
        details :{
            standard : "ERC-721 token on the blockchain",
            chain : "polygon",
            contact_address : "0xd4ac...dcAD",
            token_id : "543136...0168"
        },
        img:[
            img_id13,
            img_id14,
            img_id15,
        ]
    },
    {
        id : "11",
        name : "1987 A Question of Sport Mike Tyson - UK (PSA 9 MINT)",
        tag: {
            Category : "Boxing cards",
            Set : "AW Sports"
        },
        details :{
            standard : "ERC-721 token on the blockchain",
            chain : "polygon",
            contact_address : "0xd4ac...dcAD",
            token_id : "543136...0168"
        },
        img:[
            img_id16,
            img_id17,
            img_id18,
        ]
    },
    {
        id : "12",
        name : "1972 Topps #122 Bobby Orr (PSA 8 NM-MT)",
        tag: {
            Category : "Hockey cards",
            Set : "AW Sports"
        },
        details :{
            standard : "ERC-721 token on the blockchain",
            chain : "polygon",
            contact_address : "0xd4ac...dcAD",
            token_id : "543136...0168"
        },
        img:[
            img_id19,
            img_id20,
            img_id21,
        ]
    },
    {
        id : "13",
        name : "1972 Topps #123 Bobby Orr (PSA 8 NM-MT)",
        tag: {
            Category : "Hockey cards",
            Set : "AW Sports"
        },
        details :{
            standard : "ERC-721 token on the blockchain",
            chain : "polygon",
            contact_address : "0xd4ac...dcAD",
            token_id : "543136...0168"
        },
        img:[
            img_id22,
            img_id23,
            img_id24,
        ]
    }
]