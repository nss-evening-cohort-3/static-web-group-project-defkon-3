var products = [
  {name: "Czech Military Gas Mask",
  decription: "Protect yourself from the deadly chemical agents deployed by the world's militaries after Z-Day in their desperate attempts to kill the horde.(Filters sold separately.)",
  price: "$100,000.99",
  img: "http://www.trueswords.com/images/prod/bkm10m.jpg"},
  
  {name: "Czech Military Gas Mask Filters",
  decription: "Filters chemicals before they reach your lungs and turns your internal organs to goo.",
  price: "$5,000.99",
  img: "http://www.trueswords.com/images/prod/czech_gasmask_filters.jpg"},

  {name: "B.O.B.",
  decription: "Everyone needs a good Bug Out Bag. Now 60% less likely to fall apart while carrying over 5 lbs.",
  price: "$3,000.99",
  img: "http://www.trueswords.com/images/prod/zombie_bag_biohazard_black.jpg"},

  {name: "Tactical Axe",
  decription: "This is your go-to weapon for when you have one or two straggling walkers you need to clear out of your AO, not recommended for large groups, as the sharp spikey end tends to get logded pretty deep in their skulls.",
  price: "$5,000.99",
  img: "http://www.trueswords.com/images/prod/advanced_combat_tactical_tomahawk2.jpg"},

  {name: "Anti-Zombie Hammer",
  decription: "SMASH things with this beautiful piece of destruction.",
  price: "$7,000.99",
  img: "http://www.trueswords.com/images/prod/anti-personnel-tactical-riot-hammer%E2%80%9315-inch-overall-a12-uc3069.jpg"},

  {name: "Hand Cannon",
  decription: "Pretty much the best weapon to have at your disposal in any zombie apocalypse....I mean the name says it all, right?  It's a cannon for your hand!  You'll be the best zombie slayer on your decimated block!  Good luck finding ammo though.",
  price: "$100,000,000.99",
  img: "http://www.thefirearmblog.com/blog/wp-content/uploads/2010/02/taurus_raging_judge-tfb.jpg"},

  {name: "Cannon",
  decription: "Literal cannon. No we're not joking. If you happen to run out of artilery shells, you can always use zombie heads.",
  price: "$700.99(Shipping and Handling is extra. Allow 10-15 years for delivery)",
  img: "http://vignette3.wikia.nocookie.net/dragonball/images/d/dc/Cannon-625x415.jpg/revision/latest?cb=20150430182251"},

  {name: "First-Aid-Kit",
  decription: "Hide your zombie bites like a pro with this full First-Aid-Kit.",
  price: "$6,900.69",
  img: "http://www.trueswords.com/images/prod/master_field_medic_first_aid_kit.jpg"},

  {name: "Tactical Shovel",
  decription: "When you're not cutting zombie heads with this military-grade shovel you can be digging furiously trying to hide your super special stash of Twinkies or those last few rounds of ammo from your remaining friends and loved ones",
  price: "$900.99",
  img: "http://www.trueswords.com/images/prod/tactical_combat_shovel_selfdefense_tool.jpg"},
]
var productPlacement = document.getElementById("products")

for (var i = 0; i < products.length; i++) {
  productPlacement.innerHTML += '<section class="cards">' + "<p class ='h3'>" + products[i].name + "</p>" + '<img src="' + products[i].img + '">' + "<p class='descript'>" + products[i].decription + "</h3>" + "<p class='price'>" + products[i].price + "</p>" + "<a href='https://www.youtube.com/watch?v=dQw4w9WgXcQ'>BUY HERE!</a>" + "</section>"
};















