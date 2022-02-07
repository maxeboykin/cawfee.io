'use strict'

const {db, models: {User, Coffee, Order} } = require('../server/db')

/**
 * seed - this function clears the database, updates tables to
 *      match the models, and populates the database.
 */
async function seed() {
  await db.sync({ force: true }) // clears db and matches models to tables
  console.log('db synced!')

  // Creating Users
  const max = await User.create({ username: 'max', password: '123456', email: "max@test.com" })
  const sabi = await User.create({ username: 'sabi', password: '123456', email: "sabi@test.com" })
  const hyo = await User.create({ username: 'hyo', password: '123456', isAdmin: true, email: "hyo@test.com" })
  const krem = await User.create({ username: 'krem', password: '123456', email: "krem@test.com" })
  const brendan = await User.create({ username: 'brendan', password: '123456', email: "brendan@test.com" })
  const kelsey = await User.create({ username: 'kelsey', password: '123456', isAdmin: true, email: "kelsey@test.com" })
  const sean = await User.create({ username: 'sean', password: '123456', email: "sean@test.com" })
  const takumi = await User.create({ username: 'takumi', password: '123456', email: "takumi@test.com" })


  const users = [max, sabi, hyo, krem, brendan, kelsey, sean, takumi];

  //Creating Plants
  const nebula = await Coffee.create({
    name: 'Nebula - a Dark Roast',
    brand: 'Mother Tongue',
    price: 1740,
    weight: 310,
    imageUrl: 'https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1615001125/solidus/jorxdmda5suf6drumxda.png',
    imageUrlsecondary:'',
    shortDescription: "Super honey-sweet and full-bodied, this comforting cup's rich chocolaty notes and hint of roast will satisfy any sweet tooth.",
    taste: "Comforting & Rich",
    roastLevel: "Medium-Dark Roast"
  })
  const spaceCadet = await Coffee.create({
    name: 'Space Cadet',
    brand: 'Atomic Roasters',
    price: 1740,
    weight: 310,
    imageUrl: 'https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1638808870/solidus/mqhqkuiq8wnv9o9txqdh.png',
    imageUrlsecondary:'',
    shortDescription: "With a big, chocolaty body, cozy roasted almond nuttiness and tons of balanced caramel sweetness, this Trade-exclusive cup is just about as comforting as you can get.",
    taste: "Sweet & Smooth",
    roastLevel: "Medium Roast"
  })

  const bomSenso = await Coffee.create({
    name: 'Bom Senso',
    brand: 'Huckleberry',
    price: 1740,
    weight: 310,
    imageUrl: 'https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1606762363/solidus/sxahvcjktf09tjxwckjm.png',
    imageUrlsecondary:'',
    shortDescription: "With a big, chocolaty body, cozy roasted almond nuttiness and tons of balanced caramel sweetness, this Trade-exclusive cup is just about as comforting as you can get.",
    taste: "Comforting & Rich",
    roastLevel: "Medium-Dark Roast"
  })

  const doubleDouble = await Coffee.create({
    name: 'Double Double',
    brand: 'Portrait',
    price: 2120,
    weight: 310,
    imageUrl: 'https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1643814824/solidus/rs9mzrhouacx8dh7psl4.png',
    imageUrlsecondary:'',
    shortDescription: "A rich, cozy body and slightly roasty profile is complimented by some citrusy aromatics and chocolaty sweetness.",
    taste: "Comforting & Rich",
    roastLevel: "Medium Roast"
  })

  const israelSalazar = await Coffee.create({
    name: 'Israel Salazar',
    brand: 'Panther',
    price: 2590,
    weight: 310,
    imageUrl: 'https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1642608147/solidus/qfx77h4einddikmep7qm.png',
    imageUrlsecondary:'',
    shortDescription: "We're getting fruit cocktail vibes from this densely sweet cup: juicy blood orange acidity meets notes of green grape, with a sweet brown sugar finish.",
    taste: "Sweet & Tart",
    roastLevel: "Light-Medium Roast"
  })


  const nebilyerValley = await Coffee.create({
    name: 'Nebilyer Valley, Papua New Guinea',
    brand: 'Highwire',
    price: 2240,
    weight: 310,
    imageUrl: 'https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1642876457/solidus/nk4ybcdwjho4i8sav4ph.png',
    imageUrlsecondary:'',
    shortDescription: "This particularly dynamic cup features a soft pear sweetness, with a twist of lime and a hint of gingery spice.",
    taste: "Sweet & Tart",
    roastLevel: "Medium Roast"
  })

  const peruCutervo = await Coffee.create({
    name: 'Peru Cutervo Ukuku',
    brand: 'Anodyne',
    price: 2120,
    weight: 310,
    imageUrl: "https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1643390224/solidus/gbgdyff6rp437xwlej9r.png",
    imageUrlsecondary:'',
    shortDescription: "Dense, chocolaty, and sweet, this coffee's luxuriously rich body is complemented by faint hints of orange and toasted nuts.    ",
    taste: "Chocolaty & Sweet",
    roastLevel: "Medium Roast"
  })


  const aliyeMajo = await Coffee.create({
    name: 'Peru Cutervo Ukuku',
    brand: 'Anodyne',
    price: 2120,
    weight: 310,
    imageUrl: "https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1643814759/solidus/xu721geeixq7u2uefetu.png",
    imageUrlsecondary:'',
    shortDescription: "Dense, chocolaty, and sweet, this coffee's luxuriously rich body is complemented by faint hints of orange and toasted nuts.    ",
    taste: "Chocolaty & Sweet",
    roastLevel: "Medium Roast"
  })

  const ethiopiaArdiNatural = await Coffee.create({
    name: 'Peru Cutervo Ukuku',
    brand: 'Anodyne',
    price: 2120,
    weight: 310,
    imageUrl: "https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1642608351/solidus/n3oozjqobhefvxgchb0o.png",
    imageUrlsecondary:'',
    shortDescription: "Dense, chocolaty, and sweet, this coffee's luxuriously rich body is complemented by faint hints of orange and toasted nuts.    ",
    taste: "Chocolaty & Sweet",
    roastLevel: "Medium Roast"
  })


  const losCrestones = await Coffee.create({
    name: 'Peru Cutervo Ukuku',
    brand: 'Anodyne',
    price: 2120,
    weight: 310,
    imageUrl: "https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1642608336/solidus/jrdygooskkoigcffc1wf.png",
    imageUrlsecondary:'',
    shortDescription: "Dense, chocolaty, and sweet, this coffee's luxuriously rich body is complemented by faint hints of orange and toasted nuts.    ",
    taste: "Chocolaty & Sweet",
    roastLevel: "Medium Roast"
  })


  const peruAlbertoSaulBenavides = await Coffee.create({
    name: 'Peru Cutervo Ukuku',
    brand: 'Anodyne',
    price: 2120,
    weight: 310,
    imageUrl: "https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1642022393/solidus/kcx0de8fpqd8mcqccm5m.png",
    imageUrlsecondary:'',
    shortDescription: "Dense, chocolaty, and sweet, this coffee's luxuriously rich body is complemented by faint hints of orange and toasted nuts.    ",
    taste: "Chocolaty & Sweet",
    roastLevel: "Medium Roast"
  })

  const peruRobinsonRuiz = await Coffee.create({
    name: 'Peru Cutervo Ukuku',
    brand: 'Anodyne',
    price: 2120,
    weight: 310,
    imageUrl: "https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1642022407/solidus/hfl3ofd1cdgtszdobsvm.png",
    imageUrlsecondary:'',
    shortDescription: "Dense, chocolaty, and sweet, this coffee's luxuriously rich body is complemented by faint hints of orange and toasted nuts.    ",
    taste: "Chocolaty & Sweet",
    roastLevel: "Medium Roast"
  })


  const ethiopiaDimicha = await Coffee.create({
    name: 'Peru Cutervo Ukuku',
    brand: 'Anodyne',
    price: 2120,
    weight: 310,
    imageUrl: "https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1642022372/solidus/u98zk7cu4qf5cyc3n8id.png",
    imageUrlsecondary:'',
    shortDescription: "Dense, chocolaty, and sweet, this coffee's luxuriously rich body is complemented by faint hints of orange and toasted nuts.    ",
    taste: "Chocolaty & Sweet",
    roastLevel: "Medium Roast"
  })


  const barry = await Coffee.create({
    name: 'Peru Cutervo Ukuku',
    brand: 'Anodyne',
    price: 2120,
    weight: 310,
    imageUrl: "https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1641567960/solidus/bmjvguwj6najaamo2lra.png",
    imageUrlsecondary:'',
    shortDescription: "Dense, chocolaty, and sweet, this coffee's luxuriously rich body is complemented by faint hints of orange and toasted nuts.    ",
    taste: "Chocolaty & Sweet",
    roastLevel: "Medium Roast"
  })


  const hondurasLasPenitas = await Coffee.create({
    name: 'Peru Cutervo Ukuku',
    brand: 'Anodyne',
    price: 2120,
    weight: 310,
    imageUrl: "https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1642107166/solidus/qjnq4q8q5ejl8efovb4w.png",
    imageUrlsecondary:'',
    shortDescription: "Dense, chocolaty, and sweet, this coffee's luxuriously rich body is complemented by faint hints of orange and toasted nuts.    ",
    taste: "Chocolaty & Sweet",
    roastLevel: "Medium Roast"
  })


  const estrellaGallito = await Coffee.create({
    name: 'Peru Cutervo Ukuku',
    brand: 'Anodyne',
    price: 2120,
    weight: 310,
    imageUrl: "https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1643821068/solidus/htg8ctcotvem1hnwybtw.png",
    imageUrlsecondary:'',
    shortDescription: "Dense, chocolaty, and sweet, this coffee's luxuriously rich body is complemented by faint hints of orange and toasted nuts.    ",
    taste: "Chocolaty & Sweet",
    roastLevel: "Medium Roast"
  })


  const laCumbreManzano = await Coffee.create({
    name: 'Peru Cutervo Ukuku',
    brand: 'Anodyne',
    price: 2120,
    weight: 310,
    imageUrl: "https://res.cloudinary.com/roastcollective/image/upload/h_1600,w_1600,f_jpg,fl_progressive:steep,q_auto:good/v1643821051/solidus/uoskprswafhydabywyap.png",
    imageUrlsecondary:'',
    shortDescription: "Dense, chocolaty, and sweet, this coffee's luxuriously rich body is complemented by faint hints of orange and toasted nuts.    ",
    taste: "Chocolaty & Sweet",
    roastLevel: "Medium Roast"
  })



   const coffees = [nebula, spaceCadet, bomSenso, doubleDouble, israelSalazar, nebilyerValley, peruCutervo, laCumbreManzano, estrellaGallito, hondurasLasPenitas, ethiopiaDimicha, peruRobinsonRuiz, losCrestones, peruAlbertoSaulBenavides, ethiopiaArdiNatural, aliyeMajo, barry];

  //Adding items to cart
  // const order1 = await Order.findByPk(1)
  // const association1 = await order1.addPlants(1, {through: {price: 7000}})
  // const association4 = await order1.addPlants(3, {through: {price: 2000}})
  // const order2 = await Order.findByPk(2)
  // const association2 = await order2.addPlants(2, {through: {price: 2500}})
  // const order3 = await Order.findByPk(3)
  // const association3 = await order3.addPlants(3, {through: {price: 2000}})

  console.log(`seeded ${users.length} users`)
  console.log(`seeded ${coffees.length} coffees`)
  console.log(`seeded successfully`)
  return {
    // users: {
    //   max: users[0],
    //   sabi: users[1]
    // }
  }
}

/*
 We've separated the `seed` function from the `runSeed` function.
 This way we can isolate the error handling and exit trapping.
 The `seed` function is concerned only with modifying the database.
*/
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

/*
  Execute the `seed` function, IF we ran this module directly (`node seed`).
  `Async` functions always return a promise, so we can use `catch` to handle
  any errors that might occur inside of `seed`.
*/
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
