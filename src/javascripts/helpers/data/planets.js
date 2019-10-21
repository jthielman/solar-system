const planets = [
  {
    name: 'Mercury',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA11245/PIA11245~orig.jpg',
    description: 'The smallest planet in our solar system and nearest to the Sun, Mercury is only slightly larger than Earth’s Moon.  From the surface of Mercury, the Sun would appear more than three times as large as it does when viewed from Earth, and the sunlight would be as much as seven times brighter. Despite its proximity to the Sun, Mercury is not the hottest planet in our solar system – that title belongs to nearby Venus, thanks to its dense atmosphere.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: null,
  },
  {
    name: 'Venus',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA00104/PIA00104~orig.jpg',
    description: 'Venus is the second planet from the Sun and our closest planetary neighbor. Similar in structure and size to Earth, Venus spins slowly in the opposite direction from most planets. Its thick atmosphere traps heat in a runaway greenhouse effect, making it the hottest planet in our solar system with surface temperatures hot enough to melt lead. Glimpses below the clouds reveal volcanoes and deformed mountains.  Venus is named for the ancient Roman goddess of love and beauty, who was known as Aphrodite to the Ancient Greeks.',
    isGasPlanet: false,
    numberOfMoons: 0,
    nameOfLargestMoon: null,
  },
  {
    name: 'Earth',
    imageUrl: 'https://images-assets.nasa.gov/image/epic-view-of-africa-and-europe-from-a-million-miles-away_19927967400_o/epic-view-of-africa-and-europe-from-a-million-miles-away_19927967400_o~orig.png',
    description: 'Our home planet is the third planet from the Sun, and the only place we know of so far that’s inhabited by living things.  While Earth is only the fifth largest planet in the solar system, it is the only world in our solar system with liquid water on the surface. Just slightly larger than nearby Venus, Earth is the biggest of the four planets closest to the Sun, all of which are made of rock and metal.  The name Earth is at least 1,000 years old. All of the planets, except for Earth, were named after Greek and Roman gods and goddesses. However, the name Earth is a Germanic word, which simply means “the ground.”',
    isGasPlanet: false,
    numberOfMoons: 1,
    nameOfLargestMoon: 'Moon',
  },
  {
    name: 'Mars',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA07893/PIA07893~orig.jpg',
    description: 'This dynamic planet has seasons, polar ice caps and weather and canyons and extinct volacanoes, evidence of an even more active past.  Mars is one of the most explored bodies in our solar system, and it’s the only planet where we’ve sent rovers to roam the alien landscape. NASA currently has three spacecraft in orbit, one rover and one lander on the surface and another rover under construction here on Earth. India and ESA also have spacecraft in orbit above Mars.  These robotic explorers have found lots of evidence that Mars was much wetter and warmer, with a thicker atmosphere, billions of years ago.',
    isGasPlanet: false,
    numberOfMoons: 2,
    nameOfLargestMoon: 'Phobos',
  },
  {
    name: 'Jupiter',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA02873/PIA02873~orig.jpg',
    description: 'Jupiter has a long history surprising scientists—all the way back to 1610 when Galileo Galilei found the first moons beyond Earth. That discovery changed the way we see the universe.  Fifth in line from the Sun, Jupiter is, by far, the largest planet in the solar system – more than twice as massive as all the other planets combined.  Jupiter’s familiar stripes and swirls are actually cold, windy clouds of ammonia and water, floating in an atmosphere of hydrogen and helium. Jupiter’s iconic Great Red Spot is a giant storm bigger than Earth that has raged for hundreds of years.',
    isGasPlanet: true,
    numberOfMoons: 79,
    nameOfLargestMoon: 'Ganymede',
  },
  {
    name: 'Saturn',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA11141/PIA11141~orig.jpg',
    description: 'Saturn is the sixth planet from the Sun and the second largest planet in our solar system.  Adorned with thousands of beautiful ringlets, Saturn is unique among the planets. It is not the only planet to have rings—made of chunks of ice and rock—but none are as spectacular or as complicated as Saturn’s.  Like fellow gas giant Jupiter, Saturn is a massive ball made mostly of hydrogen and helium.',
    isGasPlanet: true,
    numberOfMoons: 82,
    nameOfLargestMoon: 'Titan',
  },
  {
    name: 'Uranus',
    imageUrl: 'https://images-assets.nasa.gov/image/0301099/0301099~orig.jpg',
    description: 'The seventh planet from the Sun with the third largest diameter in our solar system, Uranus is very cold and windy. The ice giant is surrounded by 13 faint rings and 27 small moons as it rotates at a nearly 90-degree angle from the plane of its orbit. This unique tilt makes Uranus appear to spin on its side, orbiting the Sun like a rolling ball.  The first planet found with the aid of a telescope, Uranus was discovered in 1781 by astronomer William Herschel, although he originally thought it was either a comet or a star. It was two years later that the object was universally accepted as a new planet, in part because of observations by astronomer Johann Elert Bode.  William Herschel tried unsuccessfully to name his discovery Georgium Sidus after King George III. Instead the planet was named for Uranus, the Greek god of the sky, as suggested by Johann Bode.',
    isGasPlanet: true,
    numberOfMoons: 27,
    nameOfLargestMoon: 'Titania',
  },
  {
    name: 'Neptune',
    imageUrl: 'https://images-assets.nasa.gov/image/PIA01492/PIA01492~orig.jpg',
    description: 'Dark, cold and whipped by supersonic winds, ice giant Neptune is the eighth and most distant planet in our solar system.  More than 30 times as far from the Sun as Earth, Neptune is the only planet in our solar system not visible to the naked eye and the first predicted by mathematics before its discovery. In 2011 Neptune completed its first 165-year orbit since its discovery in 1846.  NASA’s Voyager 2 is the only spacecraft to have visited Neptune up close. It flew past in 1989 on its way out of the solar system.',
    isGasPlanet: true,
    numberOfMoons: 13,
    nameOfLargestMoon: 'Triton',
  },
  {
    name: 'Pluto',
    imageUrl: 'https://media1.tenor.com/images/122ccc40b991e38c8fc6ba974eb71e4d/tenor.gif?itemid=4559233',
    description: 'Pluto is not a planet.',
    isGasPlanet: false,
    numberOfMoons: 5,
    nameOfLargestMoon: 'Charon',
  },
];

const getPlanets = () => planets;

export default { getPlanets };
